import React from 'react';
import axios from '../helpers/axiosConfig';

export default function RoutineNew() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        let data = {
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            user_id: 0,
        };

        console.log(data);

        const response = await axios.post('routines', data);
        console.log(response.data);
    };

    return (
        <div>
            <h1>Routine New</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' name='title' />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <textarea name='description' id='description'></textarea>
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
