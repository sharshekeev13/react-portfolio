import React from "react";

const Education = () => {
  return (
    <>
      {/* <!-- Education--> */}
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Insitute of Applied Informatics</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Web Development Track</div>
              <p>GPA: 3.23</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">Sep 2021 - Present</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">Educational Complex School Gymnasium №29</h3>
              <div className="subheading mb-3"></div>
              <p>GPA: 3.56</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">August 2010 - May 2021</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
};

export default Education;
