import {
  Layout,
  LoginTitle,
  SocialLinks,
} from "../components/layouts/Layout.js";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";
import { Button, Typography, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import "../style.css";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        navigate("/dashboard");
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <Layout>
      <Col md={5} className="align-self-center p-5">
        <LoginTitle />
        <form noValidate onSubmit={formik.handleSubmit}>
          <div>
            <Stack spacing={3} className="my-2">
              <TextField
                error={!!(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                placeholder="User name or Email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
              />
              <TextField
                error={!!(formik.touched.password && formik.errors.password)}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                placeholder="Password"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.password}
              />
            </Stack>
          </div>
          {formik.errors.submit && (
            <Typography color="error" sx={{ mt: 3 }} variant="body2">
              {formik.errors.submit}
            </Typography>
          )}
          <Button
            className="login-button"
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            type="submit"
            variant="contained"
          >
            Sign In
          </Button>
        </form>
        <hr class="hr-text" data-content="Or Sign In With"></hr>

        <SocialLinks />
      </Col>
      <Col
        md={7}
        className="d-none d-md-block d-lg-block align-self-center px-12"
      >
        <Image src="/assets/login_image.png" />
      </Col>
    </Layout>
  );
};

export default Login;
