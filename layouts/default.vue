<template>
    <div>
        <nav>
            <nuxt-link to="case">
                <button>Мой портфель</button>
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
        display: flex;
        flex-direction:row-reverse;
        align-items: center;
        height: 56px;
        background-color: #e4e4e4;
    }
</style>