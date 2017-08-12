import React from 'react'
import Link from 'gatsby-link'

import Example1 from '../components/Example1'
import Example2 from '../components/Example2'

const IndexPage = () =>
  <div>
    <h1>Grid Exercise</h1>
    <Example1/>
    <Example2/>
    <Link to="/page-2/">Go to page 2</Link>
  </div>

export default IndexPage
