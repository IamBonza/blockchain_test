export default {
    async getChartDataByTwoCurrencies({}, payload) {
        const currencyId = payload.currencyId
        const vsCurrency = payload.vsCurrency
        const result = await this.$axios(`https://api.coingecko.com/api/v3/coins/${currencyId}/market_chart?vs_currency=${vsCurrency}&days=14&interval=daily`)
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
    async getCurrentPricesOfAvailableCurrenciesInCaseById({}, id) {
        const result = await this.$axios(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false`)
        if (result.status === 200) {
          return result.data[id].usd
        }
        return null
      },

}
