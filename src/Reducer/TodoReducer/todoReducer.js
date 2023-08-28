const todoReducer = (state = [], action) => {
  switch (action.type) {
  case 'Add-Todos':
    return [...state, action.payload];
  case 'List-Todos':
    return state;
  default :
    return state;
  }
};
export default todoReducer;
