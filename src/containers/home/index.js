import React from "react";
import { connect } from "react-redux";
import Grid from "material-ui/Grid";
import Projects from '../../components/Projects'

const Home = ({ projects: { projects } }) => (
  <Grid container spacing={16}>
    <Projects projects={projects} />
  </Grid>
);

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
