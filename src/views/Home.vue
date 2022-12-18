<template>
    <b-container fluid class="homepage__container p-0 m-0">
        
            
            <div>
                <Navbar />
            </div>
            <div class="">
                <Homepage />
            </div>
            <div class="footer__container">
                <Footer />
            </div>
        
       
    </b-container>
</template>
<script>

import Homepage from '../components/Homepage.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
    name: "Home",
    components: { Navbar, Footer, Homepage },

    data() {
      return {

      };
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&family=Quando&display=swap');
.homepage__container {
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    .footer__container {
        margin-top: auto;
    }
}
</style>