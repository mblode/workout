import React from 'react';

export default function Field(props) {
    const onChange = (event) => {
        props.onChange(props.name, event.target.value);
    };

    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <input name={props.name} type={props.type} value={props.value} onChange={onChange} />
        </div>
    );
}
