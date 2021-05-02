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

const books = [
  {
    img: "https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj",
    title: "React Tutorial - Fundamentals, Hooks, Context API, React Router, Custom Hooks",
    author: "by John Smilga",
  },
  {
    img: "chrome-extension://pachckjkecffpdphbpmfolblodfkgbhl/images/vidiq_playplus.png",
    title: "VidIQ Icon",
    author: "by VidIQ",
  },
  {
    img: "https://yt3.ggpht.com/yti/ANoDKi72ICb-uknZZA71GLUKhmdsMfEOfwCPn2DsRqTqug=s88-c-k-c0x00ffffff-no-rj-mo",
    title: "Profile Piture",
    author: "by Douglas",
  },
];

function BookList() {
  return <section className="booklist">
    {books.map((book) => {
      return <Book book={book}></Book>
    })}
  </section>
}

const Book = (props) => {
  console.log(`Props: ${props.book}`)
  const { img, title, author } = props.book; //  Object Destructuring.
  return (
    <article className="book" style={{ border: "solid 1px" }}>
    <img src={img} alt="" />
    <h1>{title}</h1>
      <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>{author}
      </h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById("root"));
