import React, { useRef, useReducer, useEffect } from 'react';
import todoReducer from '../../../Reducer/TodoReducer/todoReducer';

const TodosVariant2 = () => {
  const todoInput = useRef('');

  const [todoList, todoDispatch] = useReducer(todoReducer);
  console.log(todoList);
  console.log(todoDispatch);

  const handleAddTodo = () => {
    console.log(todoInput.current.value);
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
