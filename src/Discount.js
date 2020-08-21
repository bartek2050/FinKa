import React, {useState} from 'react';

const Discount = () => {
    const [discount, setDiscount] = useState("");
    const [price, setPrice] = useState("");



    return (
        <div className={"discountSection"}>
            <h2>Rabat</h2>
            <form className={"discountForm"}>
                <label>
                    Cena przed rabatem:
                    <input type={"text"} pattern={"[0-9]*"} name={"price"} onChange={event => setPrice(event.target.value)}/>
                    <span> zł</span>
                </label>
                <label>
                    Rabat:
                    <input type={"text"} pattern={"[0-9]*"} inputMode={"numeric"} name={"discount"} placeholder={"%"} onChange={event => setDiscount(event.target.value)} />
                    <span> %</span>
                </label>
                <p>Cena po rabacie: {parseInt(price) - (parseInt(price)*parseInt(discount))/100} zł</p>
                <p>Rabat: {(parseInt(price) * parseInt(discount)/100).toFixed(2)} zł</p>
            </form>
        </div>
    )

}

export default Discount;