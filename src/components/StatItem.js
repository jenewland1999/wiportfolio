import * as React from "react";
import DOMPurify from "dompurify";

const createMarkup = (text) => {
  return { __html: DOMPurify.sanitize(text) };
};

const StatItem = ({ icon, text }) => {
  return (
    <div>
      <dt className="text-4xl text-purple-600">{icon}</dt>
      <dd dangerouslySetInnerHTML={createMarkup(text)}></dd>
    </div>
  );
};

export default StatItem;
