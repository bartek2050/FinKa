import React, {useState, useEffect} from "react";
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
        minWidth: 650,
        maxWidth: 900,
    },
});

const Crypto = () => {
    const [data, setData] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response => response.json())
            .then((data) => {
                let geckoData = data.map((el, i) =>
                    <TableRow key={i} style={{color: "primary"}}>
                        <TableCell><img
                            style={{width: "30px", height: "30px"}}
                            alt={"bitcoin"}
                            src={el.image}/>
                        </TableCell>
                        <TableCell>{el.market_cap_rank} </TableCell>
                        <TableCell>{el.name}</TableCell>
                        <TableCell>{el.symbol}</TableCell>
                        <TableCell>{el.current_price}zł</TableCell>
                        <TableCell>{el.high_24h}zł</TableCell>
                        <TableCell>{el.low_24h}zł</TableCell>
                        <TableCell>{el.price_change_24h.toFixed(2)}zł</TableCell>
                        <TableCell>{el.market_cap_change_percentage_24h.toFixed(2)}%</TableCell>
                    </TableRow>
                )
                setData(geckoData)
            });


    }, []);

    if (data === false) {
        return <h1>Aktualizuje kursy...</h1>;
    } else {
        return (
            <>
                <h1>Aktualne kursy kryptowalut:</h1>
                <TableContainer className={"tableBox"}>
                    <TableFontColor/>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead className={"tableBox__head"}>
                            <TableRow>
                                <TableCell> - </TableCell>
                                <TableCell>#</TableCell>
                                <TableCell>Nazwa</TableCell>
                                <TableCell>Skrót</TableCell>
                                <TableCell>Kurs</TableCell>
                                <TableCell>High 24h</TableCell>
                                <TableCell>Low 24h</TableCell>
                                <TableCell>Kurs 24h</TableCell>
                                <TableCell>% 24h</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        );
    }
};

export default Crypto;