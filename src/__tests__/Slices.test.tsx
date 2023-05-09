
import { Schedule } from '../Schedule';

describe('Slices meeting schedule data correctly', () => {
    test('There are 23 people in the schedule', () => {
        const schedule = Schedule();
        expect(schedule.length).toBe(23);
    });

    test('2 plus 2 to be 4', () => {
        expect(2 + 2).toBe(4);
    });
        
    test('There are 23 people in the schedule', () => {
        const schedule = Schedule();
        expect(schedule.length).toBe(23);
    });

});

