import React, {useState, useEffect} from "react";

const Crypto = () => {
    const [data, setData] = useState(false);

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response => response.json())
            .then(data => {
                let idtab = data.map(el =>
                    <tr>
                        <img style={{width: "30px", height: "30px"}} alt={"bitcoin"} src={el.image}/>
                        {el.name}
                        {el.current_price} zł
                        {el.price_change_24h.toFixed(2)}zł
                        {el.market_cap_change_percentage_24h.toFixed(2)}%
                    </tr>);
                setData(idtab)
            });

    });

    return (
        <h1>
            <th>Kurs bitcoin</th>
            {data}
        </h1>
    )

};

export default Crypto;
