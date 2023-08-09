import React, { useState } from "react";
import { Link } from "react-router-dom";
// import css
import "../../components/private/AddGalleryPost/GalleryPostCreator.css";

const GalleryPostCreator = () => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [location, setLocation] = useState("");
   const [startDate, setStartDate] = useState("");
   const [endDate, setEndDate] = useState("");
   const [imageUrls, setImageUrls] = useState([]);
   const [galleryPosts, setGalleryPosts] = useState([]);
   const [isPostCreated, setIsPostCreated] = useState(false);

   const isInputNotEmpty = (inputValue) => {
      return inputValue.trim() !== "";
   };

   const handleTitleChange = (e) => {
      setTitle(e.target.value);
   };

   const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
   };

   const handleLocationChange = (e) => {
      setLocation(e.target.value);
   };

   const handleStartDateChange = (e) => {
      setStartDate(e.target.value);
   };

   const handleEndDateChange = (e) => {
      setEndDate(e.target.value);
   };

   const handleImageUpload = (e) => {
      const files = e.target.files;
      const selectedImages = Array.from(files).slice(0, 10);
      const urls = selectedImages.map((file) => URL.createObjectURL(file));
      setImageUrls((prevUrls) => [...prevUrls, ...urls]);
   };

   const handleRemoveImage = (index) => {
      const newImageUrls = imageUrls.filter((url, i) => i !== index);
      setImageUrls(newImageUrls);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (
         !isInputNotEmpty(title) ||
         !isInputNotEmpty(description) ||
         !isInputNotEmpty(location) ||
         !isInputNotEmpty(startDate) ||
         !isInputNotEmpty(endDate) ||
         imageUrls.length === 0
      ) {
         // At least one of the fields is empty, handle accordingly.
         alert("Please fill in all required fields.");
         return;
      }

      const newPost = {
         title,
         description,
         location,
         date: `${startDate} to ${endDate}`,
         images: imageUrls,
      };

      setGalleryPosts((prevPosts) => [...prevPosts, newPost]);
      setIsPostCreated(true);

      setTitle("");
      setDescription("");
      setLocation("");
      setStartDate("");
      setEndDate("");
      setImageUrls([]);

      setTimeout(() => {
         setIsPostCreated(false);
      }, 3000);
   };

   const createDownloadLink = (url, fileName) => {
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.click();
   };

   return (
      <div className="gallery-post-creator">
         <div className="create-post-container">
            <div className="create-post-heading">Create New Post</div>
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
                  <li className="form-item">
                     <div className="image-upload-container">
                        <label
                           htmlFor="image-upload"
                           className="image-upload-label"
                        >
                           Nahrát fotky (Max 10)
                        </label>
                        <input
                           type="file"
                           id="image-upload"
                           accept="image/*"
                           multiple
                           className="image-upload-input"
                           onChange={handleImageUpload}
                        />
                        <div className="image-preview-container">
                           {imageUrls.map((image, index) => (
                              <div key={index} className="image-preview">
                                 <img src={image} alt={`Image ${index + 1}`} />
                                 <button
                                    onClick={() => handleRemoveImage(index)}
                                    title="Remove"
                                 >
                                    &times;
                                 </button>
                              </div>
                           ))}
                        </div>
                     </div>
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
                     Post created successfully!
                  </div>
               </Link>
            )}
         </div>
         <hr />
         <h2>Created Posts:</h2>
         {galleryPosts.map((post, postIndex) => (
            <div key={postIndex} className="created-post">
               <h3>{post.title}</h3>
               <p>{post.description}</p>
               <p>Location: {post.location}</p>
               <p>Date: {post.date}</p>
               <div className="created-images">
                  {post.images.map((image, imgIndex) => (
                     <div key={imgIndex} className="created-image">
                        <img src={image} alt={`Image ${imgIndex + 1}`} />
                        <button
                           className="download-btn"
                           onClick={() =>
                              createDownloadLink(
                                 image,
                                 `Image_${postIndex + 1}_${imgIndex + 1}.jpg`
                              )
                           }
                        >
                           Download
                        </button>
                     </div>
                  ))}
               </div>
               <hr />
            </div>
         ))}
      </div>
   );
};

export default GalleryPostCreator;
