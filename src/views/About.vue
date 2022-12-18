<template>
    <b-container fluid class="about__container p-0 m-0">
        
            <div>
                <Navbar />
            </div>
            <div>
                <Aboutpage />
            </div>
            <div  class="footer__container">
                <Footer />
            </div>
        
    </b-container>
</template>

<script> 
import Aboutpage from '../components/Aboutpage.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
    name: "about",
    components: { Navbar, Footer, Aboutpage }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&family=Quando&display=swap');
.about__container {
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