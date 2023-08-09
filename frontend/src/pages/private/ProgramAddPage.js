import React, { useState } from "react";
import { Link } from "react-router-dom";
// import page css
import "../../components/private/AddProgramPost/AddProgramPost.css";

const ProgramAdd = () => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [location, setLocation] = useState("");
   const [startDate, setStartDate] = useState("");
   const [endDate, setEndDate] = useState("");
   const [programPost, setProgramPost] = useState([]);
   const [isPostCreated, setIsPostCreated] = useState([]);

   const isInputNotEmpty = (inputValue) => {
      return inputValue.trim() !== "";
   };

   const handleTitleChange = (e) => {
      return setTitle(e.target.value);
   };

   const handleDescriptionChange = (e) => {
      return setDescription(e.target.value);
   };

   const handleLocationChange = (e) => {
      return setLocation(e.target.value);
   };

   const handleStartDateChange = (e) => {
      return setStartDate(e.target.value);
   };

   const handleEndDateChange = (e) => {
      return setEndDate(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (
         !isInputNotEmpty(title) ||
         !isInputNotEmpty(description) ||
         !isInputNotEmpty(location) ||
         !isInputNotEmpty(startDate) ||
         !isInputNotEmpty(endDate)
      ) {
         alert("All fields are required");
         return;
      }

      const newProgram = {
         title,
         description,
         location,
         date: `${startDate} to ${endDate}`,
      };

      // TODO? save data to db
      
      setProgramPost((prevProgram) => [...prevProgram, newProgram]);
      setIsPostCreated(true);

      setTitle("");
      setDescription("");
      setLocation("");
      setStartDate("");
      setEndDate("");

      setTimeout(() => {
         isPostCreated(false);
      }, 3000);
   };

   return (
      <div className="program-post-creator">
         <div className="crete-post-container">
            <div className="create-post-heading">
               Vytvořit nový příspěvek do programu
            </div>
            <form onSubmit={handleSubmit} className="create-post-form">
               <ul className="form-wrapper">
                  <li className="form-item">
                     <div>
                        <label>Název:</label>
                        <input
                           type="text"
                           value={title}
                           onChange={handleTitleChange}
                           className={
                              !isInputNotEmpty(title) ? "red-border" : ""
                           }
                        />
                     </div>
                  </li>
                  <li className="form-item">
                     <div>
                        <label>Popis:</label>
                        <textarea
                           value={description}
                           onChange={handleDescriptionChange}
                           className={
                              !isInputNotEmpty(description) ? "red-border" : ""
                           }
                        />
                     </div>
                  </li>
                  <li className="form-item">
                     <div>
                        <label>Lokace:</label>
                        <input
                           type="text"
                           value={location}
                           onChange={handleLocationChange}
                           className={
                              !isInputNotEmpty(location) ? "red-border" : ""
                           }
                        />
                     </div>
                  </li>
                  <li className="form-item">
                     <ul className="date-wrapper">
                        <li className="date-item">
                           <div>
                              <label>Od:</label>
                              <input
                                 type="date"
                                 value={startDate}
                                 onChange={handleStartDateChange}
                                 className={
                                    !isInputNotEmpty(startDate)
                                       ? "red-border"
                                       : ""
                                 }
                              />
                           </div>
                        </li>
                        <li className="date-item">
                           <div>
                              <label>Do:</label>
                              <input
                                 type="date"
                                 value={endDate}
                                 onChange={handleEndDateChange}
                                 className={
                                    !isInputNotEmpty(endDate)
                                       ? "red-border"
                                       : ""
                                 }
                              />
                           </div>
                        </li>
                     </ul>
                  </li>
                  <li className="from-item">
                     <ul className="btn-wrapper">
                        <li className="btn-item">
                           <div className="submit-button-container">
                              <button type="submit">Vytvořit</button>
                           </div>
                        </li>
                        <li className="btn-item" id="back">
                           <div className="back-btn">
                              <Link to="/admin">
                                 <button type="btn">Zpět</button>
                              </Link>
                           </div>
                        </li>
                     </ul>
                  </li>
               </ul>
            </form>
            {isPostCreated && (
               <Link to="/admin">
                  <div className="success-message">
                     Příspěvek úspěšně vytvořen
                  </div>
               </Link>
            )}
            <hr />
            <h2>Vytvořený post:</h2>
            {programPost.map((post, postIndex) => (
               <div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <p>Location: {post.location}</p>
                  <p>Date: {post.date}</p>
                  <hr />
               </div>
            ))}
         </div>
      </div>
   );
};

export default ProgramAdd;
