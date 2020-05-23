import React from 'react';
import { useRecoilValue, selector } from 'recoil';
import { Link } from 'react-router-dom';
import RoutineItem from '../components/RoutineItem';
import ErrorBoundary from '../components/ErrorBoundary';
import axios from '../helpers/axiosConfig';

const routinesQuery = selector({
    key: 'routines',
    get: async ({ get }) => {
        const response = await axios.get('routines');
        if (response.error) {
            throw response.error;
        }
        console.log(response.data);
        return response.data;
    },
});

const RoutinesList = () => {
    const routinesState = useRecoilValue(routinesQuery);

    return (
        <div>
            {routinesState.map((item, i) => (
                <RoutineItem item={item} key={i} />
            ))}
        </div>
    );
};

export default function Routines() {
    return (
        <div>
            <h1>Routines</h1>
            <Link to='/routines/new'>New routine</Link>

            <div>
                <ErrorBoundary>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <RoutinesList />
                    </React.Suspense>
                </ErrorBoundary>
            </div>
        </div>
    );
}
