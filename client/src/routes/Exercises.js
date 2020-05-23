import React from 'react';
import { useRecoilValue, selector } from 'recoil';
import ExerciseItem from '../components/ExerciseItem';
import ErrorBoundary from '../components/ErrorBoundary';
import axios from '../helpers/axiosConfig';
import { Link } from 'react-router-dom';

const exercisesQuery = selector({
    key: 'exercises',
    get: async ({ get }) => {
        const response = await axios.get('exercises');
        if (response.error) {
            throw response.error;
        }
        console.log(response.data);
        return response.data;
    },
});

const ExercisesList = () => {
    const exercisesState = useRecoilValue(exercisesQuery);

    return (
        <div>
            {exercisesState.map((item) => (
                <ExerciseItem item={item} key={item._id.$oid} />
            ))}
        </div>
    );
};

export default function Exercises() {
    return (
        <div>
            <h1>Exercises</h1>
            <Link to='/exercises/new'>New exercises</Link>

            <ErrorBoundary>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <ExercisesList />
                </React.Suspense>
            </ErrorBoundary>
        </div>
    );
}
