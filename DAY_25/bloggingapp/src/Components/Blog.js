import { useRef, useState } from "react";

export default function Blog() {
  // variables to store the content and the title
  // let [title, setTitle] = useState("");
  // let [text, setText] = useState("");

  // one variable to update title and text both
  let [formData, setFormdata] = useState({ title: "", text: "" });
  let [blogs, setBlogs] = useState([]);
  let titleRef = useRef(null);

  // this function will be invoked when submit button will be clicked
  function handleSubmit(e) {
    e.preventDefault();
    setBlogs([{ title: formData.title, text: formData.text }, ...blogs]);
    console.log(blogs);
    titleRef.current.focus();

    // to clear the text from the input fields
    // setTitle("");
    // setText("");

    setFormdata({ title: "", text: "" });
  }

  // function to delete the blogs
  function handleDeleteBlogs(i) {
    setBlogs(blogs.filter((blog, index) => i != index));
  }

  // function which renders
  return (
    <>
      {/* heading of the page */}
      <h1>Write the blog</h1>

      <div className="section">
        {/* form where the blog is submitted */}
        <form onSubmit={handleSubmit}>
          {/* <Row label="Title">
            <input
              type="text"
              className="input"
              placeholder="Enter the title here"
            />
          </Row> */}

          {/* input  field where the title of the blog will be written*/}
          <label>
            Title <br />
          </label>
          <input
            type="text"
            className="input"
            placeholder="Enter the title here"
            value={formData.title}
            // onChange={(e) => setTitle(e.target.value)}
            onChange={(e) =>
              setFormdata({ title: e.target.value, text: formData.text })
            }
            ref={titleRef}
          />
          <hr />
          {/* <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content goes here..."
            ></textarea>
          </Row> */}

          {/* textarea  field where the text of the blog will be written*/}
          <label>
            Content <br />
          </label>
          <textarea
            className="input content"
            placeholder="Content goes here..."
            value={formData.text}
            // onChange={(e) => setText(e.target.value)}
            onChange={(e) =>
              setFormdata({ title: formData.title, text: e.target.value })
            }
          ></textarea>
          <hr />

          {/* button where the blog will get submitted */}
          <button className="btn" onClick={handleSubmit}>
            ADD
          </button>
        </form>
      </div>

      <hr />

      {/* results will ne shown here */}
      <h2>Blogs</h2>
      {blogs.map((blog, i) => (
        <div className="blog" key={i}>
          <h3>{blog.title}</h3>
          <p>{blog.text}</p>

          <div className="blog-btn">
            <button className="btn remove" onClick={() => handleDeleteBlogs(i)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

function Row(props) {
  const { label } = props;
  console.log(props.children);
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}

      <hr />
    </>
  );
}
