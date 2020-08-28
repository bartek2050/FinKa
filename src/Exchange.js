import React, {useEffect, useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const TableFontColor = withStyles({
    '@global': {
        ".MuiTableCell-root": {
            color: "white",

        }
    }
})(() => null);

const useStyles = makeStyles({
    table: {
        minWidth: 350,
        maxWidth: 400,
    },
});

const Exchange = () => {
    const [data, setData] = useState("");
    const classes = useStyles();

    useEffect(() => {
        fetch("https://api.exchangeratesapi.io/latest?base=PLN")
            .then(response => response.json())
            .then(data => setData(data.rates))
            .catch(error => console.log(error));

    }, []);

    let dateDay = new Date().getDate();
    let dateMonth = new Date().getMonth() + 1;
    let dateYear = new Date().getFullYear();
    return (
        <>
            <h1>Kursy</h1>
            <p className={"currentDate"}>{dateDay} / {dateMonth} / {dateYear}</p>
            <span className={"exchangeInfo"}>dla 1 PLN</span>

            <TableContainer className={"tableBox"}>
                <TableFontColor/>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead className={"tableBox__head"}>
                        <TableRow>
                            <TableCell>-</TableCell>
                            <TableCell>Waluta</TableCell>
                            <TableCell>Kurs</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell><i className="fi-cnsuxl-europe-flag"></i></TableCell>
                            <TableCell>EUR</TableCell>
                            <TableCell>{data.EUR}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><img alt={"chf"} src={`https://www.ecb.europa.eu/shared/img/flags/USD.gif`}/></TableCell>
                            <TableCell>USD</TableCell>
                            <TableCell>{data.USD}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><img alt={"chf"} src={`https://www.ecb.europa.eu/shared/img/flags/CHF.gif`}/></TableCell>
                            <TableCell>CHF</TableCell>
                            <TableCell>{data.CHF}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Exchange;