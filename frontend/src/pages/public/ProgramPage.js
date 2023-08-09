import { useState, useEffect } from "react";
// import universal page component
import PageHeader from "../../components/public/universal/pageHeader/PageHeader";
import PageFooter from "../../components/public/universal/pageFooter/PageFooter";
// import universal css
import "./css/universalPageCss.css";
// import content of page
import Post from "../../components/public/galleryPost-GalleryPage/galleryPost";

export default function ProgramPage() {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch("http://localhost:8080/blogposts")
         .then((res) => res.json())
         .then((data) => setData(data))
         .catch((err) => console.log(err));
   }, []);

   const initialEventLimit = 5;
   const [showAllEvents, setShowAllEvents] = useState(false);
   const [displayedEvents, setDisplayedEvents] = useState(
      data.slice(0, initialEventLimit)
   );

   const handleShowMoreClick = () => {
      setShowAllEvents(true);
      setDisplayedEvents(data);
   };

   return (
      <>
         <div className="App">
            <PageHeader />
            <div className="App-main">
               {data.map((post, postIndex) => (
                  <Post
                     key={postIndex}
                     title={post.title}
                     description={post.description}
                     date={post.date}
                     location={post.location}
                  />
               ))}
            </div>
            {!showAllEvents && data.length > initialEventLimit && (
               <div className="show-more-btn-container">
                  <button
                     onClick={handleShowMoreClick}
                     className="show-more-btn"
                  >
                     Více
                  </button>
               </div>
            )}
            <PageFooter />
         </div>
      </>
   );
}
