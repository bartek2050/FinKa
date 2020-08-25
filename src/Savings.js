import React, {useState} from 'react';

const Savings = () => {
    const [amount, setAmount] = useState(1000);
    const [period, setPeriod] = useState(12);
    const [interest, setInterest] = useState(2);
    const [adshow, setAdshow] = useState(false)

    const taxBelka = (amount, period) => {
        let calc1 = ((parseInt(amount) * parseInt(period) / 12 * parseInt(interest) / 100) * 0.19);
        if (isNaN(calc1)) {
            return 0;
        } else {
            return (
                ((parseInt(amount) * parseInt(period) / 12 * parseInt(interest) / 100) * 0.19).toFixed(2)
            );
        }
    }

     const savings = (amount, period) => {
            let calc2 = ((parseInt(amount) * parseInt(period) / 12 * parseInt(interest) / 100) * 0.81);
            if (isNaN(calc2)) {
                return 0;
            } else {
                return (
                    ((parseInt(amount) * parseInt(period) / 12 * parseInt(interest) / 100) * 0.81).toFixed(2)
                );
            }
        }

    return (
        <>
            <div className={"savingsSection"}>
                <h2>Kalkulator zysku z lokat</h2>
                <form className={"savingsForm"}>
                    <label>
                        Kwota lokaty:
                        <input value={amount} type={"number"} name={"amount"}
                               onChange={event => setAmount(event.target.value)}/> zł
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
                        <input value={interest} type={"number"} name={"interest"}
                               onChange={event => setInterest(event.target.value)}/> %
                    </label>

                    <p>Podatek
                        "Belki": {taxBelka(amount, period)} zł</p>
                    <p>Zysk z lokaty
                        (netto): {savings(amount, period)} zł</p>
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