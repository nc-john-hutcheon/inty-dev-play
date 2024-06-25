const ClaimedCard = ({
  pair,
  setClaimedStudents,
  setPriorityStudents,
  setStaffData,
}) => {
  const [student1, student2] = pair.students;
  const staff = pair.staff;
  return (
    <>
      {student2.name ? (
        <h1>
          {student1.name} and {student2.name} - {staff}
        </h1>
      ) : (
        <h1>
          {student1.name} - {staff}
        </h1>
      )}
      <button>resolve</button>
      <button
        onClick={() => {
          setPriorityStudents((currentPriorityStudents) => {
            if (student2.name) {
              return [...currentPriorityStudents, student1, student2];
            }
            return [...currentPriorityStudents, student1];
          });
          setClaimedStudents((currentClaimedStudents) => {
            return currentClaimedStudents.filter((claimedStudent) => {
              return (
                claimedStudent.students[0].name !== student1.name &&
                claimedStudent.students[1].name !== student2?.name
              );
            });
          });
          setStaffData((currentStaffData) => {
            return currentStaffData.map((staffMember) => {
              if (staffMember.name === staff) {
                return {
                  ...staffMember,
                  students: staffMember.claimed_students.filter((student) => {
                    return (
                      student.name !== student1.name &&
                      student.name !== student2?.name
                    );
                  }),
                };
              }
              return staffMember;
            });
          });
        }}
      >
        unclaim
      </button>
    </>
  );
};

export default ClaimedCard;
