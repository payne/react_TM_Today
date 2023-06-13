
import { Schedule, MeetingOrder, GetDates, GetAssigned, getUnassigned } from '../Schedule';

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
        
    test('There are 12 assigned roles in a meeting', () => {
        const meeting = MeetingOrder();
        expect(Object.values(meeting).length).toBe(12);
    });

    test('There are 16 people with assigned roles in a meeting', () => {
        const schedule = Schedule();
        const assignments = GetAssigned(schedule, "3/29");
        expect(assignments.length).toBe(16);
        /* This looks good:
        assignments.forEach( (assignment) => {
            console.log(assignment);
        });
        */
    });

    test('There are 10 dates', () => {
        const schedule = Schedule();
        const dates = GetDates(schedule);
        expect(dates.length).toBe(10);
        const theseDates = ["3/29", "4/5", "4/12", "4/19", "4/26", "5/3", "5/10", "5/17", "5/24", "5/31"];
        expect(dates).toEqual(theseDates);
    });

    test('The dates', () => {

        const schedule = Schedule();
        expect(schedule.length).toBe(23);

        const reducedSchedule = getUnassigned("3/29", schedule);
        expect(reducedSchedule.length).toBe(7);
        console.log('schedule',schedule);
    /*
        const schedule = Schedule();
        const dates = GetDates(schedule);
        expect(dates.length).toBe(10);
        const theseDates = ["3/29", "4/5", "4/12", "4/19", "4/26", "5/3", "5/10", "5/17", "5/24", "5/31"];
        expect(dates).toEqual(theseDates);
     */
    });

});

