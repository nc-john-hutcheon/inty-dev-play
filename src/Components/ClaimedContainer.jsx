import ClaimedCard from "../Components/ClaimedCard";
import { useState } from "react";
import "./ClaimedContainer.css";

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
  const [resolvedStudents, setResolvedStudents] = useState([]);

  return (
    <div className="claimed-container">
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
      <div className="staff-select">
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
      </div>

      {view === "completed"
        ? resolvedStudents.map((resolvedStudent) => {
            return (
              <>
                <p>{resolvedStudent.student.name}</p>
                <p>{resolvedStudent.comment}</p>
              </>
            );
          })
        : claimedStudents.map((pair) => {
            if (view === "individual" && pair.staff === loggedInStaff) {
              return (
                <ClaimedCard
                  pair={pair}
                  setClaimedStudents={setClaimedStudents}
                  setPriorityStudents={setPriorityStudents}
                  setStaffData={setStaffData}
                  setResolvedStudents={setResolvedStudents}
                />
              );
            } else if (view === "seminar") {
              return (
                <ClaimedCard
                  pair={pair}
                  setClaimedStudents={setClaimedStudents}
                  setPriorityStudents={setPriorityStudents}
                  setStaffData={setStaffData}
                  setResolvedStudents={setResolvedStudents}
                />
              );
            }
          })}
    </div>
  );
};

export default ClaimedContainer;
