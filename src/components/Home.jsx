import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

export default class Home extends React.Component {

    openResume = () =>{
        this.props.history.push("/resume");
    }

    render(){
        return <div className="home">
            <Paper elevation={3} >
                <div className="content">
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <AccountBoxIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Name: Yu Pan"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <PhoneAndroidIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Phone: 0433995186"
                            />
                        </ListItem>
                    </List>
                </div>
                <div className="buttons">
                    <Button variant="contained" color="primary" onClick={this.openResume}>
                        Resume
                    </Button>
                </div>
            </Paper>
        </div>;
    }

}