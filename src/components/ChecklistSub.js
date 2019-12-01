import React, {useState} from 'react'
import { AiOutlineDelete } from "react-icons/ai"



const ChekclistSub = (props) => {
    const [checked, setChecked] = useState(false)

    const checkMe = () => {
        setChecked(!checked)
    }
    return(
        <div className="subCheck">
            <p className={ checked ? 'checked' : '' }>{props.todo}</p>
            <AiOutlineDelete onClick={ () => props.remove( props.myNumber ) } />
            <input type="checkbox" onClick={checkMe} />
        </div>
    )
}

export default ChekclistSub