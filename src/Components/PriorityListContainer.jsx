import data from "../data/data.json";
import PriorityCheckInCard from "./PriorityCheckInCard";

const PriorityListContainer = () => {
  return (
    <>
      <h1>Check In Priority</h1>
      {data.map((student) => {
        return <PriorityCheckInCard key={student.name} student={student} />;
      })}
    </>
  );
};

export default PriorityListContainer;
