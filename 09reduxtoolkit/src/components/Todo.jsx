import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <div className="w-[37%] mx-auto mt-2 bg-white shadow-lg rounded-xl p-5">
      <ul className="space-y-3">
        {todos.map(todo => (
          <li
            key={todo.id}
            className=" text-2xl
                 flex justify-between items-center
              bg-gray-100 px-4 py-3 rounded-lg"

          >
            {editingId === todo.id ? (
              <input
                value={editText}
                onChange={e => setEditText(e.target.value)}
                className="border px-2 py-1 rounded"
              />
            ) : (
              <span>{todo.text}</span>
            )}

            <div className="flex gap-2">
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                X
              </button>

              {editingId === todo.id ? (
                <button
                  onClick={() => {
                    dispatch(
                      updateTodo({
                        id: todo.id,
                        text: editText,
                      })
                    );

                    setEditingId(null);
                  }}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditingId(todo.id);
                    setEditText(todo.text);
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
