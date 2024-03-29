import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

// const BlogPage = () => {
//     return (
//         <Layout pageTitle="My Blog Posts">
//             <p>My cool posts will go in here</p>
//         </Layout>
//     )
// }

// const BlogPage = ({ data }) => {
//   return (
//     <Layout pageTitle="My Blog Posts">
//       <ul>
//         {
//           data.allFile.nodes.map(node => (
//             <li key={node.name}>
//               {node.name}
//             </li>
//           ))
//         }
//       </ul>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query {
//     allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
//       nodes {
//         name
//       }
//     }
//   }
// `


const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        excerpt
      }
    }
  }
`


export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage