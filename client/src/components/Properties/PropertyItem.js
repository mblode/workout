import React from 'react';
import { useRecoilState } from 'recoil';
import { itemWithID } from '../Atoms';
import Field from './Field';

export default function PropertyItem({ id }) {
    const [item, setItem] = useRecoilState(itemWithID(id));

    const onChange = (name, value) => {
        setItem({
            ...item,
            [name]: value,
        });
    };

    return (
        <div className='property-item'>
            <Field value={item.x} name='x' label='X position' type='number' onChange={onChange} />
            <Field value={item.y} name='y' label='Y position' type='number' onChange={onChange} />
            <Field value={item.z} name='z' label='Z-index' type='number' onChange={onChange} />
            <Field value={item.width} name='width' label='Width' type='number' onChange={onChange} />
            <Field value={item.height} name='height' label='Height' type='number' onChange={onChange} />
            <Field value={item.color} name='color' label='Background color' type='color' onChange={onChange} />
            <Field value={item.label} name='label' label='Text label' type='text' onChange={onChange} />
        </div>
    );
}
