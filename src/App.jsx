import PriorityListContainer from "./Components/PriorityListContainer";
import ClaimedContainer from "./Components/ClaimedContainer";
import "./App.css";
import { useState } from "react";

function App() {
  const [claimedStudents, setClaimedStudents] = useState([
    ["Michael Student", "Aimée Student"],
    ["John Student", "Harrison Student"],
    ["MKD"],
  ]);

  return (
    <>
      <PriorityListContainer setClaimedStudents={setClaimedStudents} />
      <ClaimedContainer claimedStudents={claimedStudents} />
    </>
  );
}
export default App;
