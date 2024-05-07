//import React from "react";
import PropTypes from "prop-types";

function Translation({ generate, setInput, reset }) {
  return (
    <>
      <h1>Prompt Generation</h1>
      <textarea
        className="answer"
        rows={20} 
        cols={100} 
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="generate" onClick={generate}>Generate</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

Translation.propTypes = {
  generate: PropTypes.func.isRequired,
  setInput: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Translation;
