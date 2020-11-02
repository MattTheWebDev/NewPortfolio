import React from "react";

const WorkPage = ({ image, details, skills, url }) => {
  return (
    <div>
      <img src={image} />
      <h1>About this project</h1>
      <div>
        <p>{details}</p>
      </div>
      <h2>Project details</h2>
      <div>
        <p>
          <b>Skills Used</b> : {skills}
        </p>
        <p>
          <b>Skills Used</b> : {url}
        </p>
      </div>
    </div>
  );
};

export default WorkPage;
