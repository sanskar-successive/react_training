import React from 'react'
import { Link } from 'react-router-dom'
import ProtectedComponent from './ProtectedComponent'
import withAuth from './withAuth'

const PublicComponent = ({isAuth}) => {
  return (
    <>
        <h3>Hi I am free content</h3>
        {isAuth ? <ProtectedComponent/> : <Link to='/assignment-5/Ques-14/subscribe'>Read More</Link>}
    </>
  )
}

export default withAuth(PublicComponent);