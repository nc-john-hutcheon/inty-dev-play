const PriorityCheckInCard = ({ student }) => {
  return (
    <section className="priority-checkin">
      <h1>{student["current-task"]}</h1>
      <h2>{student.name}</h2>
      <h4>{student["last-seen"]}</h4>
      <button>Claim</button>
    </section>
  );
};

export default PriorityCheckInCard;
