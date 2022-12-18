<template>
    <div>
        <b-row class="navbar__container">
            <b-col class="col-md-12  w-100">
                <b-navbar toggleable="lg" class="mx-auto text-center" type="light" variant="clear">
                    <div class="d-lg-none">
                        <b-navbar-brand href="/" class="d-flex align-items-left justify-content-left">
                            <img class="brand-logo" style="height: 40px;" src="@/assets/laptop-code-solid.svg">
                           
                        </b-navbar-brand>
                    </div>
                    <b-navbar-toggle target="nav-collapse" class="nav-item"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                        <b-row class="mx-auto w-100 justify-content-center align-items-center">
                            

                            <b-col class="d-none d-lg-block">
                                <b-navbar-brand href="/" class="d-flex align-items-left justify-content-left">
                                    <img class="brand-logo" style="height: 40px;" src="@/assets/laptop-code-solid.svg">
                                    
                                </b-navbar-brand>
                            </b-col>

                            <b-col class="w-100">
                                <b-navbar-nav class="mx-5 px-5">
                                    <b-nav-item href="/about" class="nav-item">About</b-nav-item>
                                    <b-nav-item href="/skill" class="nav-item mx-3">Skills</b-nav-item>
                                    <b-nav-item href="/project" class="nav-item mx-3">Project</b-nav-item>
                                    <b-nav-item href="/blogs" class="nav-item mx-3">Blogs</b-nav-item>
                                    <b-nav-item href="/contact" class="nav-item mx-3">Contact</b-nav-item>
                                    <b-nav-item href="/resume" class="nav-item mx-3">Resume</b-nav-item>
                                    
                                </b-navbar-nav>
                            </b-col>
                        </b-row>
                    </b-collapse>

                </b-navbar>
            </b-col>
        </b-row>
    </div>
</template>

<style lang="scss" scoped>
.navbar__container {
    background-color: #E5E5E5 !important; 
    
    .navbar-brand {
        color: #11271F !important;
    }
    .nav-item {
        color: #11271F !important;
        //font-size:20px;
        a {
            color: #11271F !important;
            &:hover {
                color: #19392d !important;
            }
        }
    }
}


</style> 