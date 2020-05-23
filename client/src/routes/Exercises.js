import React from 'react';
import { useRecoilValue, selector } from 'recoil';
import ExerciseItem from '../components/ExerciseItem';
import ErrorBoundary from '../components/ErrorBoundary';
import axios from '../helpers/axiosConfig';

const exercisesQuery = selector({
    key: 'exercises',
    get: async ({ get }) => {
        const response = await axios.get('exercises');
        if (response.error) {
            throw response.error;
        }
        return response.data;
    },
});

const ExercisesList = () => {
    const exercisesState = useRecoilValue(exercisesQuery);

    return (
        <div>
            {exercisesState.map((item) => (
                <ExerciseItem item={item} key={item._id} />
            ))}
        </div>
    );
};

export default function Exercises() {
    return (
        <div>
            <h1>Exercises</h1>

            <div>
                <ErrorBoundary>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <ExercisesList />
                    </React.Suspense>
                </ErrorBoundary>
            </div>
        </div>
    );
}
