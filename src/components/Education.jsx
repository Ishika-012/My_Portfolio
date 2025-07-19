import "./Experience.css";
import React, { useEffect, useRef, useState } from "react";
import '../App.css'

const Experience = () => {
  const leftRef = useRef([]);
  const rightRef = useRef([]);
  const ishikaEducation = [
    { degree: "BCA", institution: "VIPS", year: "2022 - 2025", percentage: "92%" },
    { degree: "12th Grade (CBSE)", institution: "ABC Public School", year: "2020 - 2022", percentage: "91%" },
    { degree: "10th Grade (CBSE)", institution: "ABC Public School", year: "2018 - 2020", percentage: "93%" },
  ];

  const krishikaEducation = [
    { degree: "BCA", institution: "VIPS", year: "2022 - 2025", percentage: "88%" },
    { degree: "12th Grade (CBSE)", institution: "St. Joseph's Sr. Sec. School", year: "2020 - 2022", percentage: "94.4%" },
    { degree: "10th Grade (CBSE)", institution: "St. Joseph's Sr. Sec. School", year: "2018 - 2020", percentage: "93.8%" },
  ];

  const [leftVisible, setLeftVisible] = useState(new Array(ishikaEducation.length).fill(false));
  const [rightVisible, setRightVisible] = useState(new Array(krishikaEducation.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index"));
          const side = entry.target.getAttribute("data-side");

          if (side === "left") {
            setLeftVisible((prev) => {
              const updated = [...prev];
              updated[index] = entry.isIntersecting;
              return updated;
            });
          } else {
            setRightVisible((prev) => {
              const updated = [...prev];
              updated[index] = entry.isIntersecting;
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    leftRef.current.forEach((el) => el && observer.observe(el));
    rightRef.current.forEach((el) => el && observer.observe(el));

    return () => {
      leftRef.current.forEach((el) => el && observer.unobserve(el));
      rightRef.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <div className="edu-section" id='experience'>
      <h2 className="edu-heading">Educational Qualification</h2>
      <div className="timeline-grid">
        {/* Ishika */}
        <div className="timeline-column">
          <h3 className="person-name">Ishika Arora</h3>
          {ishikaEducation.map((item, index) => (
            <div
              className={`timeline-item ${leftVisible[index] ? "fade-in" : ""}`}
              key={index}
              data-index={index}
              data-side="left"
              ref={(el) => (leftRef.current[index] = el)}
            >
              <div className="timeline-content">
                <h4>{item.degree}</h4>
                <p>{item.institution}</p>
                <span>{item.year}</span>
                <span className="percentage">{item.percentage}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="timeline-line" />

        {/* Krishika */}
        <div className="timeline-column">
          <h3 className="person-name">Krishika Khandelwal</h3>
          {krishikaEducation.map((item, index) => (
            <div
              className={`timeline-item ${rightVisible[index] ? "fade-in" : ""}`}
              key={index}
              data-index={index}
              data-side="right"
              ref={(el) => (rightRef.current[index] = el)}
            >
              <div className="timeline-content">
                <h4>{item.degree}</h4>
                <p>{item.institution}</p>
                <span>{item.year}</span>
                <span className="percentage">{item.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
