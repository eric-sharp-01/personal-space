import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Axios from 'axios';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const history = useHistory();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  const go = (path) => {
    setIsDrawerOpen(false);
    history.push(path);
  }


  const logout = async () => {
    try {
      await Axios.get(`/api/logout`);
      setIsDrawerOpen(false);
      history.replace('/login');
    }catch{
      setIsDrawerOpen(false);
      history.replace('/login');
    }
  }

  return (
    <div className="navbar-block">
        <Button onClick={toggleDrawer}>
            <MenuIcon />
        </Button>
        <SwipeableDrawer anchor={'left'} open={isDrawerOpen} onOpen={toggleDrawer} onClose={toggleDrawer} className="drawer">
            <List className="nav-menu">
                <ListItem button onClick={() => go('/')}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                </ListItem>
                <ListItem button onClick={() => go('/resume')}>
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Resume"} />
                </ListItem>
                <ListItem button onClick={logout}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Logout"} />
                </ListItem>
            </List>
        </SwipeableDrawer>
    </div>);
}

// wrapping the component within the connect HOC and calling the default function directly
export default withRouter(Navbar);