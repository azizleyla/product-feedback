import styled from "styled-components"
import React from 'react'
import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/Button";

const StyledLink = styled(Link)`
color:#fff;
font-size: 20px;
`

const PageHeader = styled.header`
  background: #373f68;
  border-radius: 10px;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.333333px;
    color: #ffffff;
  }

  .back-icon {
    margin-right: 1rem;
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 3rem;
  margin-top: 5rem;
`;
const SingleCard = styled.div`
  padding: 3.2rem;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 5rem;
  p {
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.3rem;
    color: #647196;
    text-transform: capitalize;
    margin-bottom: 1.5rem;
  }
  h3 {
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2.6rem;
    letter-spacing: -0.25px;
    color: #3a4374;
  }
  button {
    margin-bottom: 1.5rem;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .app__request-upvotes{
    border-radius: 1rem;
    width: 40px;
    height: 53px;
    background-color: rgb(242, 244, 255);
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-self: flex-start;
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 1.9rem;
    letter-spacing: -0.180556px;
    color: var(--color-dark-blue);
    margin-right: 4rem;
    border: none;
  }
  
  .app__request-comment {
    display: flex;
    align-items: center;
    margin-left: auto;
    span {
      font-weight: bold;
      font-size: 16px;
      line-height: 23px;
      text-align: center;
      letter-spacing: -0.222222px;
      color: var(--color-dark-blue);
      margin-left: 0.8rem;
    }
  }
`;

const RoadMap = () => {
  return (
    <div>
      <PageHeader className="container">
        <StyledLink to="/">
          Go back

        </StyledLink>
        <PrimaryButton>Add Feedback</PrimaryButton>
      </PageHeader>
      <CardsContainer className="container">
        <SingleCard
          className="single-card"
        >
          <p>Planned</p>
          <h3>More comprehsive reports</h3>
          <p>It would be great to see a more detailed breakdown of solutions.</p>
          <button className="status-btn"></button>
          <div className="card-footer">
            <div className="app__request-upvotes">
              123
            </div>
            <div className="app__request-comment">
              <img alt="" />
              <span className="comment">
                10
              </span>
            </div>
          </div>
        </SingleCard>
        <SingleCard
          className="single-card"
        >
          <p>Planned</p>
          <h3>More comprehsive reports</h3>
          <p>It would be great to see a more detailed breakdown of solutions.</p>
          <button className="status-btn"></button>
          <div className="card-footer">
            <div className="app__request-upvotes">
              123
            </div>
            <div className="app__request-comment">
              <img alt="" />
              <span className="comment">
                10
              </span>
            </div>
          </div>
        </SingleCard>
      </CardsContainer>




    </div >
  )
}

export default RoadMap
