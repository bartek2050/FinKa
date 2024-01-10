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
    const currencies = ["USD", "EUR", "CHF"];

    useEffect(() => {
        const rateExchange = async() => {
            const response = await fetch(`https://api.frankfurter.app/latest?from=PLN`);
            const data = await response.json();
            setData(currencies.map((el) =>{
            const rate = data?.rates[el];
                return(
                    <TableRow>
                        <TableCell><img alt={el} src={`https://www.ecb.europa.eu/shared/img/flags/${el}.gif`}/></TableCell>
                        <TableCell>{el}</TableCell>
                        <TableCell>{rate}</TableCell>
                    </TableRow>
                )
            }));
        }
        try {
            rateExchange();
        }
        catch (e) {
            console.log(e)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        {data}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Exchange;