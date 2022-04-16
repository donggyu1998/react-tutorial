import React from "react";
import {
    Box,
    Button,
    withStyles
} from "@material-ui/core";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalculateIcon from "@mui/icons-material/Calculate";
import ListAltIcon from '@mui/icons-material/ListAlt';

import { 
    useNavigate
} from "react-router-dom";

const HeaderBar = withStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'right',
        height: 40,
    }
}))(Box);

const HeaderNavBtn = withStyles(() => ({
    root: {
        textTransform: 'none',
        borderRadius: 8,
        marginRight: 8,
        color: "#000000",
        backgroundColor: '#ffffff',
    }
}))(Button);

const Header = () => {

    const navigate = useNavigate();

    const handleNav = (path) => {
        return navigate(path);
    }

    return (
        <>
            <HeaderBar>
                <HeaderNavBtn
                    variant="contained" 
                    startIcon={<DashboardIcon />}
                    size="Medium"
                    onClick={() => handleNav('/')}>
                    Main
                </HeaderNavBtn>
                <HeaderNavBtn
                    variant="contained" 
                    startIcon={<CalculateIcon />}
                    size="Medium"
                    onClick={() => handleNav('/calculator')}>
                    Calculator
                </HeaderNavBtn>
                <HeaderNavBtn
                    variant="contained" 
                    startIcon={<ListAltIcon />}
                    size="Medium"
                    onClick={() => handleNav('/todolist')}>
                    TodoList
                </HeaderNavBtn>
            </HeaderBar>
        </>
    );
}

export default Header;
