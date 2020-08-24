import React, {useState} from 'react';

const Vat = () => {
    const [vat, setVat] = useState(23);
    const [price, setPrice] = useState("");

    const NonErrorFix = (price, vat) => {
        let numb1 = (parseInt(vat)/100 * parseInt(price))+parseInt(price);
        if (isNaN(numb1)) {
            return 0;
        } else {
            return(
            ((parseInt(vat)/100 * parseInt(price))+parseInt(price)).toFixed(2)
            );
        }
    }



    return (
        <div className={"vatSection"}>
            <h2>VAT</h2> <span>wartość domyślna 23%</span>
            <form className={"vatForm"}>
                <label>
                    Wysokość podatku VAT:
                    <input value={vat} type={"text"} name={"tax"} placeholder={"%"} onChange={event => setVat(event.target.value)}/>
                    <span> %</span>
                </label>
                <label>
                    Cena Netto:
                    <input type={"text"} name={"price"} onChange={event => setPrice(event.target.value)} />
                    <span> zł</span>
                </label>
                <p>Cena brutto: {NonErrorFix(price, vat)} zł</p>
                <p>Podatek VAT: {(parseInt(price) * parseInt(vat)/100).toFixed(2)} zł</p>
            </form>
        </div>
    )

}

export default Vat;