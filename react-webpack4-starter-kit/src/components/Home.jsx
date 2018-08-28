import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/hello">Hello</Link>
    <hr/>
    <Link to="/world">World</Link>
  </div>
)

export default Home
