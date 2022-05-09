<template>
  <div>
    <div class="converter-container">
        <div class="converter">
          <div class="ammount-block">
            <div class="ammount">
              <input type="number" v-model="amount">
            </div>
            <div></div>
            <div></div>
          </div>
          <div class="currencies-block">
            <div class="currency">
              <select v-if="!loading" v-model="firstSelectedCurency">
                <option v-for="(curency, index) in availableCurencies" :key="curency.id" :value="curency.id" :default="index === 0">{{curency.name}}</option>
              </select>
            </div>
            <div class="switcher">
              <button class="switcher-btn">
                <span style="display:flex;align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="16px" width="16px" viewBox="0 0 24 24" class="sc-16r8icm-0 coGWQa"><path d="M6 16H20M20 16L17 19M20 16L17 13" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 8H4M4 8L7 11M4 8L7 5" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
              </button>
            </div>
            <div class="currency">
              <select v-if="!loading" v-model="secondSelectedCurency">
                <option v-for="curency in vsAvailableCruncies" :key="curency.id" :value="curency.id">{{curency.name}}</option>
              </select>
              
            </div>
          </div>
          <div class="result-block">
            <div class="result" style="text-align:right">
              {{amount}} Ethereum (ETH)
            </div>
            <div style="text-align:center">=</div>
            <div class="result" style="text-align:left">
              0,07466699 Bitcoin (BTC)
            </div>
          </div>
        </div>
    </div>
    <client-only><chart :data='chartData' /></client-only>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      loading: true,
      amount: 10,
      chartData: null,
      availableCurencies: ['bitcoin', 'ethereum', 'tether'],
      firstSelectedCurency: '',
      secondSelectedCurency: ''
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
          return c.id !== this.firstSelectedCurency
        })
      }
    },
    methods: {
      ...mapActions('coingecko', ['getChartDataByTwoCurrencies', 'getCurencyDataById']),
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
        console.log(this.availableCurencies)
      }
    },
    mounted() {
      this.getDataOfCurencies()
      this.getChartData()
      this.loading = false
    }

}
</script>

<style>
* {
    box-sizing: border-box;
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
    border-radius: 8px;
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
  /* justify-content: center; */
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
</style>