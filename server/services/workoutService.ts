import workoutRepo from '../db/workoutRepo.ts';
import { Workout } from '../types/Workout.ts';

export const getWorkouts = async (): Promise<Workout[]> => {
    const workouts = await workoutRepo.selectAll();

    var result = new Array();

    workouts.rows.map((workout: string) => {
        var obj: any = new Object();

        workouts.rowDescription.columns.map((el, i) => {
            obj[el.name] = workout[i];
        });
        result.push(obj);
    });

    return result;
};

export const getWorkout = async (workoutId: string): Promise<Workout> => {
    const workouts = await workoutRepo.selectById(workoutId);

    var obj: any = new Object();
    workouts.rows.map((workout) => {
        workouts.rowDescription.columns.map((el, i) => {
            obj[el.name] = workout[i];
        });
    });

    return obj;
};

export const createWorkout = async (workoutData: Workout): Promise<Workout> => {
    const newWorkout = {
        name: String(workoutData.name),
        brand: String(workoutData.brand),
        is_premium: 'is_premium' in workoutData ? Boolean(workoutData.is_premium) : false,
        registration_date: new Date(),
    };

    await workoutRepo.create(newWorkout);

    return newWorkout;
};

export const updateWorkout = async (workoutId: string, workoutData: Workout) => {
    const workout = await getWorkout(workoutId);

    if (Object.keys(workout).length === 0 && workout.constructor === Object) {
        throw new Error('Workout not found');
    }

    const updatedWorkout = {
        name: workoutData.name !== undefined ? String(workoutData.name) : String(workout.name),
        brand: workoutData.brand !== undefined ? String(workoutData.brand) : String(workout.brand),
        is_premium:
            workoutData.is_premium !== undefined ? Boolean(workoutData.is_premium) : Boolean(workout.is_premium),
    };

    workoutRepo.update(workoutId, updatedWorkout);
};

export const deleteWorkout = async (workoutId: string) => {
    workoutRepo.delete(workoutId);
};
