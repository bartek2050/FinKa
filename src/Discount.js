import React, {useState} from 'react';
import Buttons from "./Buttons";

const Discount = () => {
    const [discount, setDiscount] = useState("");
    const [price, setPrice] = useState("");

    const discountedPrice = (discount, price) => {
        let calc1 = parseInt(price) - (parseInt(price)*parseInt(discount))/100;
        if (isNaN(calc1)) {
            return 0;
        } else {
            return (
                (parseInt(price) - (parseInt(price)*parseInt(discount))/100).toFixed(2)
            );
        }
    }

    const discountedCalc = (discount, price) => {
        let calc2 = (parseInt(price) * parseInt(discount)/100);
        if (isNaN(calc2)) {
            return 0;
        } else {
            return (
                (parseInt(price) * parseInt(discount)/100).toFixed(2)
            );
        }
    }

    return (
        <>
        <Buttons/>
        <div className={"discountSection"}>
            <h2>Rabat</h2>
            <form className={"discountForm"}>
                <label>
                    Cena przed rabatem:
                    <input type={"number"}
                           name={"price"}
                           onChange={event => setPrice(event.target.value)}/> zł
                </label>
                <label>
                    Rabat:
                    <input type={"number"}
                           inputMode={"numeric"}
                           name={"discount"}
                           placeholder={"%"}
                           onChange={event => setDiscount(event.target.value)} /> %
                </label>
                <p>Cena po rabacie: {discountedPrice(discount, price)} zł</p>
                <p>Rabat: {discountedCalc(discount, price)} zł</p>
            </form>
        </div>
            </>
    )

}

export default Discount;