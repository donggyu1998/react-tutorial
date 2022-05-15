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
    UpAndDown,
    TableCrud,
    TodoList
} from "../pages"

const ContainerBox = withStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
        marginTop: 32,
        marginBottom: 32,
        marginLeft: 16,
        marginRight: 16,
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
                    <Route path="/upanddown" element={<UpAndDown/>}></Route>
                    <Route path="/todolist" element={<TodoList/>}></Route>
                    <Route path="/tablecrud" element={<TableCrud/>}></Route>
                </Routes>
            </ContainerBox>
        </>
    )
}

export default Container;