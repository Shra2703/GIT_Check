// Course Card component

import "./courseCard.css";

const CourseCard = () => {
  return (
    <>
      {/* outer div */}
      <div className="main">
        {/* course img */}
        <div className="top">
          <img
            src="https://img-c.udemycdn.com/course/750x422/2492962_f098.jpg"
            alt="course-img"
          />
        </div>

        {/* middle text or course text */}
        <div className="middle">
          <p>Web Development Course | HTML, CSS, JS</p>
        </div>

        {/* footer which contains language, no of lectures,rating, price */}
        <div className="footer">
          {/* left part contains rating, language and no of lectures */}
          <div className="left">
            {/* rating div */}
            <div className="rating">
              <img
                src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                alt="rating"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                alt="rating"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                alt="rating"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                alt="rating"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png"
                alt="rating"
              />
              <span>4.9</span>{" "}
            </div>

            {/* left side bottom contains language, and lectures */}
            <div className="left-bottom">
              <div className="inner">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5403/5403606.png"
                  alt="language"
                />
                <span>Hindi</span>
              </div>

              <div className="inner">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5346/5346453.png"
                  alt="no of lectures"
                />{" "}
                <span>50+</span>
              </div>
            </div>
          </div>
          {/* end of left ide */}

          {/* right side contans price */}
          <div className="right">
            <img
              src="https://cdn-icons-png.flaticon.com/128/991/991952.png"
              alt="price"
            />
            <span>15</span>
          </div>
        </div>

        {/* add to cart button */}
        <div className="cart">
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
