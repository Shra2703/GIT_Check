import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Learn() {
  const {id} = useParams();
  const course = coursesData.find((course) => course.id === id)
  return (
    <div className={style.courses_container}>
      <div className={style.heading}>
        <h1>{course.title}</h1>
        <h4>{course.description}</h4>
      </div>
      <div className={style.chapters}>
        <h1>Chapters</h1>
        <ul>
          {course.chapters.map((chapter, index) => {
            return (
              <div key={index} className={style.chapterId}>
                 <Link to={`chapter/${chapter.chapter}`}>
                {chapter.title} 
                </Link>
              </div >
            );
          })}
        </ul>
      </div>
      <div className={style.courses}>
          <Outlet context={{...course}}/>
      </div>
    </div>
  );
}

export default Learn;
