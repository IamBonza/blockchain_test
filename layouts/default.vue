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
    nav {
        display: flex;
        flex-direction:row-reverse;
    }
</style>