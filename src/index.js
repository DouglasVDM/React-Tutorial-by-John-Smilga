import React from "react"
import ReactDom from "react-dom";

//  CSS
import "./index.css";

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
  return <section className="booklist">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
}
function Book() {
  return <article className="book">
    <Image />
    <Name />
    <Author />
  </article>
}
const Image = () => <img src="https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj" alt="" />;
const Name = () => <h1>React Tutorial - Fundamentals, Hooks, Context API, React Router, Custom Hooks</h1>;
const Author = () => <h4 style={{color:"#617d98", fontSize:"0.75rem", marginTop:"0.25rem"}}>by John Smilga</h4>

ReactDom.render(<BookList />, document.getElementById("root"));
