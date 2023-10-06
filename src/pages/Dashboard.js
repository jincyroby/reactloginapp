import React, { useEffect, useState } from "react";
import { Layout, Header, Footer } from "../components/layouts/Layout.js";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const url = "https://restcountries.com/v2/all?fields=name,region,flag";
function Dashboard() {
  const [countries, setCountries] = useState([]);
  const fetchData = () => {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <Header title="Countries" />
      <Container className="align-self-center p-5 dashboard">
        <Row>
          {countries &&
            countries.length > 0 &&
            countries.map((countryObj, index) => (
              <Col md={6} sm={12} xs={12} className="">
                <div className="d-flex country-grid my-2 shadow">
                  <Col md={4} sm={4} xs={4} className="p-2">
                    <img src={countryObj.flag} alt="flag" className="float-left w-100" />
                  </Col>
                  <Col md={8} sm={8} xs={8} className="py-4 px-3">
                    <p>
                      <h5>{countryObj.name}</h5>
                      <h6>{countryObj.region}</h6>
                    </p>
                  </Col>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </Layout>
  );
}

export default Dashboard;
