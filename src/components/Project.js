import React from "react";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

const Project = ({ project }) => (
  <Card>
    <CardMedia />
    <CardContent>
      <Typography type="title">{project.title}</Typography>
      <Typography>{project.description}</Typography>
    </CardContent>
  </Card>
);

export default Project;
