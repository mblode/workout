import React from 'react';
import { useSetRecoilState } from 'recoil';
import { canvasListState } from '../Atoms';

export default function CanvasItemCreator() {
    const setCanvasList = useSetRecoilState(canvasListState);

    const addItem = () => {
        setCanvasList((oldCanvasList) => [
            ...oldCanvasList,
            {
                id: getId(),
            },
        ]);
    };

    return (
        <div>
            <button className='btn btn-primary' onClick={addItem}>
                Create item
            </button>
        </div>
    );
}

let id = 0;
function getId() {
    return id++;
}
