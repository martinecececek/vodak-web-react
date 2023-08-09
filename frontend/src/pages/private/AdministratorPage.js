import React from "react";
import "./Page.css";
import { Link } from "react-router-dom";
const Administrator = () => {
   return (
      <div className="administrator-content">
         <div className="post-admin">
            <h3>Ovaldaci prvky</h3>
            <ul className="post-nav-wrapper">
               <Link to={"/admin/edit-gallery"}>
                  <li className="post-nav-item">
                     <button type="btn" className="admin-btn">
                        Upravit příspěvky v galerii
                     </button>
                  </li>
               </Link>
               <Link to={"/admin/add-gallery"}>
                  <li className="post-nav-item">
                     <button type="btn" className="admin-btn">
                        Přidat příspěvěk do galerie
                     </button>
                  </li>
               </Link>
               <Link to={"/admin/edit-program"}>
                  <li className="post-nav-item">
                     <button type="btn" className="admin-btn">
                        Upravit příspěvky v programu
                     </button>
                  </li>
               </Link>
               <Link to={"/admin/add-program"}>
                  <li className="post-nav-item">
                     <button type="btn" className="admin-btn">
                        Přidat příspěvěk do programu
                     </button>
                  </li>
               </Link>
               <Link to={"/domu"}>
                  <li className="post-nav-item">
                     <button type="buttom" className="logOut-btn">
                        Odhlásit se
                     </button>
                  </li>
               </Link>
            </ul>
         </div>
      </div>
   );
};

export default Administrator;