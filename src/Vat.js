import React, {useState} from 'react';

const Vat = () => {
    const [tax, setTax] = useState(23);
    const [price, setPrice] = useState("");



    return (
        <div className={"vatSection"}>
            <h2>VAT</h2> <span>wartość domyślna 23%</span>
            <form className={"vatForm"}>
                <label>
                    Wysokość podatku VAT:
                    <input value={tax} type={"text"} name={"tax"} placeholder={"%"} onChange={event => setTax(event.target.value)}/>
                    <span> %</span>
                </label>
                <label>
                    Cena Netto:
                    <input type={"text"} name={"price"} onChange={event => setPrice(event.target.value)} />
                    <span> zł</span>
                </label>
                <p>Cena brutto: {((parseInt(tax)/100 * parseInt(price))+parseInt(price)).toFixed(2)} zł</p>
                <p>Podatek VAT: {(parseInt(price) * parseInt(tax)/100).toFixed(2)} zł</p>
            </form>
        </div>
    )

}

export default Vat;