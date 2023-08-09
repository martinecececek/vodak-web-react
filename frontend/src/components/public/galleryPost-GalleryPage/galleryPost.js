import React, { useState, useRef, useEffect } from "react";
import "./galleryPost.css";

export default function EventComponent({
   title,
   date,
   location,
   description,
   images,
}) {
   const [showAllImages, setShowAllImages] = useState(false);
   const [eventHeight, setEventHeight] = useState("auto"); // Height of the event container
   const eventRef = useRef(null); // Reference to the event container

   useEffect(() => {
      calculateEventHeight();
   }, [showAllImages, images]);

   const toggleImageVisibility = () => {
      setShowAllImages(!showAllImages);
   };

   // Function to calculate the event container height based on the number of images
   const calculateEventHeight = () => {
      if (eventRef.current) {
         const imageContainers =
            eventRef.current.querySelectorAll(".image-container");
         let totalImageHeight = 0;
         imageContainers.forEach((container) => {
            totalImageHeight += container.offsetHeight;
         });

         // Calculate the extra height for additional images (if any)
         const additionalHeight =
            images.length > 3 ? images.length - 3 * (showAllImages ? 1 : 0) : 0;

         // Calculate the final height for the event container
         const finalHeight =
            eventRef.current.offsetHeight +
            totalImageHeight +
            additionalHeight * 10;

         // Set the height with a minimum value of 350px to ensure it's never too small
         setEventHeight(`${Math.max(finalHeight, 350)}px`);
      }
   };

   const visibleImages = showAllImages ? images : images.slice(0, 3);

   return (
      <div
         className={`event ${showAllImages ? "expanded" : ""}`}
         ref={eventRef}
         style={{ maxHeight: eventHeight }}
      >
         <div className="event-details">
            <h2>{title}</h2>
            <ul className="event-details-meta-wrapper">
               <li className="event-details-meta-item">
                  <p>Date: {date}</p>
               </li>
               <li className="event-details-meta-item">
                  <p>Location: {location}</p>
               </li>
            </ul>
            <p>Description: {description}</p>
         </div>
         <div className="picture-container">
            {visibleImages.map((image, index) => (
               <div key={index} className="image-container">
                  <img src={image} alt={`Event Picture ${index + 1}`} />
               </div>
            ))}
         </div>
         {images.length > 3 && (
            <div className="button-container">
               <button
                  onClick={() => {
                     toggleImageVisibility();
                  }}
               >
                  {showAllImages ? "Hide Images" : "Show More Images"}
               </button>
            </div>
         )}
      </div>
   );
}
