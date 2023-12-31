const coinPrices = [
    {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        "current_price": 28797,
        "market_cap": 558640986251,
        "market_cap_rank": 1,
        "fully_diluted_valuation": 604465423667,
        "total_volume": 19517712421,
        "high_24h": 28891,
        "low_24h": 26667,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 1824.12,
        "price_change_percentage_24h": 6.76293,
        "market_cap_change_24h": 35362190068,
        "market_cap_change_percentage_24h": 6.75781,
        "circulating_supply": 19407993.0,
        "total_supply": 21000000.0,
        "max_supply": 21000000.0,
        "ath": 69045,
        "ath_change_percentage": -58.31585,
        "ath_date": "2021-11-10T14:24:11.849Z",
        "atl": 67.81,
        "atl_change_percentage": 42343.81152,
        "atl_date": "2013-07-06T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:20.108Z"
    },
    {
        "id": "binancecoin",
        "symbol": "bnb",
        "name": "BNB",
        "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
        "current_price": 251.32,
        "market_cap": 39157336080,
        "market_cap_rank": 4,
        "fully_diluted_valuation": 50248354992,
        "total_volume": 649708945,
        "high_24h": 252.75,
        "low_24h": 238.85,
        "onehour": 0.75,
        "tfhours": 0.11,
        "sevendays": 0.14,
        "price_change_24h": 8.42,
        "price_change_percentage_24h": 3.46639,
        "market_cap_change_24h": 1301063979,
        "market_cap_change_percentage_24h": 3.43685,
        "circulating_supply": 155855196.0,
        "total_supply": 157900174.0,
        "max_supply": 200000000.0,
        "ath": 686.31,
        "ath_change_percentage": -63.39332,
        "ath_date": "2021-05-10T07:24:17.097Z",
        "atl": 0.0398177,
        "atl_change_percentage": 630860.73103,
        "atl_date": "2017-10-19T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:25.703Z"
    },
    {
        "id": "bitcoin-cash",
        "symbol": "bch",
        "name": "Bitcoin Cash",
        "image": "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492",
        "current_price": 113.33,
        "market_cap": 2200379103,
        "market_cap_rank": 29,
        "fully_diluted_valuation": 2378751495,
        "total_volume": 77026772,
        "high_24h": 113.17,
        "low_24h": 105.19,
        "onehour": 0.32,
        "tfhours": 0.20,
        "sevendays": 0.17,
        "price_change_24h": 6.88,
        "price_change_percentage_24h": 6.4637,
        "market_cap_change_24h": 133267936,
        "market_cap_change_percentage_24h": 6.44706,
        "circulating_supply": 19425299.8966508,
        "total_supply": 21000000.0,
        "max_supply": 21000000.0,
        "ath": 3785.82,
        "ath_change_percentage": -97.01697,
        "ath_date": "2017-12-20T00:00:00.000Z",
        "atl": 76.93,
        "atl_change_percentage": 46.78944,
        "atl_date": "2018-12-16T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:25.144Z"
    },
    {
        "id": "wrapped-bitcoin",
        "symbol": "wbtc",
        "name": "Wrapped Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744",
        "current_price": 28778,
        "market_cap": 4512332898,
        "market_cap_rank": 15,
        "fully_diluted_valuation": 4512332898,
        "total_volume": 283677923,
        "high_24h": 28846,
        "low_24h": 26674,
        "onehour": 0.11,
        "tfhours": 0.23,
        "sevendays": 0.44,
        "price_change_24h": 1832.24,
        "price_change_percentage_24h": 6.79984,
        "market_cap_change_24h": 286696809,
        "market_cap_change_percentage_24h": 6.7847,
        "circulating_supply": 156927.1954425,
        "total_supply": 156927.1954425,
        "max_supply": 156927.1954425,
        "ath": 70643,
        "ath_change_percentage": -59.29726,
        "ath_date": "2021-11-10T14:40:19.650Z",
        "atl": 3139.17,
        "atl_change_percentage": 815.9674,
        "atl_date": "2019-04-02T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:26.370Z"
    },
    {
        "id": "staked-ether",
        "symbol": "steth",
        "name": "Lido Staked Ether",
        "image": "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546",
        "current_price": 1815.44,
        "market_cap": 13245376729,
        "market_cap_rank": 7,
        "fully_diluted_valuation": 13245376729,
        "total_volume": 7884917,
        "high_24h": 1820.55,
        "low_24h": 1713.67,
        "onehour": 0.22,
        "tfhours": 0.41,
        "sevendays": 0.47,
        "price_change_24h": 84.99,
        "price_change_percentage_24h": 4.91146,
        "market_cap_change_24h": 621379468,
        "market_cap_change_percentage_24h": 4.92221,
        "circulating_supply": 7300847.84177381,
        "total_supply": 7300847.84177381,
        "max_supply": 7300847.84177381,
        "ath": 4829.57,
        "ath_change_percentage": -62.43498,
        "ath_date": "2021-11-10T14:40:47.256Z",
        "atl": 482.9,
        "atl_change_percentage": 275.6975,
        "atl_date": "2020-12-22T04:08:21.854Z",
        "roi": null,
        "last_updated": "2023-06-21T05:12:49.240Z"
    },
    {
        "id": "internet-computer",
        "symbol": "icp",
        "name": "Internet Computer",
        "image": "https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png?1620703073",
        "current_price": 4.18,
        "market_cap": 1830051540,
        "market_cap_rank": 31,
        "fully_diluted_valuation": 1963228054,
        "total_volume": 22324391,
        "high_24h": 4.22,
        "low_24h": 3.91,
        "onehour": 0.10,
        "tfhours": 0.11,
        "sevendays": 0.15,
        "price_change_24h": 0.218942,
        "price_change_percentage_24h": 5.5236,
        "market_cap_change_24h": 98781355,
        "market_cap_change_percentage_24h": 5.70572,
        "circulating_supply": 437384373.698964,
        "total_supply": 499854104.507532,
        "max_supply": 469213710.0,
        "ath": 700.65,
        "ath_change_percentage": -99.40305,
        "ath_date": "2021-05-10T16:05:53.653Z",
        "atl": 3.4,
        "atl_change_percentage": 23.05128,
        "atl_date": "2022-12-19T22:45:01.729Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:28.057Z"
    },
    {
        "id": "usd-coin",
        "symbol": "usdc",
        "name": "USD Coin",
        "image": "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
        "current_price": 1.0,
        "market_cap": 28536936379,
        "market_cap_rank": 5,
        "fully_diluted_valuation": 28537187109,
        "total_volume": 6372378858,
        "high_24h": 1.006,
        "low_24h": 0.996786,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 0.00056517,
        "price_change_percentage_24h": 0.05653,
        "market_cap_change_24h": 63218065,
        "market_cap_change_percentage_24h": 0.22202,
        "circulating_supply": 28531139969.9862,
        "total_supply": 28531390649.0813,
        "max_supply": null,
        "ath": 1.17,
        "ath_change_percentage": -14.65754,
        "ath_date": "2019-05-08T00:40:28.300Z",
        "atl": 0.877647,
        "atl_change_percentage": 14.03408,
        "atl_date": "2023-03-11T08:02:13.981Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:29.136Z"
    },
    {
        "id": "blockstack",
        "symbol": "stx",
        "name": "Stacks",
        "image": "https://assets.coingecko.com/coins/images/2069/large/Stacks_logo_full.png?1604112510",
        "current_price": 0.753277,
        "market_cap": 1045341089,
        "market_cap_rank": 41,
        "fully_diluted_valuation": 1369042298,
        "total_volume": 103480148,
        "high_24h": 0.776455,
        "low_24h": 0.616858,
        "onehour": 0.12,
        "tfhours": 0.18,
        "sevendays": 0.45,
        "price_change_24h": 0.129009,
        "price_change_percentage_24h": 20.66569,
        "market_cap_change_24h": 177911493,
        "market_cap_change_percentage_24h": 20.51019,
        "circulating_supply": 1388145642.4846,
        "total_supply": 1818000000.0,
        "max_supply": 1818000000.0,
        "ath": 3.39,
        "ath_change_percentage": -77.72358,
        "ath_date": "2021-12-01T01:32:34.725Z",
        "atl": 0.04559639,
        "atl_change_percentage": 1556.02886,
        "atl_date": "2020-03-13T02:29:26.415Z",
        "roi": {
            "times": 5.277306420396987,
            "currency": "usd",
            "percentage": 527.7306420396986
        },
        "last_updated": "2023-06-21T05:13:26.065Z"
    },
    {
        "id": "ripple",
        "symbol": "xrp",
        "name": "XRP",
        "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
        "current_price": 0.501241,
        "market_cap": 26047880434,
        "market_cap_rank": 6,
        "fully_diluted_valuation": 49997245697,
        "total_volume": 931676614,
        "high_24h": 0.500583,
        "low_24h": 0.473949,
        "onehour": 0.15,
        "tfhours": 0.23,
        "sevendays": 0.65,
        "price_change_24h": 0.01126381,
        "price_change_percentage_24h": 2.29884,
        "market_cap_change_24h": 567843461,
        "market_cap_change_percentage_24h": 2.22858,
        "circulating_supply": 52098630775.0,
        "total_supply": 99988842772.0,
        "max_supply": 100000000000.0,
        "ath": 3.4,
        "ath_change_percentage": -85.29283,
        "ath_date": "2018-01-07T00:00:00.000Z",
        "atl": 0.00268621,
        "atl_change_percentage": 18506.7545,
        "atl_date": "2014-05-22T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:27.606Z"
    },
    {
        "id": "cardano",
        "symbol": "ada",
        "name": "Cardano",
        "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
        "current_price": 0.2786,
        "market_cap": 9764418921,
        "market_cap_rank": 8,
        "fully_diluted_valuation": 12538124989,
        "total_volume": 228188715,
        "high_24h": 0.281564,
        "low_24h": 0.253147,
        "onehour": 0.19,
        "tfhours": 0.29,
        "sevendays": 0.35,
        "price_change_24h": 0.01848982,
        "price_change_percentage_24h": 7.10846,
        "market_cap_change_24h": 647765844,
        "market_cap_change_percentage_24h": 7.1053,
        "circulating_supply": 35045020830.3234,
        "total_supply": 45000000000.0,
        "max_supply": 45000000000.0,
        "ath": 3.09,
        "ath_change_percentage": -90.97683,
        "ath_date": "2021-09-02T06:00:10.474Z",
        "atl": 0.01925275,
        "atl_change_percentage": 1346.74065,
        "atl_date": "2020-03-13T02:22:55.044Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:23.461Z"
    },
    {
        "id": "dogecoin",
        "symbol": "doge",
        "name": "Dogecoin",
        "image": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
        "current_price": 0.064041,
        "market_cap": 8949208452,
        "market_cap_rank": 9,
        "fully_diluted_valuation": 8949151501,
        "total_volume": 233705728,
        "high_24h": 0.064052,
        "low_24h": 0.060948,
        "onehour": 0.75,
        "tfhours": 0.29,
        "sevendays": 0.27,
        "price_change_24h": 0.00175354,
        "price_change_percentage_24h": 2.81523,
        "market_cap_change_24h": 241517984,
        "market_cap_change_percentage_24h": 2.77362,
        "circulating_supply": 139854386383.705,
        "total_supply": 139853496383.705,
        "max_supply": null,
        "ath": 0.731578,
        "ath_change_percentage": -91.25184,
        "ath_date": "2021-05-08T05:08:23.458Z",
        "atl": 8.69e-05,
        "atl_change_percentage": 73544.23924,
        "atl_date": "2015-05-06T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:28.214Z"
    },
    {
        "id": "solana",
        "symbol": "sol",
        "name": "Solana",
        "image": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
        "current_price": 16.8,
        "market_cap": 6706051769,
        "market_cap_rank": 10,
        "fully_diluted_valuation": 9239759177,
        "total_volume": 270458982,
        "high_24h": 17.1,
        "low_24h": 15.76,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 0.739483,
        "price_change_percentage_24h": 4.60361,
        "market_cap_change_24h": 299678602,
        "market_cap_change_percentage_24h": 4.67782,
        "circulating_supply": 399520518.456127,
        "total_supply": 550468964.995613,
        "max_supply": null,
        "ath": 259.96,
        "ath_change_percentage": -93.54301,
        "ath_date": "2021-11-06T21:54:35.825Z",
        "atl": 0.500801,
        "atl_change_percentage": 3251.73717,
        "atl_date": "2020-05-11T19:35:23.449Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:25.306Z"
    },
    {
        "id": "tron",
        "symbol": "trx",
        "name": "TRON",
        "image": "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066",
        "current_price": 0.071636,
        "market_cap": 6435308583,
        "market_cap_rank": 11,
        "fully_diluted_valuation": 6435344327,
        "total_volume": 201174932,
        "high_24h": 0.071566,
        "low_24h": 0.068333,
        "onehour": 0.82,
        "tfhours": 0.13,
        "sevendays": 0.39,
        "price_change_24h": 0.00247011,
        "price_change_percentage_24h": 3.57127,
        "market_cap_change_24h": 203775813,
        "market_cap_change_percentage_24h": 3.27008,
        "circulating_supply": 90018129562.9142,
        "total_supply": 90018629560.1006,
        "max_supply": null,
        "ath": 0.231673,
        "ath_change_percentage": -69.12856,
        "ath_date": "2018-01-05T00:00:00.000Z",
        "atl": 0.00180434,
        "atl_change_percentage": 3863.81197,
        "atl_date": "2017-11-12T00:00:00.000Z",
        "roi": {
            "times": 36.70329863526936,
            "currency": "usd",
            "percentage": 3670.329863526936
        },
        "last_updated": "2023-06-21T05:13:22.799Z"
    },
    {
        "id": "matic-network",
        "symbol": "matic",
        "name": "Polygon",
        "image": "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912",
        "current_price": 0.652971,
        "market_cap": 6032466290,
        "market_cap_rank": 12,
        "fully_diluted_valuation": 6493876286,
        "total_volume": 274117211,
        "high_24h": 0.651821,
        "low_24h": 0.592372,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 0.04241242,
        "price_change_percentage_24h": 6.94649,
        "market_cap_change_24h": 367692525,
        "market_cap_change_percentage_24h": 6.49086,
        "circulating_supply": 9289469069.28493,
        "total_supply": 10000000000.0,
        "max_supply": 10000000000.0,
        "ath": 2.92,
        "ath_change_percentage": -77.73663,
        "ath_date": "2021-12-27T02:08:34.307Z",
        "atl": 0.00314376,
        "atl_change_percentage": 20552.29242,
        "atl_date": "2019-05-10T00:00:00.000Z",
        "roi": {
            "times": 247.2779816571279,
            "currency": "usd",
            "percentage": 24727.79816571279
        },
        "last_updated": "2023-06-21T05:13:26.071Z"
    },
    {
        "id": "litecoin",
        "symbol": "ltc",
        "name": "Litecoin",
        "image": "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580",
        "current_price": 82.01,
        "market_cap": 5998207304,
        "market_cap_rank": 13,
        "fully_diluted_valuation": 6884073131,
        "total_volume": 475524883,
        "high_24h": 82.51,
        "low_24h": 75.93,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 4.58,
        "price_change_percentage_24h": 5.9087,
        "market_cap_change_24h": 337601711,
        "market_cap_change_percentage_24h": 5.96406,
        "circulating_supply": 73190595.7334713,
        "total_supply": 84000000.0,
        "max_supply": 84000000.0,
        "ath": 410.26,
        "ath_change_percentage": -80.01759,
        "ath_date": "2021-05-10T03:13:07.904Z",
        "atl": 1.15,
        "atl_change_percentage": 7035.86272,
        "atl_date": "2015-01-14T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:26.443Z"
    },
    {
        "id": "polkadot",
        "symbol": "dot",
        "name": "Polkadot",
        "image": "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644",
        "current_price": 4.72,
        "market_cap": 5863366299,
        "market_cap_rank": 14,
        "fully_diluted_valuation": 6244484308,
        "total_volume": 121610526,
        "high_24h": 4.74,
        "low_24h": 4.38,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 0.219268,
        "price_change_percentage_24h": 4.87404,
        "market_cap_change_24h": 266182002,
        "market_cap_change_percentage_24h": 4.75564,
        "circulating_supply": 1245218446.10559,
        "total_supply": 1326157475.18705,
        "max_supply": null,
        "ath": 54.98,
        "ath_change_percentage": -91.43586,
        "ath_date": "2021-11-04T14:10:09.301Z",
        "atl": 2.7,
        "atl_change_percentage": 74.55867,
        "atl_date": "2020-08-20T05:48:11.359Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:29.314Z"
    },
    {
        "id": "dai",
        "symbol": "dai",
        "name": "Dai",
        "image": "https://assets.coingecko.com/coins/images/9956/large/Badge_Dai.png?1687143508",
        "current_price": 1.001,
        "market_cap": 4451597923,
        "market_cap_rank": 16,
        "fully_diluted_valuation": 4451597923,
        "total_volume": 219001655,
        "high_24h": 1.008,
        "low_24h": 0.997087,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 0.00126458,
        "price_change_percentage_24h": 0.12645,
        "market_cap_change_24h": 29922643,
        "market_cap_change_percentage_24h": 0.67673,
        "circulating_supply": 4445589926.90872,
        "total_supply": 4445589926.90872,
        "max_supply": 4445589926.90872,
        "ath": 1.22,
        "ath_change_percentage": -17.83378,
        "ath_date": "2020-03-13T03:02:50.373Z",
        "atl": 0.88196,
        "atl_change_percentage": 13.55949,
        "atl_date": "2023-03-11T07:50:50.514Z",
        "roi": null,
        "last_updated": "2023-06-21T05:10:00.215Z"
    },
    {
        "id": "shiba-inu",
        "symbol": "shib",
        "name": "Shiba Inu",
        "image": "https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446",
        "current_price": 7.42e-06,
        "market_cap": 4370185795,
        "market_cap_rank": 17,
        "fully_diluted_valuation": 7415309248,
        "total_volume": 102447333,
        "high_24h": 7.42e-06,
        "low_24h": 6.98e-06,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 2.01273e-07,
        "price_change_percentage_24h": 2.7885,
        "market_cap_change_24h": 119606631,
        "market_cap_change_percentage_24h": 2.81389,
        "circulating_supply": 589340122290400.2,
        "total_supply": 999989351596587.0,
        "max_supply": null,
        "ath": 8.616e-05,
        "ath_change_percentage": -91.3934,
        "ath_date": "2021-10-28T03:54:55.568Z",
        "atl": 5.6366e-11,
        "atl_change_percentage": 13155518.23227,
        "atl_date": "2020-11-28T11:26:25.838Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:28.616Z"
    },
    {
        "id": "binance-usd",
        "symbol": "busd",
        "name": "Binance USD",
        "image": "https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766",
        "current_price": 1.001,
        "market_cap": 4273877826,
        "market_cap_rank": 18,
        "fully_diluted_valuation": 4273877826,
        "total_volume": 2390957767,
        "high_24h": 1.006,
        "low_24h": 0.995806,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 0.00065552,
        "price_change_percentage_24h": 0.06551,
        "market_cap_change_24h": -24203710.630075455,
        "market_cap_change_percentage_24h": -0.56313,
        "circulating_supply": 4269031790.01,
        "total_supply": 4269031790.01,
        "max_supply": null,
        "ath": 1.15,
        "ath_change_percentage": -13.2814,
        "ath_date": "2020-03-13T02:35:42.953Z",
        "atl": 0.901127,
        "atl_change_percentage": 11.07306,
        "atl_date": "2021-05-19T13:04:37.445Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:21.484Z"
    },
    {
        "id": "avalanche-2",
        "symbol": "avax",
        "name": "Avalanche",
        "image": "https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1670992574",
        "current_price": 12.31,
        "market_cap": 4245007102,
        "market_cap_rank": 19,
        "fully_diluted_valuation": 8859757794,
        "total_volume": 129306458,
        "high_24h": 12.31,
        "low_24h": 11.19,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 0.815714,
        "price_change_percentage_24h": 7.09757,
        "market_cap_change_24h": 281334807,
        "market_cap_change_percentage_24h": 7.09783,
        "circulating_supply": 344976147.754164,
        "total_supply": 431695400.533418,
        "max_supply": 720000000.0,
        "ath": 144.96,
        "ath_change_percentage": -91.51495,
        "ath_date": "2021-11-21T14:18:56.538Z",
        "atl": 2.8,
        "atl_change_percentage": 339.11998,
        "atl_date": "2020-12-31T13:15:21.540Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:26.000Z"
    },
    {
        "id": "uniswap",
        "symbol": "uni",
        "name": "Uniswap",
        "image": "https://assets.coingecko.com/coins/images/12504/large/uni.jpg?1687143398",
        "current_price": 4.63,
        "market_cap": 3489596353,
        "market_cap_rank": 20,
        "fully_diluted_valuation": 4629544534,
        "total_volume": 41921947,
        "high_24h": 4.64,
        "low_24h": 4.35,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 0.198258,
        "price_change_percentage_24h": 4.47249,
        "market_cap_change_24h": 146685778,
        "market_cap_change_percentage_24h": 4.38797,
        "circulating_supply": 753766667.0,
        "total_supply": 1000000000.0,
        "max_supply": 1000000000.0,
        "ath": 44.92,
        "ath_change_percentage": -89.69302,
        "ath_date": "2021-05-03T05:25:04.822Z",
        "atl": 1.03,
        "atl_change_percentage": 349.41039,
        "atl_date": "2020-09-17T01:20:38.214Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:22.866Z"
    },
    {
        "id": "leo-token",
        "symbol": "leo",
        "name": "LEO Token",
        "image": "https://assets.coingecko.com/coins/images/8418/large/leo-token.png?1558326215",
        "current_price": 3.57,
        "market_cap": 3316631917,
        "market_cap_rank": 21,
        "fully_diluted_valuation": 3513501228,
        "total_volume": 668472,
        "high_24h": 3.58,
        "low_24h": 3.51,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 0.02199378,
        "price_change_percentage_24h": 0.61965,
        "market_cap_change_24h": 20869413,
        "market_cap_change_percentage_24h": 0.63322,
        "circulating_supply": 930034336.9,
        "total_supply": 985239504.0,
        "max_supply": null,
        "ath": 8.14,
        "ath_change_percentage": -56.16486,
        "ath_date": "2022-02-08T17:40:10.285Z",
        "atl": 0.799859,
        "atl_change_percentage": 345.84588,
        "atl_date": "2019-12-24T15:14:35.376Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:05.455Z"
    },
    {
        "id": "true-usd",
        "symbol": "tusd",
        "name": "TrueUSD",
        "image": "https://assets.coingecko.com/coins/images/3449/large/tusd.png?1618395665",
        "current_price": 1.002,
        "market_cap": 3141596299,
        "market_cap_rank": 22,
        "fully_diluted_valuation": 3141596299,
        "total_volume": 406421099,
        "high_24h": 1.016,
        "low_24h": 0.996541,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": -0.001057343783206433,
        "price_change_percentage_24h": -0.10545,
        "market_cap_change_24h": 7198800,
        "market_cap_change_percentage_24h": 0.22967,
        "circulating_supply": 3138899450.65,
        "total_supply": 3138899450.65,
        "max_supply": null,
        "ath": 1.62,
        "ath_change_percentage": -38.15803,
        "ath_date": "2018-08-26T20:41:09.375Z",
        "atl": 0.88355,
        "atl_change_percentage": 13.28395,
        "atl_date": "2020-03-12T10:47:51.380Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:21.266Z"
    },
    {
        "id": "chainlink",
        "symbol": "link",
        "name": "Chainlink",
        "image": "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700",
        "current_price": 5.35,
        "market_cap": 2764613169,
        "market_cap_rank": 23,
        "fully_diluted_valuation": 5346380424,
        "total_volume": 167872561,
        "high_24h": 5.37,
        "low_24h": 5.0,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 0.235967,
        "price_change_percentage_24h": 4.61742,
        "market_cap_change_24h": 122688485,
        "market_cap_change_percentage_24h": 4.64391,
        "circulating_supply": 517099972.2305644,
        "total_supply": 1000000000.0,
        "max_supply": 1000000000.0,
        "ath": 52.7,
        "ath_change_percentage": -89.86664,
        "ath_date": "2021-05-10T00:13:57.214Z",
        "atl": 0.148183,
        "atl_change_percentage": 3503.60427,
        "atl_date": "2017-11-29T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:27.218Z"
    },
    {
        "id": "monero",
        "symbol": "xmr",
        "name": "Monero",
        "image": "https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1547033729",
        "current_price": 143.81,
        "market_cap": 2606304334,
        "market_cap_rank": 24,
        "fully_diluted_valuation": null,
        "total_volume": 71492114,
        "high_24h": 143.86,
        "low_24h": 137.22,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 4.81,
        "price_change_percentage_24h": 3.46016,
        "market_cap_change_24h": 86185383,
        "market_cap_change_percentage_24h": 3.41989,
        "circulating_supply": 18147820.3764146,
        "total_supply": null,
        "max_supply": null,
        "ath": 542.33,
        "ath_change_percentage": -73.52139,
        "ath_date": "2018-01-09T00:00:00.000Z",
        "atl": 0.216177,
        "atl_change_percentage": 66327.26913,
        "atl_date": "2015-01-14T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:23.340Z"
    },
    {
        "id": "cosmos",
        "symbol": "atom",
        "name": "Cosmos Hub",
        "image": "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960",
        "current_price": 8.9,
        "market_cap": 2604743799,
        "market_cap_rank": 25,
        "fully_diluted_valuation": null,
        "total_volume": 72598098,
        "high_24h": 8.94,
        "low_24h": 8.27,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 0.278319,
        "price_change_percentage_24h": 3.22754,
        "market_cap_change_24h": 82491228,
        "market_cap_change_percentage_24h": 3.27054,
        "circulating_supply": 292586163.827428,
        "total_supply": null,
        "max_supply": null,
        "ath": 44.45,
        "ath_change_percentage": -79.98305,
        "ath_date": "2022-01-17T00:34:41.497Z",
        "atl": 1.16,
        "atl_change_percentage": 666.95571,
        "atl_date": "2020-03-13T02:27:44.591Z",
        "roi": {
            "times": 88.0158399792235,
            "currency": "usd",
            "percentage": 8801.58399792235
        },
        "last_updated": "2023-06-21T05:13:29.842Z"
    },
    {
        "id": "okb",
        "symbol": "okb",
        "name": "OKB",
        "image": "https://assets.coingecko.com/coins/images/4463/large/WeChat_Image_20220118095654.png?1642471050",
        "current_price": 43.21,
        "market_cap": 2590372904,
        "market_cap_rank": 26,
        "fully_diluted_valuation": 12951864521,
        "total_volume": 6746416,
        "high_24h": 43.39,
        "low_24h": 41.04,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 1.54,
        "price_change_percentage_24h": 3.69885,
        "market_cap_change_24h": 91619661,
        "market_cap_change_percentage_24h": 3.66662,
        "circulating_supply": 60000000.0,
        "total_supply": 235957685.3,
        "max_supply": 300000000.0,
        "ath": 58.66,
        "ath_change_percentage": -26.39736,
        "ath_date": "2023-02-18T01:21:37.582Z",
        "atl": 0.580608,
        "atl_change_percentage": 7336.04991,
        "atl_date": "2019-01-14T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:24.000Z"
    },
    {
        "id": "ethereum-classic",
        "symbol": "etc",
        "name": "Ethereum Classic",
        "image": "https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png?1547034169",
        "current_price": 16.02,
        "market_cap": 2269796017,
        "market_cap_rank": 27,
        "fully_diluted_valuation": 3378175140,
        "total_volume": 89046001,
        "high_24h": 16.07,
        "low_24h": 14.99,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 0.701725,
        "price_change_percentage_24h": 4.58084,
        "market_cap_change_24h": 101478946,
        "market_cap_change_percentage_24h": 4.68008,
        "circulating_supply": 141569338.764189,
        "total_supply": 210700000.0,
        "max_supply": 210700000.0,
        "ath": 167.09,
        "ath_change_percentage": -90.40501,
        "ath_date": "2021-05-06T18:34:22.133Z",
        "atl": 0.615038,
        "atl_change_percentage": 2506.63976,
        "atl_date": "2016-07-25T00:00:00.000Z",
        "roi": {
            "times": 34.60095553895665,
            "currency": "usd",
            "percentage": 3460.0955538956646
        },
        "last_updated": "2023-06-21T05:13:29.462Z"
    },
    {
        "id": "stellar",
        "symbol": "xlm",
        "name": "Stellar",
        "image": "https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157",
        "current_price": 0.083828,
        "market_cap": 2251218330,
        "market_cap_rank": 28,
        "fully_diluted_valuation": 4183665772,
        "total_volume": 44502591,
        "high_24h": 0.083801,
        "low_24h": 0.078271,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 0.00372106,
        "price_change_percentage_24h": 4.64514,
        "market_cap_change_24h": 95400759,
        "market_cap_change_percentage_24h": 4.42527,
        "circulating_supply": 26905815681.0739,
        "total_supply": 50001787309.4738,
        "max_supply": 50001787309.4738,
        "ath": 0.875563,
        "ath_change_percentage": -90.44555,
        "ath_date": "2018-01-03T00:00:00.000Z",
        "atl": 0.00047612,
        "atl_change_percentage": 17470.08225,
        "atl_date": "2015-03-05T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:24.341Z"
    },
    {
        "id": "the-open-network",
        "symbol": "ton",
        "name": "Toncoin",
        "image": "https://assets.coingecko.com/coins/images/17980/large/ton_symbol.png?1670498136",
        "current_price": 1.39,
        "market_cap": 2049319216,
        "market_cap_rank": 30,
        "fully_diluted_valuation": 7033259449,
        "total_volume": 4495094,
        "high_24h": 1.4,
        "low_24h": 1.36,
        "onehour": 0.55,
        "tfhours": 0.23,
        "sevendays": 0.87,
        "price_change_24h": 0.00892721,
        "price_change_percentage_24h": 0.64539,
        "market_cap_change_24h": 9451202,
        "market_cap_change_percentage_24h": 0.46332,
        "circulating_supply": 1473591410.74313,
        "total_supply": 5057362773.99687,
        "max_supply": null,
        "ath": 5.29,
        "ath_change_percentage": -73.69095,
        "ath_date": "2021-11-12T06:50:02.476Z",
        "atl": 0.519364,
        "atl_change_percentage": 168.01216,
        "atl_date": "2021-09-21T00:33:11.092Z",
        "roi": null,
        "last_updated": "2023-06-21T05:13:25.129Z"
    },
];

export default coinPrices;