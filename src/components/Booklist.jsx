//App.jsx from parent component
//This component means child component
import React from "react";

const Booklist = (props) => {
  return (
    <div>
      <p>This is {props.language} book list component</p>
    </div>
  );
};
export default Booklist;
