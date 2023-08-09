import "./ProgramEvent.css";

const ProgramEvent = (title, description, date, location) => {
   return (
      <div className="program-event-container">
         <div className="program-event">
            <h2 className="event-title">{title}</h2>
            <p className="event-date">{date}</p>
            <p className="event-location">{location}</p>
            <p className="event-description">{description}</p>
         </div>
      </div>
   );
};

export default ProgramEvent;
