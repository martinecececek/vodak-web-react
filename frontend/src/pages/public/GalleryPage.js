import { useState, useEffect, react } from "react";
// import universal page components
import PageHeader from "../../components/public/universal/pageHeader/PageHeader";
import PageFooter from "../../components/public/universal/pageFooter/PageFooter";
// import universal page css
import "./css/universalPageCss.css";
// import page content
import Post from "../../components/public/galleryPost-GalleryPage/galleryPost";

const GalleryPage = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch("http://localhost:8080/blogposts")
         .then((res) => res.json())
         .then((data) => setData(data))
         .catch((err) => console.log(err));
   }, []);

   return (
      <>
         <div className="Page">
            <PageHeader />
            <div className="Page-content">
               <ul className="content-wrapper">
                  {data.map((post, postIndex) => (
                     <li className="program-post" key={postIndex}>
                        <Post
                           title={post.title}
                           description={post.description}
                           date={post.date}
                           location={post.location}
                           images={post.images}
                        />
                     </li>
                  ))}
               </ul>
            </div>
            <PageFooter />
         </div>
      </>
   );
};
export default GalleryPage;
