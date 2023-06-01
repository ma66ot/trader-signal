// class for making calls to bybit's api and opening long or short position and closing them
function byBitApi() {
    this.apiKey = "";
    this.apiSecret = '<API_SECRET>';
    this.leverage = "<LEVERAGE>"; // specify the leverage
    this.qty = "<QUANTITY>"; // specify the quantity

    this.setLeverage = function() {
        const setLeverageParams = {
            "api_key": this.apiKey,
            "timestamp": Date.now(),
            "symbol": "BTCUSDT", // specify the trading pair
            "leverage": leverage, // specify the leverage
        };

        const setLeverageSign = crypto.createHmac('sha256', apiSecret).update(querystring.stringify(setLeverageParams)).digest('hex');
        setLeverageParams['sign'] = setLeverageSign;

        fetch('https://api.bybit.com/v2/private/position/leverage/save', {
            method: 'POST',
            body: JSON.stringify(setLeverageParams),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }

    this.long = function() {

    }

    this.short = function() {

    }

    this.exit = function () {

    }
}
// creating the instance of the class so we can run it
let newObject = new byBitApi();
