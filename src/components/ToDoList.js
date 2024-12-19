import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js'
import '../style/style.css'

// Initialize Supabase


const supabaseUrl = 'https://kndtiwlsxjtfbuvpniif.supabase.co'
const supabaseKey = process.env.REACT_APP_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const ToDoList = () => {
  const [error, setError] = useState(null); // State for error messages
  const [toDos, setToDos] = useState(null); // State for fetched data

  console.log(toDos); // Debugging: logs the fetched data

  useEffect(() => {
    const fetchSupabaseData = async () => {
      try {
        const { data, error } = await supabase
          .from('smoothies') // Ensure 'smoothies' is the correct table name
          .select('*'); // Fetch all columns

        if (error) {
          // Set the error message if there's an issue with fetching
          setError('Could not fetch data: ' + error.message);
          console.error(error);
        } else {
          // Set the fetched data if successful
          setToDos(data);
          setError(null);
        }
      } catch (err) {
        // Handle unexpected errors
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred.');
      }
    };

    fetchSupabaseData();
  }, []); // Empty dependency array ensures this runs only once





    return (
        <div className='toDoParent' >

            <div className='toDoParent1' >
                <div className='toDoContainer' >
                    <div className='HContainer' >
                        <h2>To Do Buddy  </h2>

                    </div>

                    <p className='toDoMessage' >A simple app for making lists, made to keep your tasks safe.</p>
                    {/* <hr class="style-one" ></hr> */}
                    {error && (<p> {error} </p>)}

                    {toDos && (
                        <div>
                            {toDos.map((itmes) => {
                                <li> {itmes} </li>
                            })}
                        </div>

                    )}

                    <div className='addContainer MaddContainer' >

                        <p className='pTagAddNewItem' >Add New Item</p>

                        <div className='addInputContainer' >

                            <input
                                type='text'

                            />
                            <button>Add Item!</button>
                        </div>
                    </div>

                    {

                        <div>
                            <h2>To-Do List!</h2>

                            <ol className='olContainer'  >

                            </ol>

                        </div>

                    }



                </div>
            </div>
            <div className='buttonContainer' >
            </div>
        </div>
    )
}

export default ToDoList