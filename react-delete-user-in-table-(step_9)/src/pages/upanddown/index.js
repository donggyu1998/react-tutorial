import React, {
    useState,
    useEffect
} from "react";

import {
    Box,
    Button,
    Typography,
    withStyles
} from "@material-ui/core";

const UpAndDownBox = withStyles(() => ({
    root: {
        display: 'grid',
        placeContent: 'center',
        textAlign: 'center',
    }
}))(Box);

const UpAndDownTitle = withStyles(() => ({
    root: {
        marginBottom: 8
    }
}))(Typography);

const UpAndDownNumberTextView = withStyles(() => ({
    root: {
        fontWeight: 700,
        marginBottom: 8
    }
}))(Typography);

const UpAndDownGetNumberBtn = withStyles(() => ({
    root: {
        width: 100,
        height: 50,
        marginTop: 8,
        marginRight: 8,
        textTransform: 'none',
        backgroundColor: '#ffffff'
    }
}))(Button);

const UpAndDownBtn = withStyles(() => ({
    root: {
        width: 100,
        height: 50,
        marginTop: 8,
        marginRight: 8,
        textTransform: 'none',
        backgroundColor: '#ffffff'
    }
}))(Button);

export default function UpAndDown() {

    var randomNumber = Math.floor(Math.random() * 15) + 1;
    const [value, setValue] = useState(0);
    const [curNumber, setCurNumber] = useState(0);

    useEffect(() => {
        setValue(randomNumber);
    }, [value]);

    return (
        <>
            <UpAndDownBox>
                <UpAndDownTitle
                    variant="h5" 
                    component="div">
                        {value === curNumber ? 'Congratulations !' : 'Up & Down'}
                </UpAndDownTitle>
                <Box>
                    <UpAndDownBtn
                        onClick={() => setCurNumber(curNumber+1)}>
                        Up
                    </UpAndDownBtn>
                    <UpAndDownGetNumberBtn
                        onClick={() => setValue(randomNumber)}>
                        GetNumber
                    </UpAndDownGetNumberBtn>
                    <UpAndDownBtn
                        onClick={() => setCurNumber(curNumber - 1)}>
                        Down
                    </UpAndDownBtn>
                </Box>
                <Box
                    style={{
                        marginTop: 8
                    }}>
                    <UpAndDownNumberTextView
                        variant="subtitle1" 
                        component="div">
                        Current number : {curNumber}
                    </UpAndDownNumberTextView>
                    <UpAndDownNumberTextView
                        variant="subtitle1" 
                        component="div">
                        The number you have to get right : {value}
                    </UpAndDownNumberTextView>
                </Box>
            </UpAndDownBox>
        </>
    )
}