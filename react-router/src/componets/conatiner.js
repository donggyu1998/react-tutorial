import React from "react";
import {
    Box,
    withStyles
} from "@material-ui/core";

import {
    Route,
    Routes
} from "react-router-dom";

import {
    Main,
    Calculator,
    TodoList
} from "../pages"

const ContainerBox = withStyles(() => ({
    root: {
        marginTop: 32,
        marginRight: 8,
        marginLeft: 8,
        background: '#fff',
        overflow: 'hidden'        
    }
}))(Box);

const Container = () => {
    return (
        <>
            <ContainerBox>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/calculator" element={<Calculator/>}></Route>
                    <Route path="/todolist" element={<TodoList/>}></Route>
                </Routes>
            </ContainerBox>
        </>
    )
}

export default Container;