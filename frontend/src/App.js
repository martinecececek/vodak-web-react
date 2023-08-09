import { BrowserRouter, Route, Routes } from "react-router-dom";
// import public pages
import HomePage from "./pages/public/HomePage";
import AboutPage from "./pages/public/AboutUsPage";
import ContactPage from "./pages/public/ContactPage";
import GalleryPage from "./pages/public/GalleryPage";
import ProgramPage from "./pages/public/ProgramPage";
import EquipmentPage from "./pages/public/equipmentPage"; //TODO: add equipment page
//import admin page
import AdministratorPage from "./pages/private/AdministratorPage";
import GalleryAdd from "./pages/private/GalleryAddPage";
import GalleryEdit from "./pages/private/GalleryEditPage";
import ProgramAdd from "./pages/private/ProgramAddPage";
import ProgramEdit from "./pages/private/ProgramEditPage";
// import error page
import NoPage from "./pages/noPage";

export default function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               {/* index page route */}
               <Route index element={<HomePage />} />
               {/* public page routes */}
               <Route path="/domu" element={<HomePage />} />
               <Route path="/onas" element={<AboutPage />} />
               <Route path="/kontakty" element={<ContactPage />} />
               <Route path="/galerie" element={<GalleryPage />} />
               <Route path="/program" element={<ProgramPage />} />
               <Route path="/vybaveni" element={<EquipmentPage />} />
               {/* admin pages routes */}
               <Route path="/admin" element={<AdministratorPage />} />
               <Route path="/admin/add-gallery" element={<GalleryAdd />} />
               <Route path="/admin/edit-gallery" element={<GalleryEdit />} />
               <Route path="/admin/add-program" element={<ProgramAdd />} />
               <Route path="/admin/edit-program" element={<ProgramEdit />} />
               {/* error page route*/}
               <Route path="/*" element={<NoPage />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}
