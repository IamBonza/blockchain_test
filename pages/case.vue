<template>
  <div>
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
      </div>
      <div class="asset bitcoin-asset">
        <div class="asset-name">
          <div class="thumbnail">
            <img src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579" alt="">
          </div>
          <div class="name">Bitcoin</div>
        </div>
        <div class="ammount">0.073 BTC / 432 USD</div>
      </div>
      <div class="asset ethereum-asset">
        <div class="asset-name">
          <div class="thumbnail">
            <img src="https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880" alt="">
          </div>
          <div class="name">Ethereum</div>
        </div>
        <div class="ammount">0.00132 ETH /  534 USD</div>
      </div>
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

</style>