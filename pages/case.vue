<template>
  <div class="case-container">
    <div class="balance-block">
      <div class="current-balance">Текущий баланс</div>
      <div class="balance">$1920.27</div>
    </div>
    <div class="assets-block">
      <div class="asset usd-asset">
        <div class="asset-name">
          <div class="thumbnail">
            <img src="@/static/images/dollar-symbol.png" alt="">
          </div>
          <div class="name">USD</div>
        </div>
        <div class="ammount">$1000</div>
        <div class="add-block">
          <button class="add-btn">+</button>
          <button class="substract-btn">-</button>
        </div>
      </div>
      <div class="asset bitcoin-asset">
        <div class="asset-name">
          <div class="thumbnail">
            <img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579" alt="">
          </div>
          <div class="name">Bitcoin</div>
        </div>
        <div class="ammount">0.073 BTC / 432 USD</div>
        <div class="add-block">
          <button class="add-btn">+</button>
          <button class="substract-btn">-</button>
        </div>
      </div>
      <div class="asset ethereum-asset">
        <div class="asset-name">
          <div class="thumbnail">
            <img src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880" alt="">
          </div>
          <div class="name">Ethereum</div>
        </div>
        <div class="ammount">0.00132 ETH /  534 USD</div>
        <div class="add-block">
          <button class="add-btn">+</button>
          <button class="substract-btn">-</button>
        </div>
      </div>
    </div>
    <div class="popup">
      <input type="number">
      <button>Добавить</button>
    </div>
    <div class="popup">
      <input type="number">
      <button>Вычесть</button>
    </div>
  </div>
</template>

<script>
export default {
    layout: 'case'
}
</script>

<style scoped>
  img {
    width: 50px;
    height: 50px;
  }
  .case-container {
    width: 100%;
    padding: 16px;
    position: relative;
  }

  .asset {
    display: flex;
    align-items: center;
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

</style>