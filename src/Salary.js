import React, {useState} from 'react';

const Salary = () => {
    const [monthly, setMonthly] = useState("");
    const [hourly, setHourly] = useState("");

    const annualy = (monthly, hourly) => {
        let calc1 = (parseInt(monthly) * 12) || (parseInt(hourly) * 1920);
        if (isNaN(calc1)) {
            return 0;
        } else {
            return (
                (parseInt(monthly) * 12) || (parseInt(hourly) * 1920).toFixed(2)
            );
        }
    }

    const weekly = (monthly, hourly) => {
        let calc2 = (parseInt(monthly) / 4  || parseInt(hourly) * 40);
        if (isNaN(calc2)) {
            return 0;
        } else {
            return (
                (parseInt(monthly) / 4  || parseInt(hourly) * 40).toFixed(2)
            );
        }
    }

    const daily = (monthly, hourly) => {
        let calc3 = (parseInt(monthly) / 20  || parseInt(hourly) * 8);
        if (isNaN(calc3)) {
            return 0;
        } else {
            return (
                (parseInt(monthly) / 20  || parseInt(hourly) * 8).toFixed(2)
            );
        }
    }

    const minute = (monthly, hourly) => {
        let calc4 = (parseInt(monthly) / 2400  || parseInt(hourly) / 60);
        if (isNaN(calc4)) {
            return 0;
        } else {
            return (
                (parseInt(monthly) / 2400  || parseInt(hourly) / 60).toFixed(2)
            );
        }
    }


    return (
        <div className={"salarySection"}>
            <h2>Kalkulator wynagrodzenia</h2> <span>założono 40h tydzień pracy</span>
            <form className={"salaryForm"}>
                <p>Rocznie: {annualy(monthly, hourly)} zł</p>
                <label>
                    Miesięcznie:
                    <input value={(hourly.length) > 0 ? (parseInt(hourly) * 160) : monthly}
                           type={"number"}
                           name={"monthly"}
                           placeholder={"zł"}
                           onChange={event => setMonthly(event.target.value)}/> zł
                </label>
                <p>Tygodniowo: {weekly(monthly, hourly)} zł</p>
                <p>Dziennie: {daily(monthly, hourly)} zł</p>
                <label>
                    Na godzinę:
                    <input value={(monthly.length) > 0 ? (parseInt(monthly) / 160) : hourly}
                           type={"number"}
                           name={"hourly"}
                           onChange={event => setHourly(event.target.value)} /> zł
                </label>
                <p>Na minutę: {minute(monthly, hourly)} zł</p>
            </form>
        </div>
    )

}

export default Salary;