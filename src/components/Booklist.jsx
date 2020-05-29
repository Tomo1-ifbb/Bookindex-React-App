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
  const imageStyle = { height: 200, width: 160 };

  return (
    <div>
      <ul>
        {bookData === null ? (
          <p>now loading...</p>
        ) : (
          bookData.data.items.map((x, index) => (
            <div key={index}>
              <li>
                【{x.volumeInfo.title}】　{x.volumeInfo.authors}:著 （
                {x.volumeInfo.publishedDate}）
              </li>
              {x.volumeInfo.imageLinks ? (
                <img
                  src={x.volumeInfo.imageLinks.thumbnail}
                  alt=""
                  style={imageStyle}
                />
              ) : (
                <p style={imageStyle}></p>
              )}
            </div>
          ))
        )}
      </ul>
    </div>
  );
};

export default Booklist;
