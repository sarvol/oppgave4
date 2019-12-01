import React, {useState} from 'react'
import ChecklistSubmodule from './ChecklistSub'

const Checklist = (props) => {
    const array = ["Graphic design", "Photo", "Developing",]
    const [todos, setTodos] = useState(array)
    const remove = (i) => {
        setTodos(
            todos.filter( todo => todo !== todos[i] )
        )
    } 
    const addItem = (e) => {
        if(e.keyCode === 13){
            setTodos( [...todos, e.target.value] )
            e.target.value = ''
        }
    }
    return(
        <div >
            
        <h1 className="contact">Contact</h1>
        
        <div className="submodule">
            <h2>Type of work</h2>
            <input className="inpWork" type="text" onKeyDown={addItem} placeholder='add other areas' />
            <h3>Check or delete</h3>
            {
                todos.map(
                    (todo, i) => <ChecklistSubmodule remove={remove} myNumber={i} todo={todo} />
                )
            }
        </div>
        </div>
    )
}

export default Checklist