import React, {
    useState
} from "react";

import {
    Box,
    Button,
    TextField,
    Typography,
    withStyles
} from "@material-ui/core";

const CalculatorBox = withStyles(() => ({
    root: {
        display: 'grid',
        placeContent: 'center',
        textAlign: 'center',
    }
}))(Box);

const CalculatorNumberBtn = withStyles(() => ({
    root: {
        width: 80,
        height: 50,
        marginTop: 8,
        marginRight: 8,
        textTransform: 'none',
        backgroundColor: '#ffffff'
    }
}))(Button);

const CalculatorField = withStyles(() => ({
    root: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        marginRight: 8,
        marginBottom: 8,
        textAlign: "center"
    }
}))(TextField);

const CalculatorTitle = withStyles(() => ({
    root: {
        fontWeight: 700,
        marginBottom: 8
    }
}))(Typography);

export default function Calculator() {

    const [result, setResult] = useState('');

    const handleClick = (val) => {
        setResult(result.concat(val))
    }

    const handleClear = () => {
        setResult('');
    }

    const handleClickResult = () => {
        try {
            setResult(eval(result).toString());
        } catch (err) {
            setResult(("Syntax Error."))
        }
    }
    return (
        <>
            <CalculatorBox>
                <CalculatorTitle
                    variant="h5" 
                    component="div">
                        Calculator
                </CalculatorTitle>
                <form>
                    <CalculatorField
                        placeholder="0"
                        value={result}
                        inputProps={{
                        style: { 
                            marginRight: 8,
                            fontSize: 24,
                            textAlign: "right" 
                            }
                        }}
                        InputProps={{
                        disableUnderline: true,
                        }}>
                    </CalculatorField>
                </form>
                <Box>
                    <CalculatorNumberBtn
                        onClick={() => handleClick('7')}>7</CalculatorNumberBtn>
                    <CalculatorNumberBtn
                        onClick={() => handleClick('8')}>8</CalculatorNumberBtn>
                    <CalculatorNumberBtn
                        onClick={() => handleClick('9')}>9</CalculatorNumberBtn>
                    <CalculatorNumberBtn
                        onClick={handleClear}>Clear</CalculatorNumberBtn>
                </Box>
                <Box>
                    <CalculatorNumberBtn
                        onClick={() => handleClick('4')}>4</CalculatorNumberBtn>
                    <CalculatorNumberBtn
                        onClick={() => handleClick('5')}>5</CalculatorNumberBtn>
                    <CalculatorNumberBtn
                        onClick={() => handleClick('6')}>6</CalculatorNumberBtn>
                    <CalculatorNumberBtn
                        onClick={() => handleClick('/')}>%</CalculatorNumberBtn>
                </Box>
                <Box>
                    <CalculatorNumberBtn
                        onClick={() => handleClick('1')}>1</CalculatorNumberBtn>
                    <CalculatorNumberBtn
                        onClick={() => handleClick('2')}>2</CalculatorNumberBtn>
                    <CalculatorNumberBtn
                        onClick={() => handleClick('3')}>3</CalculatorNumberBtn>
                    <CalculatorNumberBtn
                        onClick={() => handleClick('+')}>+</CalculatorNumberBtn>
                </Box>
                <Box>
                    <CalculatorNumberBtn
                        onClick={() => handleClick('0')}>0</CalculatorNumberBtn>
                    <CalculatorNumberBtn
                        onClick={() => handleClick('*')}>x</CalculatorNumberBtn>
                    <CalculatorNumberBtn
                        onClick={() => handleClick('-')}>-</CalculatorNumberBtn>
                    <CalculatorNumberBtn
                        onClick={() => setResult(result.slice(0, -1))}>Backspace</CalculatorNumberBtn>
                </Box>
                    <Button
                        style={{
                            width: 345,
                            height: 50,
                            marginTop: 8,
                            textTransform: 'none',
                            backgroundColor: '#ffffff'
                        }}
                        onClick={handleClickResult}>
                        =
                    </Button>
            </CalculatorBox>
        </>
    )
}