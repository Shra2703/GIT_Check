

// Actions contrainsts
const ADD_TODO = "ADD_TODO"
const TOGGLE_TODO = "TOGGLE_TODO"

// ACtions creator
const addTodo = (text) => ({text, type: ADD_TODO})
const toggleTodo = (index) => ({index, type: TOGGLE_TODO})

export {ADD_TODO, TOGGLE_TODO, addTodo, toggleTodo};