import React from 'react';

export default function RoutineItem({ item }) {
    return <div>{item.title && <p>{item.title}</p>} button</div>;
}
