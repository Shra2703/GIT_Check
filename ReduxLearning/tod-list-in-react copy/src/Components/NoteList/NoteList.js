import "./NoteList.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../../redux/actions/noteActions";

function NoteList() {

  // We are note directly using store that's why we use dispatch functions
  let notes = useSelector((state) => state.noteReducer.notes);
  let dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <ul>
          {notes.map((note, index) => (
            <li>
              {/* <p>{note.createdOn.toLocaleDateString()}</p> */}
              <p className="note-content">{note.text}</p>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteNote(index))}
              >
                {" "}
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NoteList;
