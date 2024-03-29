/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    // Query for article nodes to use in creating pages.
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }

            return result;
        })
    )
});


exports.createPages = ({boundActionCreators, graphql}) => {
    const {createPage} = boundActionCreators;

    const getArticles = makeRequest(graphql, `
    {
      allStrapiArticle {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `).then(result => {
        // Create pages for each article.
        result.data.allStrapiArticle.edges.forEach(({node}) => {
            createPage({
                path: `/${node.slug}`,
                component: path.resolve(`src/templates/articlePage.js`),
                context: {
                    id: node.id,
                },
            })
        })
    });


    return Promise.all([
        getArticles,
    ])
};