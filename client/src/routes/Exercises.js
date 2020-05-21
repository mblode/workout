import React, { ErrorBoundary } from 'react';
import { useRecoilValue, selector } from 'recoil';
import ExerciseItem from '../components/ExerciseItem';
import axios from '../helpers/axiosConfig';

const exercises = selector({
    key: 'exercises',
    get: async ({ get }) => {
        const response = await axios.get('exercises');
        if (response.error) {
            throw response.error;
        }
        return response.data;
    },
});

const ExercisesList = async () => {
    // const exercisesState = useRecoilValue(exercises);

    const response = await axios.get('exercises');
    // if (response.error) {
    //     console.log(response.error);
    // }
    console.log(response);

    return (
        <div className=''>
            {/* {exercisesState.map((item) => (
                <ExerciseItem item={item} key={item.id} />
            ))} */}
        </div>
    );
};

export default function Exercises() {
    ExercisesList();

    return (
        <div>
            <h1>Exercises</h1>

            <div>
                {/* <ErrorBoundary>
                    <React.Suspense fallback={<div>Loading...</div>}> */}
                {/* </React.Suspense>
                </ErrorBoundary> */}
            </div>
        </div>
    );
}
