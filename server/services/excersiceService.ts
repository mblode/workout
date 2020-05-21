import excersiceRepo from '../db/excersiceRepo.ts';
import { Excersice } from '../types/Excersice.ts';

export const getExcersices = async (): Promise<Excersice[]> => {
    const excersices = await excersiceRepo.selectAll();

    var result = new Array();

    excersices.rows.map((excersice: string) => {
        var obj: any = new Object();

        excersices.rowDescription.columns.map((el, i) => {
            obj[el.name] = excersice[i];
        });
        result.push(obj);
    });

    return result;
};

export const getExcersice = async (excersiceId: string): Promise<Excersice> => {
    const excersices = await excersiceRepo.selectById(excersiceId);

    var obj: any = new Object();
    excersices.rows.map((excersice) => {
        excersices.rowDescription.columns.map((el, i) => {
            obj[el.name] = excersice[i];
        });
    });

    return obj;
};

export const createExcersice = async (excersiceData: Excersice): Promise<Excersice> => {
    const newExcersice = {
        name: String(excersiceData.name),
        brand: String(excersiceData.brand),
        is_premium: 'is_premium' in excersiceData ? Boolean(excersiceData.is_premium) : false,
        registration_date: new Date(),
    };

    await excersiceRepo.create(newExcersice);

    return newExcersice;
};

export const updateExcersice = async (excersiceId: string, excersiceData: Excersice) => {
    const excersice = await getExcersice(excersiceId);

    if (Object.keys(excersice).length === 0 && excersice.constructor === Object) {
        throw new Error('Excersice not found');
    }

    const updatedExcersice = {
        name: excersiceData.name !== undefined ? String(excersiceData.name) : String(excersice.name),
        brand: excersiceData.brand !== undefined ? String(excersiceData.brand) : String(excersice.brand),
        is_premium:
            excersiceData.is_premium !== undefined ? Boolean(excersiceData.is_premium) : Boolean(excersice.is_premium),
    };

    excersiceRepo.update(excersiceId, updatedExcersice);
};

export const deleteExcersice = async (excersiceId: string) => {
    excersiceRepo.delete(excersiceId);
};
