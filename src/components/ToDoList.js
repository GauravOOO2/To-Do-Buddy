import React, { useEffect, useState } from 'react'
import '../style/style.css'



const ToDoList = () => {

    const [task, setTask] = useState(0);
    const [newTask, setNewTask] = useState("");


    const handleInputChange = (event) => {
        setNewTask(event.target.value)

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
        <div className='toDoParent' >
            
           <div className='toDoParent1' >
           <div className='toDoContainer' >
                <div className='HContainer' >
                <h2>To Do Buddy  </h2>
               
                </div>
                
                <p className='toDoMessage' >A simple app for making lists, made to keep your tasks safe.</p>
                {/* <hr class="style-one" ></hr> */}
                <div className='addContainer MaddContainer' >
                
                <p className='pTagAddNewItem' >Add New Item</p>
                
                <div className='addInputContainer' >
               
                    <input
                        type='text'
                        value={newTask}
                        onChange={handleInputChange}
                    />
                    <button>Add Item!</button>
                </div>
                </div>

                {
                    task && task.length
                        ? <div>
                            <h2>To-Do List!</h2>

                            <ol className='olContainer'  >
                                {
                                    task.map((task, index) =>

                                        <li key={index} >
                                            
                                            <span className='text' ></span>
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
                        : <>
                            <p>All Up to Date</p>
                        </>
                }

            
            
            </div>
           </div>
            <div className='buttonContainer' >
            </div>
        </div>
    )
}

export default ToDoList