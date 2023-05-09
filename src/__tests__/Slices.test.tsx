
import { Schedule, MeetingOrder, GetDates } from '../Schedule';

describe('Slices meeting schedule data correctly', () => {
    test('There are 23 people in the schedule', () => {
        const schedule = Schedule();
        expect(schedule.length).toBe(23);
    });

    test('Last names are just one initial', () => {
        const schedule = Schedule();
        const lastName = schedule[0]["Last Name"];
        expect(lastName.length).toBe(1);
    });
        
    test('There are 23 people in the schedule', () => {
        const meeting = MeetingOrder();
        expect(Object.values(meeting).length).toBe(12);
    });

    test('There are 10 dates', () => {
        const schedule = Schedule();
        const dates = GetDates(schedule);
        expect(dates.length).toBe(10);
        const theseDates = ["3/29", "4/5", "4/12", "4/19", "4/26", "5/3", "5/10", "5/17", "5/24", "5/31"];
        expect(dates).toEqual(theseDates);
    });



});

