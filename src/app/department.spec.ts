import { Department } from './department';

describe('Department', () => {
    let department = null;

    beforeEach(() => { //Antes de cada prueba
        department = new Department();
        department.id = '5abc4549bdf';
        department.name = 'IT';
    });

    it('should be initialized', () => {
        expect(department).toBeTruthy();
    });

    it('should have keys', () => {
        const propertiesActual = Object.keys(department);
        const propertiesExpected = [
            'id',
            'name'
        ];
    });
});