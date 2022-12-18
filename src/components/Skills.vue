<template>
    <div class="skillpage h-100 p-0 m-0 position-relative w-100" align-v="stretch">
       
        <div class="skill__content container">
            <div class="d-flex justify-content-center align-items-center">
                <div class="skill pt-5">
                    <h6 class="text-white mx-5 mt-5" style="font-size:28px">Skills</h6>
                </div>
            </div>
            <div class="skills-btn d-flex justify-content-center align-items-center pt-5">
                <b-row class="">
                    <b-col class="cols-sm-12">
                        <div class="fontend-btn">
                            <b-button 
                                variant="" class="btn btn-dark mt-4" 
                                style="border-radius:50px; border:4px solid #ffffff"
                                @click="toggle"
                                
           
                            >
                                Frontend
                            </b-button>
                            
                        </div>

                    </b-col>
                    
                    <b-col class="cols-sm-12">
                        <div class="fontend-btn">
                            <b-button variant="clear" class="btn btn-dark mt-4" style="border-radius:50px; border:4px solid #ffffff">
                                Backend
                            </b-button>
                        </div>
                    </b-col>
                    <b-col class="d-block cols-sm-12 ">
                        <div class="fontend-btn">
                            <b-button variant="clear" class="btn btn-dark mt-4" style="border-radius:50px; border:4px solid #ffffff">
                                Other
                            </b-button>
                        </div>
                    </b-col>
                </b-row>
                
            </div>
            <div class="container py-5 text-white">
                <b-row class="my-3 mt-5 mb-5">
                    <b-col col-md="6">
                        <h3 class="">HTML </h3>
                    </b-col>
                    <b-col col-md="6">
                        <div class="html_percent text-center p-2">85%</div>
                    </b-col>
                </b-row>
                <b-row class="my-3 mt-5 mb-5">
                    <b-col col-md="6">
                        <h3>CSS</h3>
                    </b-col>
                    <b-col col-md="6">
                        <div class="css_percent text-center p-2">75%</div>
                    </b-col>
                </b-row>
                <b-row class="my-3 mt-5 mb-5">
                    <b-col col-md="6">
                        <h3>JAVASCRIPT</h3>
                    </b-col>
                    <b-col col-md="6">
                        <div class="javascript_percent text-center p-2">65%</div>
                    </b-col>
                </b-row>
                <b-row class="my-3 mt-5 mb-5">
                    <b-col col-md="6">
                        <h3>BOOTSTRAP</h3>
                    </b-col>
                    <b-col col-md="6">
                        <div class="bootstrap_percent text-center p-2">85%</div>
                    </b-col>
                </b-row>
                <b-row class="my-3 mb-5">
                    <b-col col-md="6">
                        <h3>VUE</h3>
                    </b-col>
                    <b-col col-md="6">
                        <div class="vue_percent text-center p-2">65%</div>
                    </b-col>
                </b-row>
            </div>

        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        
    },
    methods:{
        toggle() {
            if(!this.isActive) {
                this.isActive = true;
            }
            else {
                this.isActive = false
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.skillpage{
    background: url("../../public/images/skill__background.jpg") no-repeat  fixed;
    //-webkit-background-size:cover;
    background-size:cover;
    overflow-y:hidden ;
    
    //background:red;
    .html_percent{
        width:85%;
        height:40px;
        background:linear-gradient(to right, rgba(127, 29, 29, 1), rgba(220, 38, 38, 1), rgba(248, 113, 113, 1));
        
        
        
        
        padding:5px 10px;
    }
    .css_percent{
        width:75%;
        height:40px;
        background: linear-gradient(to right, rgba(30, 58, 138, 1), rgba(37, 99, 235, 1), rgba(96, 165, 250, 1));
        
        color:#ffffff;
        padding:5px 100px;
    }
    .javascript_percent {
        width:65%;
        height:40px;
        background: linear-gradient(to right, rgba(113, 63, 18, 1), rgba(202, 138, 4, 1), rgba(250, 204, 21, 1));
       
        color:#ffffff;
        padding:5px 100px;
    }
    .bootstrap_percent{
        width:85%;
        height:40px;
        background: linear-gradient(to right, rgba(88, 28, 135,1), rgba(147, 51, 234, 1), rgba(192, 132, 252,1));
        
        color:#ffffff;
        padding:5px 100px;
    }
    .vue_percent{
        width:65%;
        height:40px;
        background: linear-gradient(to right, rgba(34, 197, 94, 1), rgba(74, 222, 128, 1), rgba(134,239, 172, 1));
       
        color:#ffffff;
        padding:5px 100px;
    }
}
</style>