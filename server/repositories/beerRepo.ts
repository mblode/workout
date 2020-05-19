import connect from '../db/database.ts';
import { Beer } from '../models/Beer.ts';

class BeerRepo {
    async create(beer: Beer) {
        const client = await connect();

        return client.query(
            'INSERT INTO beers (name, brand, is_premium, registration_date) VALUES ($1, $2, $3, $4)',
            beer.name,
            beer.brand,
            beer.is_premium,
            beer.registration_date
        );
    }

    selectAll = async () => {
        const client = await connect();

        const result = await client.query('SELECT * FROM beers ORDER BY id');

        return result;
    };

    selectById = async (id: string) => {
        const client = await connect();

        const result = await client.query(`SELECT * FROM beers WHERE id = $1`, id);

        return result;
    };

    update = async (id: string, beer: Beer) => {
        const client = await connect();

        var query = `UPDATE beers `;
        var hasSet = false;
        if (beer.name !== undefined) {
            query += ` SET name = '${beer.name}'` + (beer.brand !== undefined ? ',' : '');
            hasSet = true;
        }

        if (beer.brand !== undefined) {
            if (!hasSet) query += ' SET ';
            query += ` brand = '${beer.brand}'` + (beer.is_premium !== undefined ? ',' : '');
            hasSet = true;
        }

        if (beer.is_premium !== undefined) {
            if (!hasSet) query += ' SET ';
            query += ` is_premium = '${beer.is_premium}'`;
        }

        query += ` WHERE id = ${id}`;
        const result = await client.query(query);

        return result;
    };

    delete = async (id: string) => {
        const client = await connect();

        const result = await client.query(`DELETE FROM beers WHERE id = $1`, id);

        return result;
    };
}

export default new BeerRepo();
