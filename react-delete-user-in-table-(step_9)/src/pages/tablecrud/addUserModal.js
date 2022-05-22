import React, {
    useState 
} from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Button,
    DialogActions,
    TextField,
    Box,
    Typography,
} from "@material-ui/core";

const AddUserModal = ({
    addUser,
    userFormState,
    dlgOpenAddUserModal, 
    closeAddUserModal
}) => {

    const [user, setUser] = useState(userFormState);

    const handleUserInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value});
    }

    const handleSendUserData = (e) => {
        e.preventDefault();

        if (!user.username ||
            !user.password || 
            !user.age ||
            !user.number) 
            return ;

        addUser(user);
        setUser(userFormState);
    }
    return (
        <>
        <Dialog
            open={dlgOpenAddUserModal}
            onClose={closeAddUserModal}>
            <DialogTitle>
                {"AddUser Modal"}
            </DialogTitle>
            
            <DialogContent>
                <DialogContentText>
                    
                        <Box
                            style={{
                                display: 'flex'
                            }}>
                            <Typography
                                variant="subtitle1" 
                                component="div">
                                    UserName :
                            </Typography>
                                <TextField
                                    placeholder='donggyu'
                                    type="text"
                                    name="username"
                                    value={user.username}
                                    onChange={handleUserInputChange}
                                    style={{
                                        marginLeft: 8
                                    }}>

                                </TextField>
                        </Box>
                        
                        <Box
                            style={{
                                display: 'flex'
                            }}>
                            <Typography
                                variant="subtitle1" 
                                component="div">
                                    Password :
                            </Typography>
                                <TextField
                                    placeholder='0000'
                                    type="text"
                                    name="password"
                                    value={user.password}
                                    onChange={handleUserInputChange}
                                    style={{
                                        marginLeft: 8
                                    }}>

                                </TextField>
                        </Box>

                        <Box
                            style={{
                                display: 'flex'
                            }}>
                            <Typography
                                variant="subtitle1" 
                                component="div">
                                    Age :
                            </Typography>
                                <TextField
                                    placeholder='25'
                                    type="text"
                                    name="age"
                                    value={user.age}
                                    onChange={handleUserInputChange}
                                    style={{
                                        marginLeft: 8
                                    }}>

                                </TextField>
                        </Box>
                        <Box
                            style={{
                                display: 'flex'
                            }}>
                            <Typography
                                variant="subtitle1" 
                                component="div">
                                    Number :
                            </Typography>
                                <TextField
                                    placeholder='01011112222'
                                    name="number"
                                    value={user.number}
                                    onChange={handleUserInputChange}
                                    style={{
                                        marginLeft: 8
                                    }}>

                                </TextField>
                        </Box>

                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={closeAddUserModal}>Cancle</Button>
                <Button onClick={(e) => handleSendUserData(e)}>Add</Button>
            </DialogActions>
        </Dialog>
      </>
    )
}

export default AddUserModal;