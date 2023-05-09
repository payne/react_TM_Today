
import { Schedule, MeetingOrder, GetDates } from '../Schedule';

describe('Slices meeting schedule data correctly', () => {
    test('There are 23 people in the schedule', () => {
        const schedule = Schedule();
        expect(schedule.length).toBe(23);
    });

    test('2 plus 2 to be 4', () => {
        expect(2 + 2).toBe(4);
    });
        
    test('There are 23 people in the schedule', () => {
        const meeting = MeetingOrder();
        expect(Object.values(meeting).length).toBe(12);
    });

// {"First Name":"Keith","Last Name":"Wilbur","3/29": "S", "4/5":"X","4/12":"","4/19":"T","4/26":"","5/3":"BC","5/10":"","5/17":"S","5/24":"E","5/31":"TT"}
    test('There are 10 dates', () => {
        const schedule = Schedule();
        const dates = GetDates(schedule);
        expect(dates.length).toBe(10);
    });



});

