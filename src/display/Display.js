import React from 'react'
import TOC from "../toc/TOC";
import UrlForm from "../form/Form";

const Display = ({results, handleSubmit}) => {
  if (results.length > 0) {
    return <TOC results={results} />;
  } else {
    return <UrlForm handleSubmit={handleSubmit} />;
  }
}

export default Display;
