import React from "react";

const Feature = (props) => {
  return (
    <div className="feature">
      <img src="" className="feature-image" alt="" />
      <h3 className="feature-title">{props.title}</h3>
      <p className="feature-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        iusto quos atque dolorem molestias velit dignissimos accusamus laborum,
        possimus consectetur rem voluptas minus aliquam deserunt iste, explicabo
        nesciunt nihil! Blanditiis?
      </p>
    </div>
  );
};

export default Feature;
