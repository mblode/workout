import React from 'react';
import axios from '../helpers/axiosConfig';

export default function ExerciseNew() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        let data = {
            title: formData.get('title'),
            instructions: formData.get('instructions'),
            category: formData.get('category'),
            user_id: 0,
        };

        console.log(data);
        const response = await axios.post('exercises', data);
        console.log(response.data);
    };

    return (
        <div>
            <h1>Exercise New</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' name='title' />
                </div>
                <div>
                    <label htmlFor='instructions'>Instructions</label>
                    <textarea name='instructions' id='instructions'></textarea>
                </div>
                <div>
                    <label htmlFor='category'>Category</label>
                    <input type='text' id='category' name='category' />
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
}
