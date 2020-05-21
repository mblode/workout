import React from 'react';
import { useRecoilState } from 'recoil';
import { settingsState } from '../Atoms';
import Field from './Field';

export default function PropertySettings() {
    const [settings, setSettings] = useRecoilState(settingsState);

    const onChange = (name, value) => {
        setSettings({
            ...settings,
            [name]: value,
        });
    };

    return (
        <div className='property-item'>
            <Field
                value={settings.backgroundColor}
                name='backgroundColor'
                label='Canvas background'
                type='color'
                onChange={onChange}
            />
            <Field value={settings.color} name='color' label='Canvas text color' type='color' onChange={onChange} />
        </div>
    );
}
