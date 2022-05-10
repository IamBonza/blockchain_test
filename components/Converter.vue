<template>
  <div>
    <div class="converter-container">
        <div class="converter">
          <div class="ammount-block">
            <div class="ammount">
              <input type="number" v-model="amount">
            </div>
          </div>
          <div class="currencies-block">
            <div class="currency">
              <template v-if="loading">
                <div class="loading-block"></div>
              </template>
              <template v-else>
                 <b-select v-if="!loading" v-model="firstSelectedCurencyId" @input="onCurrenciesPairChange">
                <option v-for="(curency) in fisrtSelectorAvailableCurrencies" :key="curency.id" :value="curency.id">
                  <template v-if="curency.id === 'tether'">
                      USD
                  </template>
                  <template v-else>
                      {{curency.name}}
                  </template>
                </option>
              </b-select>
              </template>
             
            </div>
            <div class="switcher">
              <button class="switcher-btn" @click="switchCurrencies">
                <span style="display:flex;align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="16px" width="16px" viewBox="0 0 24 24" class="sc-16r8icm-0 coGWQa"><path d="M6 16H20M20 16L17 19M20 16L17 13" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 8H4M4 8L7 11M4 8L7 5" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
              </button>
            </div>
            <div class="currency">
               <template v-if="loading">
                <div class="loading-block"></div>
              </template>
              <template v-else>
                <b-select v-if="!loading" v-model="secondSelectedCurencyId" @input="onCurrenciesPairChange">
                <option v-for="curency in vsAvailableCruncies" :key="curency.id" :value="curency.id">
                  <template v-if="curency.id === 'tether'">
                      USD
                  </template>
                  <template v-else>
                      {{curency.name}}
                  </template>
                </option>
              </b-select>
              </template>
            </div>
          </div>
           <client-only>
            <div class="result-block">
              <div v-if="firstSelectedCurrency" class="result" style="text-align:right">
                {{amount}}
                 <template v-if="firstSelectedCurrency.name === 'Tether'">
                      <span>Usd</span>
                  </template>
                  <template v-else>
                      <span>{{firstSelectedCurrency.name}}</span>
                  </template>
                <template v-if="firstSelectedCurrency.name === 'Tether'">
                      <span>(USD)</span>
                  </template>
                  <template v-else>
                      <span>({{firstSelectedCurrency.symbol}})</span>
                  </template>
              </div>
              
              <div style="text-align:center">=</div>
              <div v-if="secondSelectedCurrency" class="result" style="text-align:left">
                {{currentAmount}}
                <template v-if="secondSelectedCurrency.name === 'Tether'">
                      <span>Usd</span>
                  </template>
                  <template v-else>
                      <span>{{secondSelectedCurrency.name}}</span>
                  </template>
                 <template v-if="secondSelectedCurrency.name === 'Tether'">
                      <span>(USD)</span>
                  </template>
                  <template v-else>
                      <span>({{secondSelectedCurrency.symbol}})</span>
                  </template>
              </div>
              <div v-else>
                Nothing is selected
              </div>
            </div>
          </client-only>
        </div>
    </div>
    <client-only><chart :data='chartData' :secondData="firstSelectedCurrency" /></client-only>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      loading: true,
      amount: 1,
      chartData: null,
      availableCurencies: ['bitcoin', 'ethereum', 'tether'],
      vsCurrenciesShorts: {
        'bitcoin': 'btc',
        'ethereum': 'eth',
        'tether': 'usd'
      },
      firstSelectedCurencyId: 'bitcoin',
      secondSelectedCurencyId: 'tether',
      currentPrice: 0
    }
  },
  components: { 
    Chart: () => {if(process.client){return import('./Chart.vue') }}
    },
    computed: {
      vsAvailableCruncies(){
        if(typeof this.availableCurencies[0] === 'string') {
          return []
        }
        const filteredAvailableCurencies = this.availableCurencies.filter((c)=>{
          return c.id !== this.firstSelectedCurencyId
        })
        return filteredAvailableCurencies
      },

      fisrtSelectorAvailableCurrencies(){
        if(typeof this.availableCurencies[0] === 'string') {
          return []
        }
        const filteredAvailableCurencies = this.availableCurencies.filter((c)=>{
          return c.id !== this.secondSelectedCurencyId
        })
        return filteredAvailableCurencies
      },
      currentAmount() {
        const currentAmount =this.amount * this.currentPrice
        return currentAmount.toFixed(4)
      },

      firstSelectedCurrency() {
        if(typeof this.availableCurencies[0] === 'string') {
          return []
        }
        const currencyObject = this.availableCurencies.find((c)=> {
          return c.id === this.firstSelectedCurencyId
        })
        const currencyShortToUpperCase = currencyObject.symbol.toUpperCase()
        currencyObject.symbol = currencyShortToUpperCase
        return currencyObject
      },

      secondSelectedCurrency() {
          if(typeof this.availableCurencies[0] === 'string') {
            return []
          }
          const currencyObject = this.availableCurencies.find((c)=> {
            return c.id === this.secondSelectedCurencyId
          })
          return currencyObject
      },


    },
    methods: {
      ...mapActions('coingecko', ['getChartDataByTwoCurrencies', 'getCurencyDataById', 'getCurrentPriceOfCurrencyPair']),
      async getChartData() {
        const result = await this.getChartDataByTwoCurrencies()
        const chartData = result.map(element => {
          return Math.floor(element[1])
        });
        chartData.splice(-2, 1)
        this.chartData = chartData
      },
      async getDataOfCurencies() {
        this.availableCurencies.forEach(async (id, index)=>{
          const result = await this.getCurencyDataById(id)
          this.$set(this.availableCurencies, index, result)
        })
      },
      switchCurrencies() {
        const temp = this.firstSelectedCurencyId
        this.firstSelectedCurencyId = this.secondSelectedCurencyId
        this.secondSelectedCurencyId = temp
        this.onCurrenciesPairChange()
      },
      async onCurrenciesPairChange() {
        this.loading = true
        this.currentPrice = await this.getCurrentPriceOfCurrencyPair({currencyId: this.firstSelectedCurencyId, vsCurrency:this.vsCurrenciesShorts[this.secondSelectedCurencyId]})
        this.loading = false
      }
    },
    async mounted() {
      await this.getDataOfCurencies()
      await this.getChartData()
      console.log(this.firstSelectedCurrency)

      this.currentPrice = await this.getCurrentPriceOfCurrencyPair({currencyId: this.firstSelectedCurencyId, vsCurrency:this.vsCurrenciesShorts[this.secondSelectedCurencyId]})
      this.loading = false
    }

}
</script>

<style>
* {
    box-sizing: border-box;
  }

  select {
    width: 100px;
  }
 .converter-container {
     width: 100%;
     display: flex;     
 }
 .converter {
    background: rgb(210, 208, 208);
    padding: 24px;
    border-radius: 6px;
    min-height: 20px;
    margin: 20px auto;
    border: 0px;
    flex: 0 0 66.666667%;
    max-width: 80%;
 }

 .converter > div:not(:last-child) {
   margin-bottom: 20px;
 }
 .ammount-block {
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
 }

 .ammount > input {
   background-color: rgb(255, 255, 255);
    border: 1px solid rgb(207, 214, 228);
    border-radius: 4px;
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    max-width: 100%;
    outline: 0px;
    padding: 0px 16px;
    width: 100%;
    font-size: 14px;
    height: 40px;
    line-height: 21px;
 }

 .ammount-block > div:nth-child(2) {
    width: 50px;
}

.ammount-block > div:first-child {
    width: calc(50% - 25px);
}
.ammount-block > div:last-child {
    width: calc(50% - 25px);
}

.currencies-block {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.currency > input{
    background: rgb(255, 255, 255);
    color: rgb(73, 80, 87);
    border: 1px solid rgb(221, 221, 221);
    box-shadow: rgb(0 0 0 / 8%) 0px 1px 1px inset;
    width: 100%;
    height: 36px;
    min-height: 36px;
    font-size: 13px;
    border-radius: 3px;
    transition: all 0.2s ease-in-out 0s;
    overflow: visible;
    margin: 0px;
    outline: none;
    cursor: pointer;
}

.switcher {
  margin: 0 16px 0 16px;
}


.switcher-btn {
    transition: background 0.2s ease-in-out 0s;
    border-radius: 8px;
    font-weight: normal;
    display: inline-block;
    border: 1px solid transparent;
    margin: 0px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    padding: 0.375rem 0.75rem;
    font-size: 14px;
    line-height: 1.5;
    background: rgb(16, 112, 224);
    color: rgb(255, 255, 255);
    text-decoration: none !important;
    outline: none !important;
}

.result-block {
   display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.result-block > div:nth-child(2) {
    width: 50px;
}

.result-block > div:first-child {
    width: calc(50% - 25px);
}
.result-block > div:last-child {
    width: calc(50% - 25px);
}
.loading-block {
  width: 100px;
  height: 40px;
  background-color: #fff;
  border-radius: 4px;
}
</style>