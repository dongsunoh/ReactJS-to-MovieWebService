import { useEffect, useState } from "react";

function DollarToCoin({ selectedCoinUSD }) {
    const [amount, setAmount] = useState("");

    const handleChange = (event) => {
        setAmount(event.target.value);
    };

    // 입력값과 코인 가격을 이용해 수량 계산
    const parsedAmount = parseFloat(amount);
    const parsedPrice = parseFloat(selectedCoinUSD);

    const buyableCoinCount =
        !isNaN(parsedAmount) && parsedPrice > 0
            ? (parsedAmount / parsedPrice).toFixed(6)
            : 0;

    return (
        <div>
            <div>
                <label htmlFor="dollar">현재 보유 달러 : </label>
                <input
                    onChange={handleChange}
                    value={amount}
                    id="dollar"
                    type="number"
                    placeholder="Insert your dollar..."
                />
            </div>
            <div>
                <label htmlFor="coinBuyCount">살 수 있는 코인 개수 : </label>
                <input
                    value={buyableCoinCount}
                    id="coinBuyCount"
                    type="text"
                    disabled
                />
            </div>
        </div>
    );
}

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [selectedCoinUSD, setSelectedCoinUSD] = useState(0);

    const handleCoinChange = (event) => {
        setSelectedCoinUSD(parseFloat(event.target.value));
    };

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                if (Array.isArray(json) && json.length > 0) {
                    setCoins(json);
                    setSelectedCoinUSD(json[0].quotes.USD.price);
                }
            })
            .catch((error) => {
                console.error("데이터 가져오기 실패:", error);
                alert("코인 데이터를 불러오는 데 실패했어요.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <>
                    <select onChange={handleCoinChange} value={selectedCoinUSD}>
                        {coins.map((coin) => (
                            <option key={coin.id} value={coin.quotes.USD.price}>
                                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price.toFixed(2)}
                            </option>
                        ))}
                    </select>
                    <hr />
                    <DollarToCoin selectedCoinUSD={selectedCoinUSD} />
                </>
            )}
        </div>
    );
}

export default App;