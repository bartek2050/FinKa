import React, {useState} from 'react';

const Salary = () => {
    const [monthly, setMonthly] = useState("");
    const [hourly, setHourly] = useState("");



    return (
        <div className={"salarySection"}>
            <h2>Kalkulator wynagrodzenia</h2> <span>założono 40h tydzień pracy</span>
            <form className={"salaryForm"}>
                <p>Rocznie: {(parseInt(monthly) * 12) || (parseInt(hourly) * 1920).toFixed(2)} zł</p>
                <label>
                    Miesięcznie:
                    <input value={(hourly.length) > 0 ? (parseInt(hourly) * 160) : monthly}
                           type={"text"}
                           name={"monthly"}
                           placeholder={"zł"}
                           onChange={event => setMonthly(event.target.value)}/>
                    <span> zł</span>
                </label>
                <p>Tygodniowo: {(parseInt(monthly) / 4  || parseInt(hourly) * 40).toFixed(2)} zł</p>
                <p>Dziennie: {(parseInt(monthly) / 20  || parseInt(hourly) * 8).toFixed(2)} zł</p>
                <label>
                    Na godzinę:
                    <input value={(monthly.length) > 0 ? (parseInt(monthly) / 160) : hourly}
                           type={"text"}
                           name={"hourly"}
                           onChange={event => setHourly(event.target.value)} />
                    <span> zł</span>
                </label>
                <p>Na minutę: {(parseInt(monthly) / 2400  || parseInt(hourly) / 60).toFixed(2)} zł</p>
            </form>
        </div>
    )

}

export default Salary;