import React from 'react'
import Link from 'gatsby-link'

import Example1 from '../components/Example1'

const IndexPage = () =>
  <div>
    <h1>Grid Exercise</h1>
    <Example1/>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>

export default IndexPage
