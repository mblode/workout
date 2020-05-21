export interface User {
    _id: {
        $oid: string;
    };
    username: string;
    password: string;
    email: string;
}

export interface Exercise {
    _id: {
        $oid: string;
    };
    title: string;
    category: string;
    instructions: string;
}

export interface Routine {
    _id: {
        $oid: string;
    };
    title: string;
    description: string;
    category: string;
    user_id: string;
}

export interface RoutineExercise {
    _id: {
        $oid: string;
    };
    weight: number;
    default_reps: number;
    user_id: string;
    routine_id: string;
    excersie_id: string;
}

export interface Workout {
    _id: {
        $oid: string;
    };
    started: Date;
    completed: Date;
    user_id: string;
    routine_id: string;
}

export interface WorkoutExercise {
    _id: {
        $oid: string;
    };
    wight: number;
    reps_completed: number;
    user_id: string;
    routine_id: string;
    excersie_id: string;
    workout_id: string;
}
