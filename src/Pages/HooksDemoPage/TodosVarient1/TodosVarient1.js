import React, { useRef, useState } from 'react';

const TodosVariant1 = () => {
  const todoInput = useRef('');
  // create a ref for the input field to capture the entered input in a fn comp
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'Complete Task 1'
    },
    {
      id: 2,
      title: 'Complete Task 2'
    }
  ]);
  const handleAddTodo = () => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        title: todoInput.current.value
      }
    ]);
  };
  return (
    <>
      <div style={{ backgroundColor: '#b0aac0', padding: '20px' }}>
        <h3>Todos App with useState and UseRef</h3>

        <div className="row">
          <div className="col-auto">
            <input type="text" className="form-control" ref={todoInput}/>
            {/* Uncontrolled Component -- where form data is handled by the DOM itself. */}
          </div>
          <div className="col-auto">
            <button className="btn btn-success" onClick={handleAddTodo} >
              ADD TODO
            </button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card">
              <ul className="list-group list-group-flush">
                {todoList.map((todo) => {
                  return (
                    <li className="list-group-item" key={todo.id}>
                      {todo.title}
                    </li>
                  );
                })}
                <li className="list-group-item">First todo</li>
                <li className="list-group-item">Second todo</li>
                <li className="list-group-item">Third todo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodosVariant1;
