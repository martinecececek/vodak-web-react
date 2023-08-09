import React from "react";
import "./GallerySection.css";
import { Link } from "react-router-dom";

function GallerySection() {
   // Replace the image URLs with actual canoeing images
   const images = [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      // Add more images
   ];

   return (
      <section className="section-gallery">
         <h2>Gallery</h2>
         <div className="image-gallery">
            {images.map((imageUrl, index) => (
               <img key={index} src={imageUrl} alt={`Canoeing ${index + 1}`} />
            ))}
         </div>
         <Link to={"/galerie"}>
            <button className="btn">Více</button>
         </Link>
      </section>
   );
}

export default GallerySection;
