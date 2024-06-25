const ClaimedCard = ({ pair, setClaimedStudents, setPriorityStudents }) => {
  const [student1, student2] = pair;
  return (
    <>
      {student2.name ? (
        <h1>
          {student1.name} and {student2.name}
        </h1>
      ) : (
        <h1>{student1.name}</h1>
      )}
      <button>resolve</button>
      <button
        onClick={() => {
          setPriorityStudents((currentPriorityStudents) => {
            if (student2) {
              return [...currentPriorityStudents, student1, student2];
            }
            return [...currentPriorityStudents, student1];
          });
          setClaimedStudents((currentClaimedStudents) => {
            return currentClaimedStudents.filter((claimedStudent) => {
              return (
                claimedStudent[0].name !== student1.name &&
                claimedStudent[1].name !== student2?.name
              );
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
