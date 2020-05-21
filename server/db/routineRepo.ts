import connect from '../config/database.ts';
import { Routine } from '../types/Routine.ts';

class RoutineRepo {
    async create(routine: Routine) {
        const client = await connect();

        return client.query(
            'INSERT INTO routines (name, brand, is_premium, registration_date) VALUES ($1, $2, $3, $4)',
            routine.name,
            routine.brand,
            routine.is_premium,
            routine.registration_date
        );
    }

    selectAll = async () => {
        const client = await connect();

        const result = await client.query('SELECT * FROM routines ORDER BY id');

        return result;
    };

    selectById = async (id: string) => {
        const client = await connect();

        const result = await client.query(`SELECT * FROM routines WHERE id = $1`, id);

        return result;
    };

    update = async (id: string, routine: Routine) => {
        const client = await connect();

        var query = `UPDATE routines `;
        var hasSet = false;
        if (routine.name !== undefined) {
            query += ` SET name = '${routine.name}'` + (routine.brand !== undefined ? ',' : '');
            hasSet = true;
        }

        if (routine.brand !== undefined) {
            if (!hasSet) query += ' SET ';
            query += ` brand = '${routine.brand}'` + (routine.is_premium !== undefined ? ',' : '');
            hasSet = true;
        }

        if (routine.is_premium !== undefined) {
            if (!hasSet) query += ' SET ';
            query += ` is_premium = '${routine.is_premium}'`;
        }

        query += ` WHERE id = ${id}`;
        const result = await client.query(query);

        return result;
    };

    delete = async (id: string) => {
        const client = await connect();

        const result = await client.query(`DELETE FROM routines WHERE id = $1`, id);

        return result;
    };
}

export default new RoutineRepo();
