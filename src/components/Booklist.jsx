//App.jsx from parent component
//This component means child component
import React from "react";

const Booklist = (props) => {
  const result = props.getData?.(props.language); //?→getDataが存在する時のみで関数を実行できる
  return (
    <div>
      <p>This is {result} list component</p>
    </div>
  );
};
export default Booklist;
