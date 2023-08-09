import React, { useState } from "react";
//import datasource
import data from "../../../data/contacts";

import "./contactComponent.css";

const ContactComponent = () => {
   return (
      <div className="content">
         <h2>Kontakty</h2>
         <div className="Adresa">
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Voluptatum voluptatibus tempora dicta, provident impedit tempore
               vero recusandae nulla molestiae at hic nobis blanditiis ipsum
               deserunt optio ratione ex laborum aperiam?
            </p>
         </div>
         <hr />
         <br />
         <div className="contact-info">
            {data.map((data, index) => (
               <div className="contact-box" key={index}>
                  <strong>{data.name}</strong>
                  <br />
                  <a href={data.phone}>{data.phone}</a>
                  <br />
                  <a href={data.email}>{data.email}</a>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ContactComponent;
