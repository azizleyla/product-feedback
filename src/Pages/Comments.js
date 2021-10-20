import React from 'react'
import Feedback from '../components/Feedback'
import { StatusBtn } from "../components/Button"
import styled from '@emotion/styled'
import Comment from "../components/"
const Comments = () => {
    return (
        <>
    

        </>
    )
}
const AppRequestsContainer = styled.div`
  width: 75rem;
  margin: 0 auto;
  
`
export default Comments
const AppRequest = styled.div`
  background-color: #ffffff;
  padding: 2.8rem 3.2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  .app__requests{
      display: flex;
  }
  .app__request-upvotes {
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
    img {
      margin-bottom: 0.8rem;
      cursor: pointer;
    }
  }
  .app__request-upvotes.clicked {
   background-color: #4661E6;
   color:#fff;
  }
  .app__request-details {
    h3 {
      font-size: 1.8rem;
      line-height: 2.6rem;
      letter-spacing: -0.25px;
      font-weight: bold;
      color: var(--color-veyr-dark-blue);
    }
    p {
      font-weight: normal;
      font-size: 16px;
      line-height: 23px;
      color: var(--color-dark-gery);
      margin: 0.4rem 0 1.2rem 0;
    }
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
