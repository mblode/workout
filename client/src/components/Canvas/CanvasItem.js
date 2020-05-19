import React from 'react';
import { useRecoilState } from 'recoil';
import { itemWithID } from '../Atoms';

export default function CanvasItem({ id }) {
    const [item, setItem] = useRecoilState(itemWithID(id));

    const onChange = (event) => {
        setItem({ ...item, text: event.target.value });
    };

    return (
        <div
            className='canvas-item'
            style={{
                left: item.x + 'px',
                top: item.y + 'px',
                zIndex: item.z,
                width: item.width + 'px',
                height: item.height + 'px',
                backgroundColor: item.color,
            }}></div>
    );
}
