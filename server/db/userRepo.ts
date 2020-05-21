import connect from '../config/database.ts';
import { User } from '../types/User.ts';

class UserRepo {
    async create(user: User) {
        const client = await connect();

        return client.query(
            'INSERT INTO users (name, brand, is_premium, registration_date) VALUES ($1, $2, $3, $4)',
            user.name,
            user.brand,
            user.is_premium,
            user.registration_date
        );
    }

    selectAll = async () => {
        const client = await connect();

        const result = await client.query('SELECT * FROM users ORDER BY id');

        return result;
    };

    selectById = async (id: string) => {
        const client = await connect();

        const result = await client.query(`SELECT * FROM users WHERE id = $1`, id);

        return result;
    };

    update = async (id: string, user: User) => {
        const client = await connect();

        var query = `UPDATE users `;
        var hasSet = false;
        if (user.name !== undefined) {
            query += ` SET name = '${user.name}'` + (user.brand !== undefined ? ',' : '');
            hasSet = true;
        }

        if (user.brand !== undefined) {
            if (!hasSet) query += ' SET ';
            query += ` brand = '${user.brand}'` + (user.is_premium !== undefined ? ',' : '');
            hasSet = true;
        }

        if (user.is_premium !== undefined) {
            if (!hasSet) query += ' SET ';
            query += ` is_premium = '${user.is_premium}'`;
        }

        query += ` WHERE id = ${id}`;
        const result = await client.query(query);

        return result;
    };

    delete = async (id: string) => {
        const client = await connect();

        const result = await client.query(`DELETE FROM users WHERE id = $1`, id);

        return result;
    };
}

export default new UserRepo();
