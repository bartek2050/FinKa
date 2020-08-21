import React, {useState} from 'react';

const Calculator = () => {
    const [percent, setPercent] = useState("");
    const [number, setNumber] = useState("");

    return (
        <div className={"percentSection"}>
        <h2>Zwykły procent</h2> <span>x=a*b/100</span>
        <form className={"percentForm"}>
            <label>
               Procent:
                <input type={"text"} name={"percent"} placeholder={"%"} onChange={event => setPercent(event.target.value)} />
            </label>
            <label>
                Z liczby:
                <input type={"text"} name={"number"} onChange={event => setNumber(event.target.value)} />
            </label>
            <p>Wynosi: {Math.imul(number,percent)/100}</p>
        </form>
            </div>
    )

}

export default Calculator;