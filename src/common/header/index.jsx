import React, { Component } from 'react';
import logo from './img_avatar.png'
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


const useStyles = makeStyles((theme) =>
    createStyles({
        typography: {
            padding: theme.spacing(2),
            height: 500
        },
    }),
);

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
        };
    }

    handleClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        })
    }

    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    }

    render() {
        const { classes } = this.props
        const open = Boolean(this.state.anchorEl);
        const id = open ? 'simple-popover' : undefined;
        return (
            <div className="mainHeader">
                <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={this.props.open.bind(this)}>&#9776;</span>
                <div className="userInfo">
                    <img src={logo} alt="user" style={{ width: "50px" }} onClick={this.handleClick} />
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={this.state.anchorEl}
                        onBlur={this.handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <div className={classes.root}>
                            <List component="nav" aria-label="main mailbox folders">
                                <ListItem button>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Inbox" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <DraftsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Drafts" />
                                </ListItem>
                            </List>
                            <Divider />
                            <List component="nav" aria-label="secondary mailbox folders">
                                <ListItem button>
                                    <ListItemText primary="Not Abshir? Logout" />
                                </ListItem>
                                {/* <ListItemLink href="#simple-list">
                                    <ListItemText primary="Spam" />
                                </ListItemLink> */}
                            </List>
                        </div>
                    </Popover>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(Header);