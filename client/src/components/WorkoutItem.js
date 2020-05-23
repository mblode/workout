import React from 'react';

export default function WorkoutItem({ item }) {
    console.log(item);
    return <div>{item.username && <p>{item.username}</p>}</div>;
}
