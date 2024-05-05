import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom';
import LogOut from './LogOut';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../utils/userSlice';
import Login from './Login';
import ShowLogoutButton from './ShowLogoutButton'

const ToDoList = () => {

    const getLocalItems = ()=>{
        let list = localStorage.getItem('lists');
        console.log(list)

        if(list){
            return JSON.parse(localStorage.getItem('lists'))
        }else{
            return [];
        }
    }

    const [task, setTask] = useState(getLocalItems());
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

    const user = useSelector(selectUser);

    useEffect(()=>{
        localStorage.setItem('lists', JSON.stringify(task))
    },[task])

    return (
        <>
        
        <div className='toDoContainer' >
            <ShowLogoutButton />
            <h2>To Do Buddy  </h2>
            {/* {user.email}
            {user.name}
            {user.location} */}
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
        </>
    )
}

export default ToDoList