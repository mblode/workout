import React from 'react';
import { useRecoilValue } from 'recoil';
import CanvasItemCreator from '../CanvasItemCreator';
import { canvasListState } from '../../Atoms';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
    const canvasList = useRecoilValue(canvasListState);

    return (
        <div className='sidebar'>
            <CanvasItemCreator />

            {canvasList.map((canvasItem) => (
                <SidebarItem id={canvasItem.id} key={canvasItem.id} />
            ))}
        </div>
    );
}
