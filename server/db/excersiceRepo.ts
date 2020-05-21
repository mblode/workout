import connect from '../config/database.ts';
import { Excersice } from '../types/Excersice.ts';

class ExcersiceRepo {
    async create(excersice: Excersice) {
        const client = await connect();

        return client.query(
            'INSERT INTO excersices (name, brand, is_premium, registration_date) VALUES ($1, $2, $3, $4)',
            excersice.name,
            excersice.brand,
            excersice.is_premium,
            excersice.registration_date
        );
    }

    selectAll = async () => {
        const client = await connect();

        const result = await client.query('SELECT * FROM excersices ORDER BY id');

        return result;
    };

    selectById = async (id: string) => {
        const client = await connect();

        const result = await client.query(`SELECT * FROM excersices WHERE id = $1`, id);

        return result;
    };

    update = async (id: string, excersice: Excersice) => {
        const client = await connect();

        var query = `UPDATE excersices `;
        var hasSet = false;
        if (excersice.name !== undefined) {
            query += ` SET name = '${excersice.name}'` + (excersice.brand !== undefined ? ',' : '');
            hasSet = true;
        }

        if (excersice.brand !== undefined) {
            if (!hasSet) query += ' SET ';
            query += ` brand = '${excersice.brand}'` + (excersice.is_premium !== undefined ? ',' : '');
            hasSet = true;
        }

        if (excersice.is_premium !== undefined) {
            if (!hasSet) query += ' SET ';
            query += ` is_premium = '${excersice.is_premium}'`;
        }

        query += ` WHERE id = ${id}`;
        const result = await client.query(query);

        return result;
    };

    delete = async (id: string) => {
        const client = await connect();

        const result = await client.query(`DELETE FROM excersices WHERE id = $1`, id);

        return result;
    };
}

export default new ExcersiceRepo();
