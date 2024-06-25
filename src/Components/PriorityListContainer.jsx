import PriorityCheckInCard from "./PriorityCheckInCard";
import { useState } from "react";

const PriorityListContainer = ({
  setClaimedStudents,
  priorityStudents,
  setPriorityStudents,
}) => {
  return (
    <>
      <h1>Check In Priority</h1>
      {priorityStudents.map((student) => {
        return (
          <PriorityCheckInCard
            key={student.name}
            student={student}
            setClaimedStudents={setClaimedStudents}
            setPriorityStudents={setPriorityStudents}
            priorityStudents={priorityStudents}
          />
        );
      })}
    </>
  );
};

export default PriorityListContainer;
