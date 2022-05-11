<template>
    <div>
        <nav>
            <nuxt-link to="case">
                <button class="btn">Мой портфель</button>
            </nuxt-link>
        </nav>
        <nuxt/>
    </div>
</template>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    nav {
        padding: 8px;
        display: flex;
        flex-direction:row-reverse;
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
