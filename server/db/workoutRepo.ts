import connect from '../config/database.ts';
import { Workout } from '../types/Workout.ts';

class WorkoutRepo {
    async create(workout: Workout) {
        const client = await connect();

        return client.query(
            'INSERT INTO workouts (name, brand, is_premium, registration_date) VALUES ($1, $2, $3, $4)',
            workout.name,
            workout.brand,
            workout.is_premium,
            workout.registration_date
        );
    }

    selectAll = async () => {
        const client = await connect();

        const result = await client.query('SELECT * FROM workouts ORDER BY id');

        return result;
    };

    selectById = async (id: string) => {
        const client = await connect();

        const result = await client.query(`SELECT * FROM workouts WHERE id = $1`, id);

        return result;
    };

    update = async (id: string, workout: Workout) => {
        const client = await connect();

        var query = `UPDATE workouts `;
        var hasSet = false;
        if (workout.name !== undefined) {
            query += ` SET name = '${workout.name}'` + (workout.brand !== undefined ? ',' : '');
            hasSet = true;
        }

        if (workout.brand !== undefined) {
            if (!hasSet) query += ' SET ';
            query += ` brand = '${workout.brand}'` + (workout.is_premium !== undefined ? ',' : '');
            hasSet = true;
        }

        if (workout.is_premium !== undefined) {
            if (!hasSet) query += ' SET ';
            query += ` is_premium = '${workout.is_premium}'`;
        }

        query += ` WHERE id = ${id}`;
        const result = await client.query(query);

        return result;
    };

    delete = async (id: string) => {
        const client = await connect();

        const result = await client.query(`DELETE FROM workouts WHERE id = $1`, id);

        return result;
    };
}

export default new WorkoutRepo();
