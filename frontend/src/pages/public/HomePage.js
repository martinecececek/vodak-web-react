
// import universal page components
import PageHeader from  "../../components/public/universal/pageHeader/PageHeader";
import PageFooter from "../../components/public/universal/pageFooter/PageFooter";
// import universal page css
import "./css/universalPageCss.css";
// import page content
import Component1 from "../../components/public/infoComponent-MainPage/InfoSection";
import Component2 from "../../components/public/galleryComponent-MainPage/GallerySection";

const HomePage = () => {
   return (
      <>
         <div className="Page">
            <PageHeader />
            <div className="Page-content">
               <Component1 />
               <Component2 />
            </div>
            <PageFooter />
         </div>
      </>
   );
};

export default HomePage;
