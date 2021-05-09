import React from 'react'


const Book = (props) => {
  const { img, title, author } = props; //  Object Destructuring.
  //  Attribute, eventHandler
  //  onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
    return e;
  }

  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article className="book" style={{ border: "solid 1px" }} onMouseOver={() => {
      console.log(title);
    }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>{author}
      </h4>
      <button type="button" onClick={clickHandler}>Reference Example</button>
      <button type="button" onClick={() => complexExample(author)}>More Complex Example</button>
    </article>
  )
}

export default Book //  Export a Default Export.
