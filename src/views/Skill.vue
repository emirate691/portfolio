<template>
<b-container fluid class="skillpage__container p-0 m-0">
    <div>
        <Navbar />
    </div>
    <div class="skills">
        <Skills />
    </div>
    <div class="footer__container">
        <Footer />
    </div>

</b-container>
    
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Skills from '../components/Skills.vue'
import Footer from '../components/Footer.vue'
export default {
    name: "Skillpahe",
    components: { Navbar, Skills, Footer }
}
</script>

<style lang="scss" scoped>
.skillpage__container {
    //background-color: #E5E5E5;
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