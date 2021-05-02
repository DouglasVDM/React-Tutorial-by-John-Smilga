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

 const firstBook = {
  img: "https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj",
  title: "React Tutorial - Fundamentals, Hooks, Context API, React Router, Custom Hooks",
  author: "by John Smilga",
}

const secondBook = {
  img: "chrome-extension://pachckjkecffpdphbpmfolblodfkgbhl/images/vidiq_playplus.png",
  title: "VidIQ Icon",
  author: "by VidIQ",
}

function BookList() {
  return <section className="booklist">
    <Book
      img={firstBook.img}
      title={firstBook.title}
      author={firstBook.author}      
    />

    <Book
      img={secondBook.img}
      title={secondBook.title}
      author={secondBook.author}      
    />
  </section>
}

const Book = (props) => {
  return (
    <article className="book" style={{ border: "solid 1px" }}>
    <img src={props.img} alt="" />
    <h1>{props.title}</h1>
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>{props.author}</h4>   
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById("root"));
