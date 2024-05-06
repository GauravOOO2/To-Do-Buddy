import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../utils/userSlice';
import Login from './Login';
import ShowLogoutButton from './ShowLogoutButton'
import { logOut } from '../utils/userSlice'
import { updateWhetherData } from '../utils/whetherSlice'
import { WhetherAPI } from '../utils/Constants'
import { useNavigate } from 'react-router-dom';



const ToDoList = () => {

    const getLocalItems = () => {
        let list = localStorage.getItem('lists');
        console.log(list)

        if (list) {
            return JSON.parse(localStorage.getItem('lists'))
        } else {
            return [];
        }
    }

    const [task, setTask] = useState(getLocalItems());
    const [newTask, setNewTask] = useState("");

    console.log("Debug",task);

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

    // const user = useSelector(selectUser);

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(task))
    }, [task])

    const navigate = useNavigate();

    const dispatch = useDispatch()

    const user = useSelector((store)=>store.user.user)
    console.log(user,user.location);


    const whetherData = useSelector((store)=>store.whether.whetherData)
    console.log(whetherData,'debug')

    
    const search = async()=>{
      const url = "https://api.openweathermap.org/data/2.5/weather?q="+user.location+"&units=Metric&appid="+WhetherAPI
      console.log(url)
        const data = await fetch(url)
        const jsonData = await data.json()
        if(jsonData?.weather[0]?.description){
            dispatch(updateWhetherData(jsonData?.weather[0]?.description))
        }
        
    }
    
    useEffect(()=>{
      search()
    },[])

    const logoutEvent = ()=>{
      dispatch(logOut())
      navigate('/')

    }
    console.log(whetherData, whetherData.length);

    return (
        <div className='toDoParent' >
            
           <div className='toDoParent1' >
           <div className='toDoContainer' >
                <div className='HContainer' >
                <h2>To Do Buddy  </h2>
                
                {
                    whetherData&&<p>Weather Today: {whetherData}</p>
                    
                }
                {/*  */}
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
                    <button
                        onClick={addTask}
                    >Add Item!</button>
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
                        : <>
                            <p>All Up to Date</p>
                        </>
                }

            
            
            </div>
           </div>
            <div className='buttonContainer' >
        <button
        className='btn'
        onClick={logoutEvent} >Logout</button>
            </div>
        </div>
    )
}

export default ToDoList