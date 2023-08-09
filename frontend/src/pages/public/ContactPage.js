// universal page components
import PageHeader from "../../components/public/universal/pageHeader/PageHeader";
import PageFooter from "../../components/public/universal/pageFooter/PageFooter";
//import universal page css
import "./css/universalPageCss.css";
// import content
import Content from "../../components/public/contactComponent-ContactPage/contactComponent"


const ContactPage = () => {
   return (
      <>
         <div className="Page">
            <PageHeader />
            <div className="Page-content">
               <Content/>
            </div>
            <PageFooter />
         </div>
      </>
   );
};

export default ContactPage;
