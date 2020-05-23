import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../helpers/axiosConfig';

export default function ExerciseItem({ item }) {
    const id = item._id.$oid;

    const del = async () => {
        const response = await axios.delete(`exercises/${id}`);
        if (response.error) {
            throw response.error;
        }

        return response.data;
    };

    return (
        <div>
            <Link to={`/exercises/${id}`}>{item.title && <p>{item.title}</p>}</Link>
            <div>
                <button onClick={del}>Delete</button>
                <Link to={`/exercises/${id}`}>Edit</Link>
            </div>
        </div>
    );
}
