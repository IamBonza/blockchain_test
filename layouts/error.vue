<template>
    <div>
        <div id="error">
            <div class="error-status">{{error.statusCode}}</div>
            <div class="error-message">{{error.message}}</div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'error-layout',
    props: ['error']
}
</script>

<style scoped>
    #error {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
    }
</style>