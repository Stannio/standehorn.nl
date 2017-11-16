import React from "react";
import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Grid from "material-ui/Grid";
import Icon from "material-ui/Icon";
import { Link } from "react-router-dom";

const styles = theme => ({
  list: {
    background: theme.palette.shades.light.background.paper,
    boxShadow: theme.shadows[2],
    borderRadius: 2
  }
});
const Skills = ({ classes }) => (
  <Grid container>
    <Grid item xs={12} sm={12}>
      <List
        className={classes.list}
        subheader={
          <ListItem inset>
            <ListItemIcon>
              <Icon>star</Icon>
            </ListItemIcon>
            <ListItemText inset primary="Skills" />
          </ListItem>
        }
      >
        {[0, 1, 3, 4, 5].map((item, key) => (
          <ListItem key={key} button component={Link} to={item}>
            <ListItemText inset primary="React" />
          </ListItem>
        ))}
      </List>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Skills);
