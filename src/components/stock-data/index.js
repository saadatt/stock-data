import React, {useState} from "react";
import "./index.css";

export default function StockData() {

    const [input, setInput] = useState();
    const [stoks, setStoks] = useState();

    const onClickSearch = async () => {
        try {
            const response = await fetch('https://jsonmock.hackerrank.com/api/stocks?date=' + input)
            const data = await response.json();
            console.log('first', data);
            if (data.total) {
                setStoks(data.data);
            } else {
                setStoks([]);
            }
        } catch (err) {
            setStoks([]);
        }
    }

    return (
        <div className="layout-column align-items-center mt-50">
            <section className="layout-row align-items-center justify-content-center">
                <input
                    type="text" className="large" placeholder="5-January-2000"
                    id="app-input" data-testid="app-input"
                    onChange={e => setInput(e.target.value)}
                />
                <button className="" id="submit-button" data-testid="submit-button" onClick={onClickSearch}>
                    Search
                </button>
            </section>
            {stoks
                ? stoks.length > 0
                    ? stoks.map((stock, index) =>
                        <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data" key={index}>
                            <li className="py-10">
                                Open: {stock.open}
                            </li>
                            <li className="py-10">
                                Close: {stock.close}
                            </li>
                            <li className="py-10">
                                High: {stock.high}
                            </li>
                            <li className="py-10">
                                Low: {stock.low}
                            </li>
                        </ul>)
                    : <div data-testid="no-result">No Results Found</div>
                : null}
        </div>
    );
}