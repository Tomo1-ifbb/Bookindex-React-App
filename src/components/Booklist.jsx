//App.jsx from parent component
//This component means child component
import React, { useState, useEffect } from "react";

const Booklist = (props) => {
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    const result = props
      .getData?.(props.language)
      .then((response) => setBookData(response));
  }, [props]);

  return (
    <div>
      <ul>
        {bookData === null ? (
          <p>now loading...</p>
        ) : (
          //bookData.data.items.map((x, index) => <li>{x.volumeInfo.title}</li>)
          bookData.data.items.map((x, index) => (
            <li key={index}>
              {x.volumeInfo.readingModes.image}
              {x.volumeInfo.title}　名前：{x.volumeInfo.authors}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default Booklist;
