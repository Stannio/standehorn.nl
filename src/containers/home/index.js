import React from "react";
import { connect } from "react-redux";
import Grid from "material-ui/Grid";
import Card, { CardContent } from "material-ui/Card";

const Home = () => (
  <Grid container spacing={16}>
    {[0, 1, 3, 4, 5].map((item, index) => (
      <Grid item xs={12} sm={12} md={4} key={index}>
        <Card>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            dignissimos est illum laudantium officia, perspiciatis quaerat quod
            repellat tempore. Accusamus alias aspernatur dolorum eaque
            laboriosam nulla pariatur ratione similique tenetur.
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
