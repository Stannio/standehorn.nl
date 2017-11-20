import React from "react";
import Grid from "material-ui/Grid";
import Project from "./Project";

const Projects = ({ projects }) =>
  projects.map((project, key) => (
    <Grid item xs={12} sm={12} md={4}>
      <Project project={project} />
    </Grid>
  ));

export default Projects;
