export default {
    async getChartDataByTwoCurrencies({}, payload) {
        const result = await this.$axios('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily')
        if (result.status === 200) {
            return result.data.prices
        }
            return null
    },
    async getCurencyDataById({}, id) {
        const result = await this.$axios(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`)
        if (result.status === 200) {
            return result.data
        }
            return null

    },
    async getCurrentPriceOfCurrencyPair({}, payload) {
        const currencyId = payload.currencyId
        const vsCurrency = payload.vsCurrency

        const result = await this.$axios(`https://api.coingecko.com/api/v3/coins/${currencyId}/market_chart?vs_currency=${vsCurrency}&days=1&interval=daily`)
        if (result.status === 200) {
            return result.data.prices[1][1]
        }
            return null
    },
    
}