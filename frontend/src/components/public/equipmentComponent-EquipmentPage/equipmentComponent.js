import React from "react";
// import css
import "./equipmentComponent.css"
const CanoeRidingInfo = () => {
   return (
      <div>
         <h2 className="main-title">Co s sebou?</h2>
         <section className="article">
            <h3 className="sub-title">Vodácké akce:</h3>
            <p className="equipment-p">
               pádlo, vesta, přilba, věci a vybavení na vodu, spací pytel,
               karimatka, jídelní miska – ešus, hrnek (umělohmotný nebo
               plechový), lžíce, zavírací nůž, otvírák na konzervy, baterka,
               lahev nebo termoska (celokovová!), hygienické potřeby, ručník,
               kapesníky, pláštěnka, čepice, krém na opalování. veškeré vodácké
               vybavení je k zapůjčení
            </p>
         </section>
         <section className="article">
            <h3 className="sub-title">Pěší turistika:</h3>
            <p className="equipment-p">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
               soluta velit in consequatur corrupti iusto eius iure modi? Omnis
               aut, exercitationem repellat earum animi eos iure placeat
               adipisci consequatur neque?
            </p>
         </section>
         <section className="article">
            <h3 className="sub-title">Běžky:</h3>
            <p className="equipment-p">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
               debitis ipsam earum itaque nam, aspernatur, ea hic deserunt magni
               necessitatibus reprehenderit nulla totam laudantium. Illo eaque
               accusamus culpa esse provident.
            </p>
         </section>
      </div>
   );
};

export default CanoeRidingInfo;
