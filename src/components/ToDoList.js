import React, { useState } from 'react'

const ToDoList = () => {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value)

    }

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    const deleteTask = (index) => {

        const updatedTask = task.filter((_, i) => i !== index)
        setTask(updatedTask)
    }

    const moveTaskUp = (index) => {

        if (index > 0) {
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] =
                [updatedTask[index - 1], updatedTask[index]];
            setTask(updatedTask);
        }
    }

    const moveTaskDown = (index) => {
        if (index < task.length - 1) {
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] =
                [updatedTask[index + 1], updatedTask[index]];
            setTask(updatedTask);
        }
    }

    return (
        <div className='toDoContainer' >
            <h2>To Do Buddy</h2>
            <p className='toDoMessage' >A simple app for making lists, made to keep your tasks safe.</p>
            <hr class="style-one" ></hr>
            <p className='pTagAddNewItem' >Add New Item</p>

            <div>

                <input
                    type='text'
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    onClick={addTask}
                >Add Item!</button>
            </div>
            
            <h2>To-Do List!</h2>

            <ol>

                {
                    task.map((task, index) =>

                        <li key={index} >
                            <input
                                type='checkbox'
                            />
                            <span className='text' > {task} </span>
                            <button
                                className='deleteTask'
                                onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>
                            <button
                                className='moveTaskUp'
                                onClick={() => moveTaskUp(index)}
                            >
                                🔼
                            </button>
                            <button
                                className='moveTaskDown'
                                onClick={() => moveTaskDown(index)}
                            >
                                🔽
                            </button>
                        </li>
                    )
                }
            </ol>

        </div>
    )
}

export default ToDoList