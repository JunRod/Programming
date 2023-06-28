export const todoReducer = (initialtate = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialtate, action.payload];
    case "[TODO] Remove Todo":
      return initialtate.filter((todo) => todo.id !== action.payload);
    case "[TODO] Toggle Todo":
      return initialtate.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      break;
  }
};
