import React from "react";

const Awards = () => {
  return (
    <>
      {/* <!-- Awards--> */}
      <section className="resume-section" id="awards">
        <div className="resume-section-content">
          <h2 className="mb-5">Awards & Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li">
                <i className="fas fa-trophy text-warning"></i>
              </span>
              2<sup>nd</sup>
              Place - INAI.kg - Course-Work
              2022
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-trophy text-warning"></i>
              </span>
              1<sup>st</sup>
              Place - School #29 - Math Olympiad
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Awards;
