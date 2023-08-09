// universal page components
import PageHeader from "../../components/public/universal/pageHeader/PageHeader";
import PageFooter from "../../components/public/universal/pageFooter/PageFooter";
//import universal page css
import "./css/universalPageCss.css";
// import page content
import Content from "../../components/public/AboutUs-AboutUsPage/AboutUs";

const AboutPage = () => {
   return (
      <>
         <div className="App">
            <PageHeader />
            <div className="App-main">
               <Content />
            </div>
            <PageFooter />
         </div>
      </>
   );
};

export default AboutPage;
