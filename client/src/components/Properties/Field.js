import React from 'react';

export default function Field(props) {
    const onChange = (event) => {
        props.onChange(props.name, event.target.value);
    };

    return (
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                className='form-control'
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={onChange}
            />
        </div>
    );
}
