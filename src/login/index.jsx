import React, { Component } from 'react';
import clsx from 'clsx';
import { createStyles, withStyles, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        dense: {
            marginTop: theme.spacing(2),
        },
        menu: {
            width: 200,
        },
    }),
);


class Login extends Component {
    constructor(props) {
        super(props)
        this.classes = useStyles
        this.values = {
            name: ''
        }
    }
    handleChange = () => {

    }
    render() {
        const classes = this.props
        return (
            <div className="login">
                <div className="login-box">
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                    />
                    <Button variant="contained" color="primary" className={classes.button}>
                        Login
                    </Button>
                    {/* <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form> */}
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(Login);