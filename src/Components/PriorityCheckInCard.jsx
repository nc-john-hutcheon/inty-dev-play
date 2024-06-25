const PriorityCheckInCard = ({
  student,
  setClaimedStudents,
  setPriorityStudents,
  priorityStudents,
}) => {
  return (
    <section className="priority-checkin">
      <h1>{student["current-task"]}</h1>
      <h2>{student.name}</h2>
      <h4>{student["last-seen"]}</h4>
      <button
        onClick={() => {
          setClaimedStudents((currentClaimedStudents) => {
            let partner = {};
            priorityStudents.forEach((priorityStudent) => {
              if (priorityStudent.name === student.partner) {
                partner = priorityStudent;
              }
            });
            return [...currentClaimedStudents, [student, partner]];
          });
          setPriorityStudents((currentPriorityStudents) => {
            return currentPriorityStudents.filter((priorityStudent) => {
              return (
                priorityStudent.name !== student.name &&
                priorityStudent.name !== student.partner
              );
            });
          });
        }}
      >
        Claim
      </button>
    </section>
  );
};

export default PriorityCheckInCard;
