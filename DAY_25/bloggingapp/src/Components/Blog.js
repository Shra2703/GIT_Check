export default function Blog() {
  function handleSubmit(e) {
    e.preventDefault();
  }
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
          ></textarea>
          <hr />

          {/* button where the blog will get submitted */}
          <button className="btn">ADD</button>
        </form>
      </div>

      <hr />

      {/* results will ne shown here */}
      <h2>Blogs</h2>
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
