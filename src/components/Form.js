import React from 'react';
import './Form.css'

const Form = props => {

    return (
        <div className="Form">
        <form onSubmit={props.submit}>
            <input
                type="text" 
                value={props.value}
                onChange={props.change}
                placeholder="wpisz miasto"

             />
        </form>
        </div>
    )
}
export default Form;