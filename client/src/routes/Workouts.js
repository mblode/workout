import React from 'react';
import { useRecoilValue, selector } from 'recoil';
import WorkoutItem from '../components/WorkoutItem';
import ErrorBoundary from '../components/ErrorBoundary';
import axios from '../helpers/axiosConfig';

const workoutsQuery = selector({
    key: 'workouts',
    get: async ({ get }) => {
        const response = await axios.get('workouts');
        if (response.error) {
            throw response.error;
        }
        return response.data;
    },
});

const WorkoutsList = () => {
    const workoutsState = useRecoilValue(workoutsQuery);

    return (
        <div>
            {workoutsState.map((item) => (
                <WorkoutItem item={item} key={item._id} />
            ))}
        </div>
    );
};

export default function Workouts() {
    return (
        <div>
            <h1>Workouts</h1>

            <div>
                <ErrorBoundary>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <WorkoutsList />
                    </React.Suspense>
                </ErrorBoundary>
            </div>
        </div>
    );
}
