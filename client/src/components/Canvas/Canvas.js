import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { canvasListState, settingsState } from '../Atoms';
import CanvasItem from './CanvasItem';

export default function Canvas() {
    const [settings] = useRecoilState(settingsState);
    const canvasList = useRecoilValue(canvasListState);

    return (
        <div style={{ backgroundColor: settings.backgroundColor, color: settings.color }} className='canvas'>
            {canvasList.map((canvasItem) => (
                <CanvasItem id={canvasItem.id} key={canvasItem.id} />
            ))}
        </div>
    );
}
