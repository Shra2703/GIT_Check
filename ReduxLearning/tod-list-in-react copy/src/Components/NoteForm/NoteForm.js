import { useState } from "react";
import "./NoteForm.css";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/actions/noteActions";

function NoteForm() {
  const [noteText, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(noteText));
    setText("");
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={noteText}
            className="form-contol mb-3"
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="btn btn-success float-end" >
            Create Note
          </button>
        </form>
      </div>
    </>
  );
}

export default NoteForm;
