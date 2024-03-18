// Actions constraints
const ADD_NOTE = "ADD_NOTE";
const DELETE_NOTE = "DELETE_NOTE";

// Actions creator

const addNote = (text) => ({ text, type: ADD_NOTE });
const deleteNote = (index) => ({ index, type: DELETE_NOTE });


export {ADD_NOTE, deleteNote, DELETE_NOTE, addNote}