import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import {withStyles, makeStyles, createStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles((theme) =>

    createStyles({

        row: {
            color: "grey",
            fontSize: 20,
            fontFamily: `"Open Sans", sans-serif`

        },
    })
);

const createData = (name) => {
    return {name};
}

const rows = [
    createData('PONIEDZIALEK'),
    createData('WTOREK'),
    createData('SRODA'),
    createData('CZWARTEK'),
    createData('PIATEK'),
    createData('SOBOTA'),
    createData('NIEDZIELA'),
];
const NewSchedule = () => {
    const classes = useStyles()
    const StyledTableCell = withStyles((theme) => ({}))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);


    return (


        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell className={classes.row}>DZIEN TYGODNIA</StyledTableCell>
                        <StyledTableCell className={classes.row} align="right">SNIADANIE</StyledTableCell>
                        <StyledTableCell className={classes.row} align="right">DRUGIE SNIADANIE</StyledTableCell>
                        <StyledTableCell className={classes.row} align="right">ZUPA</StyledTableCell>
                        <StyledTableCell className={classes.row} align="right">DRUGIE DANIE</StyledTableCell>
                        <StyledTableCell className={classes.row} align="right">KOLACJA</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (

                        <StyledTableRow>
                            <StyledTableCell className={classes.row} component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">

                                <select>
                                    <option>Owsianka z malinami</option>
                                    <option>Granola z borowkami</option>
                                    <option>Kanapka z wedzonym lososiem</option>
                                    <option>Shakshuka po marokansku</option>
                                    <option>Jajecznica na boczku</option>

                                </select>


                            </StyledTableCell>
                            <StyledTableCell align="right">

                                <select>
                                    <option>Skyr z dzemem</option>
                                    <option>Serek wiejski z orzechami</option>
                                    <option>Kanapka z miodem</option>
                                    <option>Salatka owocowa</option>
                                    <option>Banan</option>
                                </select>

                            </StyledTableCell>
                            <StyledTableCell align="right">

                                <select>
                                    <option>Zurek z jajkiem</option>
                                    <option>Rosol na kaczce</option>
                                    <option>Seviche</option>
                                    <option>Ramen z boczkiem kakuni</option>
                                    <option>Tom Yum</option>

                                </select>

                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <select>
                                    <option>Nalesniki z aivarem</option>
                                    <option>Quesadilla z kurczakiem</option>
                                    <option>Kotlet Schabowy</option>
                                    <option>Pad Thai</option>
                                    <option>Nyama Choma</option>


                                </select>

                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <select>
                                    <option>Burgery z indyka</option>
                                    <option>Ryz po chinsku</option>
                                    <option>Kurczak Cajun</option>
                                    <option>Okonomiyaki</option>
                                    <option>Racuchy z jablkami</option>

                                </select>

                            </StyledTableCell>


                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>


    )
}


export default NewSchedule