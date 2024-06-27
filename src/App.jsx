import PriorityListContainer from "./Components/PriorityListContainer";
import ClaimedContainer from "./Components/ClaimedContainer";
import "./App.css";
import priorityData from "./data/data.json";
import staffInfo from "./data/staff.json";
import { useEffect, useState } from "react";

function App() {
  const [claimedStudents, setClaimedStudents] = useState([]);
  const [priorityStudents, setPriorityStudents] = useState(priorityData);
  const [staffData, setStaffData] = useState(staffInfo);
  const [loggedInStaff, setLoggedInStaff] = useState("Michael staff");

  return (
    <>
      <h1 className="title">Northcoders, Baby!</h1>
      <div className="master-layout">
        <div className="div1">
          <PriorityListContainer
            setClaimedStudents={setClaimedStudents}
            priorityStudents={priorityStudents}
            setPriorityStudents={setPriorityStudents}
            setStaffData={setStaffData}
            loggedInStaff={loggedInStaff}
          />
        </div>
        <div className="div2">
          <ClaimedContainer
            claimedStudents={claimedStudents}
            setClaimedStudents={setClaimedStudents}
            setPriorityStudents={setPriorityStudents}
            setStaffData={setStaffData}
            loggedInStaff={loggedInStaff}
            setLoggedInStaff={setLoggedInStaff}
            staffData={staffData}
          />
        </div>
      </div>
    </>
  );
}
export default App;
