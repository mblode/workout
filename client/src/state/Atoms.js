import { atom } from 'recoil';

export const canvasListState = atom({
    key: 'canvasListState',
    default: [],
});

export const itemWithID = (id) =>
    atom({
        key: `item${id}`,
        default: {
            class: [],
            id: [],
            zIndex: 1,
            width: 'auto',
            height: 'auto',
            minWidth: 0,
            minHeight: 0,
            maxWidth: 'unset',
            maxHeight: 'unset',
            overflow: 'visible',
            position: 'static',
            display: 'block',
            margin: [0, 0, 0, 0],
            padding: [0, 0, 0, 0],
            borderRadius: [0, 0, 0, 0],
            borderWidth: [0, 0, 0, 0],
            borderColor: '#000000',
            borderStyle: 'solid',
            opacity: 1,
            boxShadow: 'none',
            backgroundColor: 'none',
            
        },
    });

export const settingsState = atom({
    key: 'settings',
    default: {
        backgroundColor: '#ffffff',
        color: '#000',
    },
});
