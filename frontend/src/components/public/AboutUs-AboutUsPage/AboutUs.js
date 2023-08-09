import React from "react";
import "./AboutUs.css"; // Import the CSS file for styling

const AboutUs = () => {
   return (
      <section className="about-us">
         <div className="container">
            <h2>About Us</h2>
            <p>
               Welcome to our website! We are a passionate and dedicated team
               working together to provide you with the best products/services
               in our industry.
            </p>
            <p>Our mission is to [Briefly describe your mission or purpose].</p>
            <p>Here are some key points that define us:</p>
            <ul>
               <li>
                  Quality: We strive to maintain the highest standards in
                  everything we do.
               </li>
               <li>
                  Customer-centric: Your satisfaction is our top priority, and
                  we are always here to assist you.
               </li>
               <li>
                  Innovation: We embrace creativity and continuously seek better
                  ways to serve you.
               </li>
               <li>
                  Community: We believe in giving back and supporting the
                  communities we operate in.
               </li>
            </ul>
            <p>
               Feel free to explore our website and discover what we have to
               offer. If you have any questions or suggestions, don't hesitate
               to reach out to us.
            </p>
         </div>
      </section>
   );
};

export default AboutUs;
