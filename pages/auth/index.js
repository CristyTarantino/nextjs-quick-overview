import React from 'react'
import Router from 'next/router';
import User from '../../components/User';

const AuthIndexPage = () => {
  return (
    <div>
      <h1>The Auth Page</h1>
      <button onClick={() => Router.push('/')}>Go Home</button>
      <User age={33} name={'Cristina'} />
      <style jsx>{`
        div {
          padding: 20px;
          text-align: center;
        }
      `}
      </style>
    </div>
  )
}

export default AuthIndexPage
