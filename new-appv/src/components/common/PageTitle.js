import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Col } from "shards-react";

const PageTitle = ({ judul, subtitle, className, ...attrs }) => {
  const classes = classNames(
    className,
    "text-center",
    "text-md-left",
    "mb-sm-0"
  );

  return (
    <Col xs="12" sm="4" className={classes} { ...attrs }>
      <span className="text-uppercase page-subtitle">{subtitle}</span>
      <h3 className="page-title">{judul}</h3>
    </Col>
  )
};

PageTitle.propTypes = {
  /**
   * The page title.
   */
  title: PropTypes.string,
  /**
   * The page subtitle.
   */
  subtitle: PropTypes.string
};

export default PageTitle;
