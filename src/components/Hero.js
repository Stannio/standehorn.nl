import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";
import photo from "../res/pf.jpg";

const avatarSize = 128;
const spacing = 16;
const styles = theme => ({
  heroWrapper: {
    height: 300,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundImage: `-webkit-linear-gradient(bottom right,${
      theme.palette.primary[900]
    }, ${theme.palette.primary[400]});`,
    color: "#ffffff"
  },
  avatar: {
    width: avatarSize,
    height: avatarSize
  }
});
const Hero = ({ classes }) => (
  <header
    style={{
      padding: spacing * 0.5
    }}
  >
    <Grid
      className={classes.heroWrapper}
      container
      spacing={spacing}
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <Avatar alt="Stan de Horn" className={classes.avatar} src={photo} />
      </Grid>
      <Grid item>
        <Typography type="headline" align="center" color="inherit">
          Stan de Horn
        </Typography>
        <Typography type="caption" color="accent">
          Scriba - Web developer
        </Typography>
      </Grid>
    </Grid>
  </header>
);

export default withStyles(styles)(Hero);
