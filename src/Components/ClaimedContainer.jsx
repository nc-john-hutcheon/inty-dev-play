import ClaimedCard from "../Components/ClaimedCard";
import staffData from "../data/staff.json";
import { useState } from "react";

const ClaimedContainer = ({
  claimedStudents,
  setClaimedStudents,
  setPriorityStudents,
  setStaffData,
  loggedInStaff,
  setLoggedInStaff,
  staffData,
}) => {
  const [view, setView] = useState("individual");

  return (
    <>
      <h2>Check ins: {view} view</h2>
      <button
        onClick={() => {
          setView("individual");
        }}
      >
        Individual
      </button>
      <button
        onClick={() => {
          setView("seminar");
        }}
      >
        Seminar
      </button>
      <button
        onClick={() => {
          setView("completed");
        }}
      >
        Completed
      </button>
      <select
        onChange={(event) => {
          setLoggedInStaff(event.target.value);
        }}
      >
        <option>{loggedInStaff}</option>
        {staffData.map((member) => {
          if (member.name !== loggedInStaff) {
            return <option>{member.name}</option>;
          }
        })}
      </select>

      {claimedStudents.map((pair) => {
        if (view === "individual" && pair.staff === loggedInStaff) {
          return (
            <ClaimedCard
              pair={pair}
              setClaimedStudents={setClaimedStudents}
              setPriorityStudents={setPriorityStudents}
              setStaffData={setStaffData}
            />
          );
        } else if (view === "seminar") {
          return (
            <ClaimedCard
              pair={pair}
              setClaimedStudents={setClaimedStudents}
              setPriorityStudents={setPriorityStudents}
              setStaffData={setStaffData}
            />
          );
        }
      })}
    </>
  );
};

export default ClaimedContainer;
