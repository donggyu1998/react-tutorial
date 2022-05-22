import React, {
    useState
} from "react";

import {
    DefaultContainerBox,
    DefaultContainerInnerBox,
    TitleTypography
} from "../../styles/box"

import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button as MUIButton,
    withStyles,
    Checkbox,
} from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';

import AddUserModal from "./addUserModal";

const Button = withStyles(() => ({
    root: {
        width: 120,
        height: 40,
        borderRadius: 8,
        marginRight: 8,
        textTransform: 'none',
        backgroundColor: '#ffffff'
    }
}))(MUIButton);

const CustomTableRow = withStyles(() => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: "#f0f0f0"
        },
        "&:last-child td, &:last-child th": {
            border: 0
        }
    }
}))(TableRow);

export default function TableCrud() {
    
    const userFormState = { 
        id: 0,
        username: "",
        password: "",
        age: "",
        number: ""
    }
    
    const [dlgOpenAddUserModal, setDlgOpenAddUserModal] = useState(false);
    const openAddUserModal = () => {
        setDlgOpenAddUserModal(true);
    }
    const closeAddUserModal = () => { 
        setDlgOpenAddUserModal(false);
    }

    const [users, setUsers] = useState([]);
    const addUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user]);
        setDlgOpenAddUserModal(false);
    }

    const deleteUser = () => {
        if (checkedUsers.length === 0) {
            console.log("pls, user check")
        } else {
            console.log(checkedUsers)
            setUsers(users.filter(n => users.includes(n) === checkedUsers))
            console.log(users)
        }
    }

    const [checkedUsers, setCheckedUsers] = useState([]);
    const onChangeCheckedUsers = (checked, id) => {
        if (checked) {
            setCheckedUsers([...checkedUsers, id]);
        } else {
            setCheckedUsers(checkedUsers.filter((el) => el !== id));
        }
    }

    const onChangeCheckAll = (checked) => {
        if (checked) {
            const checkData = [];
            users.forEach((user) => checkData.push(user.id));
            setCheckedUsers(checkData);
        } else {
            setCheckedUsers([]);
        }
    }

    return (
        <>
            <DefaultContainerBox>
                <TitleTypography
                    variant="h5" 
                    component="div">
                        TableCrud
                </TitleTypography>
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={openAddUserModal}
                        size="Medium">
                        AddUser
                    </Button>
                    <AddUserModal
                        addUser={addUser}
                        userFormState={userFormState}
                        dlgOpenAddUserModal={dlgOpenAddUserModal}
                        closeAddUserModal={closeAddUserModal}/>

                    <Button
                        variant="contained"
                        onClick={deleteUser}
                        startIcon={<AddIcon />}
                        size="Medium">
                        DeleteUser
                    </Button>
                </Box>
                
                <DefaultContainerInnerBox
                    style={{
                        width: 680,
                    }}>
                    <Table>
                        <TableContainer
                            style={{
                                backgroundColor: '#fff',
                            }}>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            width="32">
                                            <Checkbox
                                                type="checkbox"
                                                onChange={(e) => onChangeCheckAll(e.target.checked)}
                                                checked={users.length === 0 ? false :
                                                        checkedUsers.length === users.length ? true : false}
                                                style={{
                                                    color: "#5c5c5c",
                                                }}>
                                            </Checkbox>
                                        </TableCell>
                                        <TableCell>User</TableCell>
                                        <TableCell>Password</TableCell>
                                        <TableCell>Age</TableCell>
                                        <TableCell>Number</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {users.length > 0 ? ( 
                                        users.map(user => (
                                            <CustomTableRow key={user.id}>
                                                <TableCell
                                                    width="32">
                                                    <Checkbox
                                                        type="checkbox"
                                                        onChange={(e) => onChangeCheckedUsers(e.currentTarget.checked, user.id)}
                                                        checked={checkedUsers.includes(user.id) ? true : false}
                                                        style={{
                                                            color: "#5c5c5c",
                                                        }}>
                                                    </Checkbox>
                                                </TableCell>
                                                <TableCell>
                                                    {user.username}
                                                </TableCell>
                                                <TableCell>
                                                    {user.password}
                                                </TableCell>
                                                <TableCell>
                                                    {user.age}
                                                </TableCell>
                                                <TableCell>
                                                    {user.number}
                                                </TableCell>
                                            </CustomTableRow>
                                        ))
                                    ) : (
                                        "user data is null"
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Table>
                
                </DefaultContainerInnerBox>
            </DefaultContainerBox>
            
        </>
    )
}