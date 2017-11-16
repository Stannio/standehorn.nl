import React from "react";
import { Route } from "react-router-dom";
import Home from "../home";
import theme from "../../theme";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import { MuiThemeProvider, withStyles } from "material-ui/styles";

const times = 2;

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * times,
    background: theme.palette.background.default,
    height: `calc(100% - ${theme.spacing.unit * times * 2}px)`
  },
  fullHeight: {
    height: "100%"
  },
  heroWrapper: {
    height: 300,
    background: theme.palette.primary[500]
  }
});

const App = ({ classes }) => (
  <MuiThemeProvider theme={theme}>
    <div className={classes.fullHeight}>
      <Hero />
      <main className={classes.content}>
        <Skills />
        <Route exact path="/" component={Home} />
      </main>
    </div>
  </MuiThemeProvider>
);

export default withStyles(styles)(App);
