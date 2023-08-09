import React from "react";
// import css
import "./new.css";

const newFooter = () => {
   return (
      <div className="page-footer">
         <div className="col-1">
            <h3>Užitečné okazy</h3>
            <a href="">Dům dětí a mládeže</a>
            <a href="">ATOM</a>
            <a href="">Rajče.cz</a>
         </div>
         <div className="col-2">
            <h3>Novinky</h3>
            <form action="">
               <input type="email" placeholder="zadejte váš email" required />
               <br />
               <button type="submit">Odebírat</button>
            </form>
         </div>
         <div className="col-3">
            <h3>Adresa</h3>
            <p>
               Pražská 123/12
               <br />
               Ústí nad Labem, Vaňov
            </p>
         </div>
      </div>
   );
};
export default newFooter;
