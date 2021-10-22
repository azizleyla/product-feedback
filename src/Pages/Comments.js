import React from 'react'
import Feedback from '../components/Feedback'
import { StatusBtn } from "../components/Button"
import styled from 'styled-components'
import Comment from "../components/Comments/Comment"
import Replies from "../components/Comments/Replies"

const Comments = () => {
    return (
        <>
            <Comment />
            <Replies />

        </>
    )
}
const AppRequestsContainer = styled.div`
  width: 75rem;
  margin: 0 auto;
  
`
export default Comments

 