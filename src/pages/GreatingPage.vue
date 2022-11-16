<template>
    <div>
        <div class="logo">
            <p
                style="margin : 0; font-size: 18px;"
            >
                Welcome to
            </p>
            <h2
                style="margin : 0"
            >
                Logo
            </h2>
        </div>
        <auth-button>
            <img
                src="src/assets/Google.png"
                alt="Google"
                class="logo-auth"
            >
            Continue with Google
        </auth-button>
        <auth-button>
            <img
                src="src/assets/GitHub.png"
                alt="Github"
                class="logo-auth"
            >
            Continue with Google
        </auth-button>
        <auth-button>
            <img
                src="src/assets/VK.png"
                alt="Vk"
                class="logo-auth"
            >
            Continue with Google
        </auth-button>
        <p class="rights">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
</template>

<script>
import AuthButton from 'src/components/UI/AuthButton.vue'

export default {
  components: {
    AuthButton
  }
}
</script>

<style lang="scss" scoped>
.logo {
    margin-top: 40%;
    padding-bottom: 50%;
    text-align: center;
}
.logo-auth{
   width: 35px;
   padding-right: 5px;
}
.rights{
    display: flex;
    justify-content: center;
    color: gray;
    margin-top: 60%;
}
</style>
