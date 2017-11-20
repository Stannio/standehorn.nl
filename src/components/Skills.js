import React from "react";
import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Grid from "material-ui/Grid";
import Icon from "material-ui/Icon";
import { connect } from "react-redux";

const styles = theme => ({
  list: {
    background: theme.palette.shades.light.background.paper,
    boxShadow: theme.shadows[2],
    borderRadius: 2
  },
  boldText: {
    fontWeight: 800,
    fontSize: 18
  }
});
const Skills = ({ classes, skills: { skills } }) => (
  <Grid container>
    <Grid item xs={12} sm={12}>
      <List
        className={classes.list}
        subheader={
          <ListItem inset>
            <ListItemIcon>
              <Icon>grade</Icon>
            </ListItemIcon>
            <ListItemText
              classes={{
                text: classes.boldText
              }}
              inset
              primary="Skills"
            />
          </ListItem>
        }
      >
        {skills.map((item, key) => (
          <ListItem
            key={key}
            button
            component="a"
            target="_blank"
            href={item.vendorLink}
          >
            <ListItemIcon>
              <Icon>check</Icon>
            </ListItemIcon>
            <ListItemText inset primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Grid>
  </Grid>
);

const mapStateToProps = state => ({
  skills: state.skills
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Skills)
);
