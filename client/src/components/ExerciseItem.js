import React from 'react';

export default function ExerciseItem({ item }) {
    console.log(item);
    return <div>{item.username && <p>{item.username}</p>}</div>;
}
