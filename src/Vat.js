import React, {useState} from 'react';

const Vat = () => {
    const [vat, setVat] = useState(23);
    const [price, setPrice] = useState("");

    const grossPrice = (price, vat) => {
        let calc1 = (parseInt(vat) / 100 * parseInt(price)) + parseInt(price);
        if (isNaN(calc1)) {
            return 0;
        } else {
            return (
                ((parseInt(vat) / 100 * parseInt(price)) + parseInt(price)).toFixed(2)
            );
        }
    }

    const vatTax = (price, vat) => {
        let calc2 = (parseInt(price) * parseInt(vat) / 100);
        if (isNaN(calc2)) {
            return 0;
        } else {
            return (
                (parseInt(price) * parseInt(vat) / 100).toFixed(2)
            );
        }
    }


    return (
        <div className={"vatSection"}>
            <h2>VAT</h2> <span>wartość domyślna 23%</span>
            <form className={"vatForm"}>
                <label>
                    Wysokość podatku VAT:
                    <input value={vat}
                           type={"number"}
                           name={"tax"}
                           placeholder={"%"}
                           onChange={event => setVat(event.target.value)}/> %
                </label>
                <label>
                    Cena Netto:
                    <input type={"number"}
                           name={"price"}
                           onChange={event => setPrice(event.target.value)}/> zł
                </label>
                <p>Cena brutto: {grossPrice(price, vat)} zł</p>
                <p>Podatek VAT: {vatTax(price, vat)} zł</p>
            </form>
        </div>
    )

}

export default Vat;