<template>
  <div class="case-page-container">
    <div v-if="popupVisible" class="sublayer" @click.self="setPopupHide"></div>
    <div class="case-container" >
      <div class="balance-block">
        <h1>Текущий баланс</h1>
        <div v-if="!loading" class="balance">$ {{totalAmount.toLocaleString()}}</div>
      </div>
      <div class="assets-block">
        <div class="asset usd-asset">
          <div class="asset-name">
            <div class="thumbnail">
              <img src="@/static/images/dollar-symbol.png" alt="">
            </div>
            <div class="name">USD</div>
          </div>
          <div class="ammount">$ {{currentUsdAmount.toLocaleString()}}</div>
          <div class="add-block">
            <button class="add-btn" @click="setAddPopupVisible('Usd', true)">+</button>
            <button class="substract-btn" @click="setAddPopupVisible('Usd', false)">-</button>
          </div>
        </div>
        <div class="asset bitcoin-asset">
          <div class="asset-name">
            <div class="thumbnail">
              <img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579" alt="">
            </div>
            <div class="name">Bitcoin</div>
          </div>
          <div class="ammount">{{currentBitcoinAmount}} BTC / {{(currentBitcoinAmount * currentPrices.bitcoin).toFixed(2)}} USD</div>
          <div class="add-block">
            <button class="add-btn" @click="setAddPopupVisible('Bitcoin', true)">+</button>
            <button class="substract-btn" @click="setAddPopupVisible('Bitcoin', false)">-</button>
          </div>
        </div>
        <div class="asset ethereum-asset">
          <div class="asset-name">
            <div class="thumbnail">
              <img src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880" alt="">
            </div>
            <div class="name">Ethereum</div>
          </div>
          <div class="ammount">{{currentEthereumAmount}} ETH / {{(currentEthereumAmount * currentPrices.ethereum).toFixed(2)}} USD</div>
          <div class="add-block">
            <button class="add-btn" @click="setAddPopupVisible('Ethereum', true)">+</button>
            <button class="substract-btn" @click="setAddPopupVisible('Ethereum', false)">-</button>
          </div>
        </div>
      </div>
      <div class="popup" v-if="addPopupIsVisible">
        <input type="number" v-model="popupInput">
        <div>{{popupActiveCurrency}}</div>
        <button @click="changeAmount">{{popupBtn}}</button>
      </div>

    </div>
    <client-only><CaseChart :data="caseChartData"/></client-only>
  </div>
</template>

<script>
import PieChart from '~/components/CaseChart';
import {mapActions, mapState} from 'vuex'
export default {
  components: {
    CaseChart: () => {if(process.client){return import('../components/CaseChart.vue') }}
  },
    layout: 'case',
    data() {
      return {
        availableCurrenciesInCase: ['bitcoin', 'ethereum'],
        currentUsdAmount: 1100,
        currentBitcoinAmount: 0.73,
        currentEthereumAmount: 1.47,
        currentPrices: {
          bitcoin: 0,
          ethereum: 0
        },
        addPopupIsVisible: false,
        deductPopupIsVisible: false,
        popupVisible: false,
        popupInput: 0,
        popupActiveCurrency: null,
        popupInc: true,
      }
    },
    computed: {
      ...mapState('app', ['loading']),
      popupBtn() {
        return this.popupInc ? "Добавить" : "Отнять"
      },
      totalAmount() {
        return this.currentEthereumAmount * this.currentPrices.ethereum + this.currentBitcoinAmount * this.currentPrices.bitcoin + this.currentUsdAmount
      },
      caseChartData() {
        return [this.currentUsdAmount, this.currentBitcoinAmount * this.currentPrices.bitcoin, this.currentEthereumAmount * this.currentPrices.ethereum]
      }
    },
    methods: {
      ...mapActions('coingecko', ['getCurrentPricesOfAvailableCurrenciesInCaseById']),
      ...mapActions('app', ['changeLoadingState']),
      async getDataOfCurrentPrices() {
        const promisis = []
        const ids = []
        this.availableCurrenciesInCase.forEach((id)=>{
          promisis.push(this.getCurrentPricesOfAvailableCurrenciesInCaseById(id))
          ids.push(id)
          // this.$set(this.currentPrices, id, result)
        })
       const values = await Promise.all(promisis)
        values.forEach((value, index)=>{
          this.$set(this.currentPrices, ids[index], value)
        })
      },
      setAddPopupVisible(id, inc) {
        this.addPopupIsVisible = true
        this.popupVisible = true
        this.popupActiveCurrency = id
        this.popupInc = inc
      },

      setPopupHide() {
        this.addPopupIsVisible = false
        this.deductPopupIsVisible = false
        this.popupVisible = false
      },
      changeAmount() {

        switch (this.popupActiveCurrency) {
          case 'Usd':
            if(this.popupInc) {
              this.currentUsdAmount = this.currentUsdAmount + Number(this.popupInput)
              break
            }
            this.currentUsdAmount -= this.popupInput
            break

          case 'Bitcoin':
            if(this.popupInc) {
              this.currentBitcoinAmount += Number(this.popupInput)
              break
            }
            this.currentBitcoinAmount -= Number(this.popupInput)
            break
          case 'Ethereum':
            if(this.popupInc) {
              console.log(this.currentEthereumAmount, Number(this.popupInput), this.popupActiveCurrency)
              this.currentEthereumAmount += Number(this.popupInput)
              break
            }
            this.currentEthereumAmount -= Number(this.popupInput)
            break
        }
        this.popupInput = 0
        this.setPopupHide()
      }


    },
  async mounted() {
    console.log(this.loading)
    this.changeLoadingState(true)
    console.log(this.loading)
    await this.getDataOfCurrentPrices()
    this.changeLoadingState(false)
    console.log(this.loading)
  },

}
</script>

<style scoped>
  img {
    width: 50px;
    height: 50px;
  }
  .sublayer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 50%;
    background-color: black;
  }

  .case-page-container {
    position: relative;
    padding-top: 56px;
  }
  .case-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .balance-block {
    margin-bottom: 36px;
  }

  .balance {
    font-weight: bold;
    font-size: 36px;
  }

  .asset {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    border-bottom: 2px solid grey;
  }

  .asset > div {
    margin-right: 10px;
  }
  .asset-name {
    display: flex;
    align-items: center;
  }

  button {
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

  .add-btn  {
    width: 34px;
    height: 34px;
  }

  .substract-btn {
    width: 34px;
    height: 34px;

  }

  .popup {
    width: 200px;
    height: 200px;
    padding: 16px;
    position: absolute;
    left: calc(50% - 100px);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid grey;
    border-radius: 8px;
    background-color: #ffffff;
  }

  .popup > input {
    font-weight: bold;
    font-size: 36px;
    height: 36px;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  .popup > input:focus {
    outline: none;
  }

  @media (max-width: 800px) {
    .asset {
      flex-direction: column;
    }

    .asset > div {
      margin-bottom: 12px;
    }

  }

</style>
