<template>
  <div>
    <converter/>
    <div class="currency-selector">
      <div class="btc"></div>
      <div class="eth"></div>
    </div>
  </div>
</template>

<script>

import Converter from '~/components/Converter.vue'

export default {
  components: { 
    Converter, 
    },
  name: 'IndexPage'
}
</script> 

<style>
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>
