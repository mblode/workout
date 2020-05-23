import React from 'react';
import axios from '../helpers/axiosConfig';
import { useParams, Link } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';

const exerciseQuery = async (id) => {
    const response = await axios.get(`exercises/${id}`);
    if (response.error) {
        throw response.error;
    }
    return response.data;
};

const ExerciseForm = ({ id }) => {
    const exercise = exerciseQuery(id);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = {
            title: formData.get('title'),
            instructions: formData.get('instructions'),
            category: formData.get('category'),
        };
        const response = await axios.put(`exercises/${id}`, data);
        console.log(response.data);
    };

    const del = async () => {
        await axios.delete(`routines/${id}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' name='title' value={exercise.title} />
                </div>
                <div>
                    <label htmlFor='instructions'>Instructions</label>
                    <textarea name='instructions' id='instructions' value={exercise.instructions}></textarea>
                </div>
                <div>
                    <label htmlFor='category'>Category</label>
                    <input type='text' id='category' name='category' value={exercise.category} />
                </div>
                <button>Submit</button>
                <button onClick={del}>Delete</button>
            </form>
        </div>
    );
};

export default function ExercisePage() {
    let { id } = useParams();

    return (
        <div>
            <h1>Exercise Page</h1>
            <Link to='/exercises'>Go back</Link>

            <ErrorBoundary>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <ExerciseForm id={id} />
                </React.Suspense>
            </ErrorBoundary>
        </div>
    );
}
