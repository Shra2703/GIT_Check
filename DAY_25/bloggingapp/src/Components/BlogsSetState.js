import { useEffect, useRef, useState } from "react";
import { db } from "../firebaseinit";
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";

export default function BlogsSetState() {
  // variables to store the content and the title
  // let [title, setTitle] = useState("");
  // let [text, setText] = useState("");

  // one variable to update title and text both
  let [formData, setFormdata] = useState({ title: "", text: "" });
  let [blogs, setBlogs] = useState([]);

  // instead of create ref we are using use ref
  let titleRef = useRef(null);

  // intial fcous when it is first render
  useEffect(() => {
    titleRef.current.focus();
  }, []);

  // Changing the title bar
  useEffect(() => {
    if (blogs.length && blogs[0].title) document.title = blogs[0].title;
    else {
      document.title = "No Blogs!!!";
    }
  }, [blogs]);

  // fetching the data from the firebase to show it on we in first render
  useEffect(() => {
    // This will not give the realtime synchroise update
    // async function getData() {
    //   let snapshot = await getDocs(collection(db, "blogs"));
    //   console.log(snapshot);

    //   const blogs = snapshot.docs.map((doc) => {
    //     return {
    //       id: doc.id,
    //       ...doc.data(),
    //     };
    //   });

    //   console.log(blogs);
    //   setBlogs(blogs)

    // }
    // getData();

    const undub = onSnapshot(collection(db, "blogs"), (snapshot) => {
      const blogs = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(blogs);
      setBlogs(blogs);
    });
  }, []);

  // this function will be invoked when submit button will be clicked
  async function handleSubmit(e) {
    e.preventDefault();
    // setBlogs([{ title: formData.title, text: formData.text }, ...blogs]);
    // console.log(blogs);

    titleRef.current.focus();

    // Adding the data in the fire base
    const docRef1 = await addDoc(collection(db, "blogs"), {
      title: formData.title,
      content: formData.text,
      createdOn: new Date(),
    });

    // to clear the text from the input fields
    // setTitle("");
    // setText("");

    setFormdata({ title: "", text: "" });
  }

  // function to delete the blogs
  async function handleDeleteBlogs(id) {
    // delete in the localstorage only
    // setBlogs(blogs.filter((blog, index) => i != index));

    // real delete from the database
    const docRef = doc(db, "blogs", id);
    await deleteDoc(docRef);
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
            required
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
            <button
              className="btn remove"
              onClick={() =>
                // handleDeleteBlogs(i)
                handleDeleteBlogs(blog.id)
              }
            >
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
