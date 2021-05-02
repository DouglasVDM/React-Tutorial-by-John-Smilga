import React from "react"
import ReactDom from "react-dom";


function Greeting() {
  return (

    <div>
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
  return <secion>
    <Image />
    <Book />
    <Author />
  </secion>
}
const Image = () => <img src="https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj" alt="" />;
const Book = () => <h4>React Tutorial - Fundamentals, Hooks, Context API, React Router, Custom Hooks</h4>;
const Author = () => <h4>by John Smilga</h4>

ReactDom.render(<BookList />, document.getElementById("root"));
