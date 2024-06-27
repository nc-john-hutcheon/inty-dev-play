import "./PriorityCheckInCard.css";
const PriorityCheckInCard = ({
  student,
  setClaimedStudents,
  setPriorityStudents,
  priorityStudents,
  setStaffData,
  loggedInStaff,
}) => {
  return (
    <section className="priority-checkin">
      <div className="upper-priority">
        <h2>Current Task: {student["current-task"]}</h2>
        <h2>{student.name}</h2>
        <h4>{student["last-seen"]}</h4>
        {student.partner && <h3>Partner: {student.partner}</h3>}
      </div>
      <div className="lower-priority">
        <button
          onClick={() => {
            let partner = {};
            setClaimedStudents((currentClaimedStudents) => {
              priorityStudents.forEach((priorityStudent) => {
                if (priorityStudent.name === student.partner) {
                  partner = priorityStudent;
                }
              });
              return [
                ...currentClaimedStudents,
                { students: [student, partner], staff: loggedInStaff },
              ];
            });
            setPriorityStudents((currentPriorityStudents) => {
              return currentPriorityStudents.filter((priorityStudent) => {
                return (
                  priorityStudent.name !== student.name &&
                  priorityStudent.name !== student.partner
                );
              });
            });
            setStaffData((currentStaffData) => {
              return currentStaffData.map((staffMember) => {
                if (staffMember.name === loggedInStaff) {
                  console.log(staffMember, "staffMember");
                  return {
                    ...staffMember,
                    claimed_students: [
                      ...staffMember.claimed_students,
                      student,
                      partner,
                    ],
                  };
                }
                return staffMember;
              });
            });
          }}
        >
          Claim
        </button>
      </div>
    </section>
  );
};

export default PriorityCheckInCard;
