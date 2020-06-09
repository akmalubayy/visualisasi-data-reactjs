import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainFooter from "../components/layout/MainFooter";

const LayoutKosong = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row>
      <Col
        className="main-content p-0"
        lg="12"
        md="12"
        sm="12"
        tag="main"
      >
        {!noNavbar && <MainNavbar />}
        {children}
        {!noFooter && <MainFooter />}
      </Col>
    </Row>
  </Container>
);

LayoutKosong.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

LayoutKosong.defaultProps = {
  noNavbar: true,
  noFooter: true
};

export default LayoutKosong;
