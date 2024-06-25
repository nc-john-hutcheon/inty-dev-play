import ResolutionForm from "../Components/ResolutionForm";
import ClaimedCard from "../Components/ClaimedCard";
import staffData from "../data/staff.json";
import { useState } from "react";

const ClaimedContainer = ({ claimedStudents }) => {
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
      <select>
        <option>Choose your fighter</option>
        {staffData.map((member) => {
          return <option>{member.name}</option>;
        })}
      </select>

      <p>hello from claimed container</p>
      {claimedStudents.map((pair) => {
        return <ClaimedCard pair={pair} />;
      })}
      <ResolutionForm />
    </>
  );
};

export default ClaimedContainer;
