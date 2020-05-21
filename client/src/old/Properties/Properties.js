import React from 'react';
import { useRecoilValue } from 'recoil';
import { canvasListState } from '../../Atoms';
import PropertyColor from '../PropertySettings';
import PropertyItem from '../PropertyItem';

export default function Properties({ id }) {
    const canvasList = useRecoilValue(canvasListState);

    return (
        <div className='properties'>
            <PropertyColor />
            {canvasList.map((canvasItem) => (
                <PropertyItem id={canvasItem.id} key={canvasItem.id} />
            ))}
        </div>
    );
}
