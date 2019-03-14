import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import ArticleListItem from "../components/articleListItem";

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        padding: `${theme.spacing.unit * 8}px 0`,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },

    },
});


const IndexPage = ({classes, data}) => (
    <Layout>
        <SEO title="hhhhome" keywords={[`gatsby`, `application`, `react`]}/>
        <div className={classes.layout}>
            <Grid container spacing={40}>
                {data.allStrapiArticle.edges.map(({node}) => <ArticleListItem key={node.id} {...node}/>)}
            </Grid>
        </div>
    </Layout>
)

export const query = graphql`
    query {
        allStrapiArticle{
            edges{
                node{
                    id
                    title
                    date
                    slug
                    lead
                    author{
                        username
                    }
                    photo {
                        childImageSharp {
                            original {
                                src
                            }
                        }
                    }
                }
            }
        }
    }
`

export default withStyles(styles)(IndexPage);

