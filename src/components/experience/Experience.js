import React from "react";
import styled from "styled-components/macro";
import "./experience.css";
function Experience() {
  return (
    <Wrapper id="experience-id">
      <div className="section-heading">Experience</div>

      <div className="timeline">
        <ul>
          {companiesData.map((company, index) => {
            return (
              <li key={`timeline_fragment_${index}`}>
                <div className="right_content">
                  <h2>{company.companyName}</h2>
                  <p>
                    {company.description}
                  </p>
                </div>
                <div className="left_content">
                  <h3 className="company-span">{company.span} </h3>
                </div>
              </li>
            );
          })}
          <div style={{ clear: "both" }}></div>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Experience;

const Wrapper = styled.div``;

const companiesData = [
  {
    companyName: "Oodles Technologies Pvt. Ltd.",
    description:
      "I worked as Associate Angular Developer and was responsible for working responsive pages for an ERP solution called oodles dashboard.",
    span: "January 2020",
  },
  {
    companyName: "Radiansys Inc.",
    description:
      "I am working as Frontend Developer. Right now I am honing my react skills here.",
    span: "May 2021",
  },
];
