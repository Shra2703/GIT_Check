import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const initialState = {
  notes: [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      createdOn: new Date(),
    },
    {
      text: "Ullam porro ex similique ea voluptas debitis vel odit nam sint amet.",
      createdOn: new Date(),
    },
  ],
};

function noteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: action.text,
            createOn: new Date()
          },
        ],
      };
    case DELETE_NOTE:
        state.notes.splice(action.index, 1);
        return{
            ...state, 
            notes: [...state.notes]
  }
    default:
      return state;
  }
}

export default noteReducer;
