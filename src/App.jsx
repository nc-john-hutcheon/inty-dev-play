import PriorityListContainer from "./Components/PriorityListContainer";
import ClaimedContainer from "./Components/ClaimedContainer";
import "./App.css";
import data from "./data/data.json";
import { useState } from "react";

function App() {
  const [claimedStudents, setClaimedStudents] = useState([]);
  const [priorityStudents, setPriorityStudents] = useState(data);
  return (
    <>
      <PriorityListContainer
        setClaimedStudents={setClaimedStudents}
        priorityStudents={priorityStudents}
        setPriorityStudents={setPriorityStudents}
      />
      <ClaimedContainer
        claimedStudents={claimedStudents}
        setClaimedStudents={setClaimedStudents}
        setPriorityStudents={setPriorityStudents}
      />
    </>
  );
}
export default App;
