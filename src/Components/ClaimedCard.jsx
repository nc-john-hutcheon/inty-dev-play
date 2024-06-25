const ClaimedCard = ({ pair }) => {
  return (
    <>
      {pair[1] ? (
        <h1>
          {pair[0]} and {pair[1]}
        </h1>
      ) : (
        <h1>{pair[0]}</h1>
      )}
      <button>resolve</button>
    </>
  );
};

export default ClaimedCard;
