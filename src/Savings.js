import React, {useState} from 'react';

const Savings = () => {
    const [amount, setAmount] = useState(1000);
    const [period, setPeriod] = useState(12);
    const [interest, setInterest] = useState(2);
    const [adshow, setAdshow] = useState(false)

    return (
        <>
            <div className={"savingsSection"}>
                <h2>Kalkulator zysku z lokat</h2>
                <form className={"savingsForm"}>
                    <label>
                        Kwota lokaty:
                        <input value={amount} type={"text"} name={"amount"}
                               onChange={event => setAmount(event.target.value)}/>
                        <span> zł</span>
                    </label>
                    <label>
                        Okres:
                        <select value={period} onChange={event => setPeriod(event.target.value)}>
                            <option value={"1"}>1 mies</option>
                            <option value={"3"}>3 mies</option>
                            <option value={"6"}>6 mies</option>
                            <option value={"12"}>12 mies</option>
                            <option value={"24"}>24 mies</option>
                            <option value={"36"}>36 mies</option>
                        </select>
                    </label>
                    <label>
                        Oprocentowanie:
                        <input value={interest} type={"text"} name={"interest"}
                               onChange={event => setInterest(event.target.value)}/>
                        <span> %</span>
                    </label>

                    <p>Podatek
                        "Belki": {((parseInt(amount) * parseInt(period) / 12 * parseInt(interest) / 100) * 0.19).toFixed(2)} zł</p>
                    <p>Zysk z lokaty
                        (netto): {((parseInt(amount) * parseInt(period) / 12 * parseInt(interest) / 100) * 0.81).toFixed(2)} zł</p>
                </form>
                <div onClick={() => setAdshow(!adshow)} className={"offerButton"}>
                    Sprawdź ofertę lokat >>>
                </div>
                {adshow && <img alt={"banner"} src={process.env.PUBLIC_URL + '/lokata-wiosenna.jpg'}/>}
            </div>
        </>
    )

}

export default Savings;