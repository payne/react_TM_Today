
import { Schedule, GetAssigned } from '../Schedule';

export function Assigned() {
  const schedule = Schedule();
  const assignments = GetAssigned(schedule, "3/29");
  return (
    <>
    <div>
      <p>People with assigned roles!</p>
    </div>
    <ol>
      {assignments.map((assignment, index) => (
        <li key={index}>{assignment}</li>
      ))}
    </ol>
    </>
  );
}

