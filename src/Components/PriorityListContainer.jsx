import PriorityCheckInCard from "./PriorityCheckInCard";
import { useState } from "react";

const PriorityListContainer = ({
  setClaimedStudents,
  priorityStudents,
  setPriorityStudents,
  setStaffData,
  loggedInStaff,
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
            setStaffData={setStaffData}
            loggedInStaff={loggedInStaff}
          />
        );
      })}
    </>
  );
};

export default PriorityListContainer;
