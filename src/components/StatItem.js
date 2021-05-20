import * as React from "react";

const StatItem = ({ icon, text }) => {
  return (
    <div>
      <dt className="text-4xl text-purple-600">{icon}</dt>
      <dd dangerouslySetInnerHTML={{ __html: text }}></dd>
    </div>
  );
};

export default StatItem;
