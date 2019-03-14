import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Header from './header';

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});


const Layout = ({classes, children, pageTitle}) => (
    <React.Fragment>
        <CssBaseline/>
        <main>
            <Header siteTitle={pageTitle ? pageTitle : "Mój blog"}/>
            {children}
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Created
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Gatsby.js and Strapi.io
            </Typography>
        </footer>
        {/* End footer */}
    </React.Fragment>
);


Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);