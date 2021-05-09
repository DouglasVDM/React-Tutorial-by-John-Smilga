import React from "react"
import ReactDom from "react-dom";

//  CSS
import "./index.css";

import { books } from "./books";  //  Import a Named Export.
import SpecificBook from "./Book"  //  Import Default Export.
import { greeting } from "./thatthing/thatthing"; //  Import File from Sub-Folder.

function Greeting() {
  return (

    <div className="booklist">
      <FirstComponent />
      <Person />
      <Message />
      </div>

  );
}

//  Nested Componenets, React Tools
const Person = () => <h2>Doulgas</h2>;
const Message = () => {
  return <p>This is my message.</p>
}
const FirstComponent = () => <h4>This is Douglas and this is my first component.</h4>;

ReactDom.render(<Greeting />, document.getElementById("root"));

function BookList() {
  console.log(greeting);
  return <section className="booklist">
    {books.map((book) => {
      return <SpecificBook key={book.id} {...book}></SpecificBook>
    })}
  </section>
}

ReactDom.render(<BookList />, document.getElementById("root"));
