import React, {useState} from 'react';

const Vat = () => {
    const [tax, setTax] = useState("");
    const [price, setPrice] = useState("");

    return (
        <div className={"vatSection"}>
            <h2>VAT</h2> <span>wartość domyślna 23%</span>
            <form className={"vatForm"}>
                <label>
                    Wysokość podatku VAT:
                    <input type={"text"} name={"tax"} placeholder={"%"} onChange={event => setTax(event.target.value)}/>
                </label>
                <label>
                    Cena Netto:
                    <input type={"text"} name={"price"} onChange={event => setPrice(event.target.value)} />
                </label>
                <p>Cena brutto: {(parseInt(tax)/100 * parseInt(price))+parseInt(price)}</p>
                <p>Podatek VAT: {parseInt(price) * parseInt(tax)/100}</p>
            </form>
        </div>
    )

}

export default Vat;