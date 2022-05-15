import React from "react";

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
    withStyles
} from "@material-ui/core";

function createData(
    name,
    password,
    age,
    number,) {
        return { 
            name, password, age, number
        };
    }
  
const data = [
    createData('Donggyu', 1234, 25, '010-0000-0000'),
    createData('DonggyuKim', 4567, 25, '010-1111-1111'),
    createData('KimDonggyu', 6789, 25, '010-2222-2222'),
    createData('DonggyuKim', 4567, 25, '010-1111-1111'),
    createData('KimDonggyu', 6789, 25, '010-2222-2222'),
    createData('DonggyuKim', 4567, 25, '010-1111-1111'),
    createData('KimDonggyu', 6789, 25, '010-2222-2222'),
    createData('DonggyuKim', 4567, 25, '010-1111-1111'),
    createData('KimDonggyu', 6789, 25, '010-2222-2222'),
    createData('DonggyuKim', 4567, 25, '010-1111-1111'),
    createData('KimDonggyu', 6789, 25, '010-2222-2222'),
];

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
    return (
        <>
            <DefaultContainerBox>
                <TitleTypography
                    variant="h5" 
                    component="div">
                        TableCrud
                </TitleTypography>

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
                                            width={170}>User</TableCell>
                                        <TableCell
                                            width={180}>Password</TableCell>
                                        <TableCell
                                            width={180}>Age</TableCell>
                                        <TableCell
                                            width={180}>Number</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>

                            <Box style={{ 
                                    overflow: "auto", 
                                    height: 360
                                }}>
                                <Table>
                                    <TableBody>
                                    {data.map((data) => (
                                        <CustomTableRow
                                            key={data.name}>
                                        <TableCell
                                            width={180}>{data.name}</TableCell>
                                        <TableCell
                                            width={180}>{data.password}</TableCell>
                                        <TableCell
                                            width={180}>{data.age}</TableCell>
                                        <TableCell
                                            width={180}>{data.number}</TableCell>
                                        </CustomTableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </TableContainer>
                    </Table>
                </DefaultContainerInnerBox>
            </DefaultContainerBox>
        </>
    )
}