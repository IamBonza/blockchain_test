<template>
    <div>
        <nav>
            <nuxt-link to="/">
                <button class="btn">Назад</button>
            </nuxt-link>
        </nav>
        <nuxt/>
        <b-loading :active="loading"></b-loading>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState('app', ['loading'])
    }
  }

</script>

<style scoped>
  nav {
    padding: 8px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: #e4e4e4;
  }

  .btn {
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
</style>
