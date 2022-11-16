<template>
    <div class="auth-content">
        <button class="auth-button">
            <slot></slot>
        </button>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .auth-button{
        border-radius: 20px;
        background-color: $primary;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
    }
    .auth-content{
        margin: 2%;
        display: flex;
        justify-content: center;
    }
    .logo-auth {
        width: 30px;
    }
</style>
