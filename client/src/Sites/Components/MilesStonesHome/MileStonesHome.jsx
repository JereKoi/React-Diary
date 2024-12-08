import "./MilesStonesHome.css"; // Import your CSS file

const MilesStonesHome = () => {
  //Achievement badges click logic
  const showDetails = (message) => {
    console.log(message); // Replace this with any other logic you need.
  };

  return (
    <div className="badges-container">
      <div
        className="badge unlocked"
        onClick={() => showDetails("30 Days of Journaling")}
      >
        <span className="badge-icon">🏆</span>
        <p>30 Days of Journaling</p>
      </div>
      <div
        className="badge unlocked"
        onClick={() => showDetails("Most Active Day: Sundays")}
      >
        <span className="badge-icon">📅</span>
        <p>Most Active Day: Sundays</p>
      </div>
      <div
        className="badge unlocked"
        onClick={() => showDetails("7 Entries with Positive Mood")}
      >
        <span className="badge-icon">✨</span>
        <p>7 Entries with Positive Mood</p>
      </div>
      <div className="badge locked">
        <span className="badge-icon">🔒</span>
        <p>Locked Badge</p>
      </div>
    </div>
  );
};

export default MilesStonesHome;
