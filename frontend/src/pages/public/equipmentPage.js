// import universal page component
import PageHeader from "../../components/public/universal/pageHeader/PageHeader";
import PageFooter from "../../components/public/universal/pageFooter/PageFooter";
// import universal css
import "./css/universalPageCss.css";
// import page content
import Content from "../../components/public/equipmentComponent-EquipmentPage/equipmentComponent";

const EquipmentPage = () => {
   return (
      <>
         <div className="Page">
            <PageHeader />
            <div className="Page-content">
               <Content />
            </div>
            <PageFooter />
         </div>
      </>
   );
};
export default EquipmentPage;
