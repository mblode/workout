import routineRepo from '../db/routineRepo.ts';
import { Routine } from '../types/Routine.ts';

export const getRoutines = async (): Promise<Routine[]> => {
    const routines = await routineRepo.selectAll();

    var result = new Array();

    routines.rows.map((routine: string) => {
        var obj: any = new Object();

        routines.rowDescription.columns.map((el, i) => {
            obj[el.name] = routine[i];
        });
        result.push(obj);
    });

    return result;
};

export const getRoutine = async (routineId: string): Promise<Routine> => {
    const routines = await routineRepo.selectById(routineId);

    var obj: any = new Object();
    routines.rows.map((routine) => {
        routines.rowDescription.columns.map((el, i) => {
            obj[el.name] = routine[i];
        });
    });

    return obj;
};

export const createRoutine = async (routineData: Routine): Promise<Routine> => {
    const newRoutine = {
        name: String(routineData.name),
        brand: String(routineData.brand),
        is_premium: 'is_premium' in routineData ? Boolean(routineData.is_premium) : false,
        registration_date: new Date(),
    };

    await routineRepo.create(newRoutine);

    return newRoutine;
};

export const updateRoutine = async (routineId: string, routineData: Routine) => {
    const routine = await getRoutine(routineId);

    if (Object.keys(routine).length === 0 && routine.constructor === Object) {
        throw new Error('Routine not found');
    }

    const updatedRoutine = {
        name: routineData.name !== undefined ? String(routineData.name) : String(routine.name),
        brand: routineData.brand !== undefined ? String(routineData.brand) : String(routine.brand),
        is_premium:
            routineData.is_premium !== undefined ? Boolean(routineData.is_premium) : Boolean(routine.is_premium),
    };

    routineRepo.update(routineId, updatedRoutine);
};

export const deleteRoutine = async (routineId: string) => {
    routineRepo.delete(routineId);
};
