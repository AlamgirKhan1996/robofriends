import React from "react";
import Card from "./Card";

const cardlist = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => (
        <Card
          key={i}
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
          username={robots[i].username}
        />
      ))}
    </div>
  );
};
export default cardlist;
