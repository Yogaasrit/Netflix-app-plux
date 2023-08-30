import React, { useRef, useReducer, useEffect } from 'react';
import todoReducer from '../../../Reducer/TodoReducer/todoReducer';

const TodosVariant2 = () => {
  const todoInput = useRef('');
  // For getting the input from text box

  const [todoList, todoDispatch] = useReducer(todoReducer);
  // UseReducer always expect the reducer. -> useReducer(todoReducer) here, todoReducer is a reducer.
  // todoList is a state data. It can be array or object or single data.
  console.log(todoList);// undefined
  // undefined -- get the state data from reducer. How?
  // dispatcher fn must be called with an action obj to get state data from the reducer
  console.log(todoDispatch);

  const handleAddTodo = () => {
    console.log(todoInput.current.value);
    // calling dispatch method with action type.
    todoDispatch({
      type: 'Add-Todos',
      payload: {
        id: Math.floor(Math.random() * 1000),
        title: todoInput.current.value,
        isCompleted: false
      }
    });
  };

  useEffect(() => {
    // Calling dispattch fn with list type.
    todoDispatch({
      type: 'List-Todo'
    });
  }, []);

  return (
    <div style={{ backgroundColor: '#f9ccac', padding: '20px' }}>
      <h3>Todos App with useRef and useReducer</h3>

      <div className="row">
        <div className="col-auto">
          <input type="text" className="form-control" ref={todoInput} />
        </div>
        <div className="col-auto">
          <button className="btn btn-success" onClick={handleAddTodo}>
            ADD TODO
          </button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card">
            <ul className="list-group list-group-flush">
              {todoList?.map((todo) => {
                return (
                  <li key={todo.id} className="list-group-item">
                    {todo.title}
                  </li>
                );
              })}
              {/* <li className="list-group-item">first todo</li>
              <li className="list-group-item">second todo</li>
              <li className="list-group-item">third todo</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosVariant2;
