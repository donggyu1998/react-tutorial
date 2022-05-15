import React, {
    useState
} from "react";

import {
    Box,
    Button,
    TextField,
    Typography,
    IconButton,
    withStyles
} from "@material-ui/core";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoListBox = withStyles(() => ({
    root: {
        display: 'grid',
        placeContent: 'center',
        textAlign: 'center',
    }
}))(Box);

const TodoListInnerBox = withStyles(() => ({
    root: {
        width: '480px',
        height: '560px',
        marginTop: 16,
        alignItems: 'center',
        borderRadius: '8px',
        backgroundColor: '#EEF8FA',
        border: '1px solid #EEF8FA',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    }
}))(Box);

const TodoListInputField = withStyles(() => ({
    root: {
        width: 240,
        marginTop: 32,
        marginLeft: 8,
        borderRadius: 8,
        backgroundColor: '#ffffff',
    }
}))(TextField);

const TodoListTitle = withStyles(() => ({
    root: {
        marginBottom: 8
    }
}))(Typography);

export default function TodoList() {
    
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleAddTodo = () => {
        if (inputValue === "") {
            console.log("Pls, Enter Todo.")
        } else {
            console.log("Added Todo.")
            setTodoList([...todoList, inputValue])
        }
        setInputValue("")
    }

    const handleClearTodoList = () => {
        setTodoList([]);
        console.log("Clear TodoList.")
    }

    const handleDelTodo = (id) => {
        console.log("Delete TodoList.")
        const deleteTodo = todoList.filter((ele, inval) => {
            return inval !== id
        })
        setTodoList(deleteTodo)
    }

    return (
        <>
            <TodoListBox>
                <TodoListTitle
                    variant="h5" 
                    component="div">
                        TodoList
                </TodoListTitle>
                <Typography
                    variant="subtitle1" 
                    component="div">
                        Pls, check the console log for this logic.
                </Typography>
                
                <TodoListInnerBox>
                    <TodoListInputField 
                        label="Todo Input" 
                        variant="outlined"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button 
                        style={{
                            width: 140,
                            height: 55,
                            marginLeft: 8,
                            marginTop: 32,
                            backgroundColor: '#ffffff'
                        }}
                        variant="contained" 
                        endIcon={<AddToPhotosIcon/>}
                        onClick={handleAddTodo}>
                        Add Todo
                    </Button>
                    <Button 
                        style={{
                            width: 60,
                            height: 55,
                            marginLeft: 8,
                            marginRight: 8,
                            marginTop: 32,
                            backgroundColor: '#ffffff'
                        }}
                        variant="contained"
                        onClick={handleClearTodoList}>
                        Clear
                    </Button>
                    <Box
                        style={{
                            marginTop: '32px',
                            textTransform: 'uppercase'
                        }}>
                        {todoList.map((v, inval) => {
                            return ( 
                                <Box
                                    key={inval}>
                                    {v}
                                    <IconButton
                                        style={{
                                            color: '#000'
                                        }}
                                        component="span"
                                        onClick={() => handleDelTodo(inval)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </Box>
                            )
                        })}
                    </Box>
                </TodoListInnerBox>
            </TodoListBox>
        </>
    )
}