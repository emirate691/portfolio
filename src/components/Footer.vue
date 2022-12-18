<template>
    <footer class="footer__container">
        <b-row class="">
            <b-col cols-sm="12">
                <div class="footer__container-logo mt-5">
                    <b-navbar-brand href="/" class="text-white d-flex align-items-center justify-content-center">
                        <img class="brand-logo" style="height: 40px;" src="@/assets/laptop-code-solid-footer.svg">
                        
                    </b-navbar-brand>
                </div>
            </b-col>
            <b-col cols-sm="12">
                <div class="mt-5">
                    <h6 class="font-weight-bold">Contact</h6>
                    <div class="my-3">
                        <b-navbar-nav>
                            <b-nav-item href="aderojus@gmail.com" class="mx-2 nav-item">Send Email:aderojus@gmail.com</b-nav-item>
                            <b-nav-item href="#" class="mx-2 nav-item">Phone:+234 8160238112</b-nav-item>
                            <b-nav-item href="#" class="mx-2 nav-item">Whatsapp: +234 9123115091</b-nav-item>
                            
                        </b-navbar-nav>
                    </div>
                </div>
            </b-col>
            <b-col cols-sm="12">
                <div class="mt-5">
                    <h6 class="font-weight-bold">Profile</h6>
                    <div class="my-3">
                        <b-navbar-nav>
                            <b-nav-item href="" class="mx-2 nav-item">Github</b-nav-item>
                            <b-nav-item href="#" class="mx-2 nav-item">LinkedIn</b-nav-item>
                            <b-nav-item href="#" class="mx-2 nav-item">Twitter</b-nav-item>
                            
                        </b-navbar-nav>
                    </div>
                </div>
            </b-col>
            <b-col cols-sm="12">
                <div class="mt-5">
                    <h6 class="font-weight-bold">Blogs</h6>
                    <div class="my-3">
                        <b-navbar-nav>
                            <b-nav-item href="aderojus@gmail.com" class="mx-2 nav-item">Medium.com</b-nav-item>
                            <b-nav-item href="#" class="mx-2 nav-item">Dev.to</b-nav-item>
                                                
                        </b-navbar-nav>
                    </div>
                </div>
            </b-col>
            <b-col cols-sm="12">
                <div class="mt-5">
                    <h6 class="font-weight-bold">Social</h6>
                    <div class="my-3">
                        <b-navbar-nav class="d-flex flex-row">
                            <b-nav-item href="#" class="mx-2 nav-item">
                                <img id="facebook-icon" height="20px" src="@/assets/facebook-f.svg">
                            </b-nav-item>
                            <b-nav-item href="#" class="mx-2 nav-item">
                                <img id="instagram-icon" height="20px" src="@/assets/instagram.svg">
                            </b-nav-item>
                            <b-nav-item href="#" class="mx-2 nav-item">
                                <img id="twitter-icon" height="20px" src="@/assets/twitter.svg">
                            </b-nav-item>
                            <b-nav-item href="#" class="mx-2 nav-item">
                                <img id="github-icon" height="20px" src="@/assets/github.svg">
                            </b-nav-item>
                            <b-nav-item href="#" class="mx-2 nav-item">
                                <img id="linkedin-icon" height="20px" src="@/assets/linkedin-in.svg">
                            </b-nav-item>
                        </b-navbar-nav>
                    </div>
                </div>
            </b-col>
        </b-row>
        <hr>
        <div class="text-center mx-auto p-3">
            © {{ currentYear }} Aderoju Surajudeen | All Rights Reserved
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            currentYear : new Date().getFullYear(),
        };
    }
}
</script>
<style lang="scss" scoped>
.footer__container {
    position: sticky;
    bottom: 0;
    color: white;
    background:#343a40;
    .nav-item {
        a {
            color: #ffffff !important;
            &:hover {
                color: #f0eeee !important;
            }
        }
        
    }
   
}
</style>