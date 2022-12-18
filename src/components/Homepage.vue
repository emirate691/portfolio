<template>
    <div class="homepage__container p-0 m-0 position-relative w-100" align-v="stretch">
        <b-row class="py-3 px-5">
            <b-col cols-sm="12" class="d-block justify-content-center align-items-center pt-5">
                <div class="py-5">
                    <div class="text-center">
                        <h1 class=""><span class="">Welcome</span></h1>
                    </div>
                    <div class="mx-5">
                        <h1><span class="name"> I am Surajudeen ADEROJU</span></h1>
                        <h2 class="">I build for the universe</h2>
                        <div class="d-flex flex-row justify-content-center align-items-center">
                            <span class="mx-2"><img src="@/assets/html-1.svg" height="20px"></span>
                            <span class="mx-2"><img src="@/assets/css-3.svg" height="20px"></span>
                            <span class="mx-2"><img src="@/assets/javascript-1.svg"  height="20px"></span>
                            <span class="mx-2"><img src="@/assets/bootstrap-5-1.svg" height="20px"></span>
                            <span class="mx-2"><img src="@/assets/vue-9.svg" height="20px"></span>

                        </div>

                    </div>
                    <div class="">
                       
                    </div>
                    
                </div>         
            </b-col>
        
            
            <b-col cols-sm="12" class="d-block justify-content-center align-items-center pt-5">
                
                <div class="profile d-none d-md-block"> 
                    <img class="profile__image text-center" height="300px" src="@/assets/../assets/landing_page_img.png" >
                   
                </div>
            </b-col>
        </b-row>
        <div class="profile__summary w-100 mt-5">
            <div class="profile__summary-detail container mb-5">
                <div class="m-5 pt-5">
                    <h1 class="text-white">Summary</h1>
                    <p class="text-white font-weight-bold" style="font-size:25px;">                                       
                    
                        I'm Software Engineer specialized in developing quality products for the community. i'm focused on providing solutions,
                         building accessible, human-centered products at Tronweb Integrated Services
                    </p>

                    <b-button variant="clear" style="border:1px solid #343a40; width:200px;  height:50px" class="mb-5 text-white">View my work</b-button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&family=Quando&display=swap');

.homepage__container {

    .profile {
       background: linear-gradient(116.88deg, rgba(255, 255, 255, 0.4) 1.79%, rgba(255, 255, 255, 0) 100.47%);
        box-shadow: 30px 40px 20px -30px rgba(4, 15, 21, 0.1);
        height:400px;
        border-radius:270px;
        
       
       

    }
     .profile__image{
        position: absolute;
        bottom:0;
        width: 25em;
        z-index: 1;
        border-radius:100%;
        left:120px;
        
       
    }
    .name{
        
    }
    .profile__summary{
        background: rgba(46, 36, 94, 0.4)
    }
    .profile__summary-detail{
        background: linear-gradient(116.88deg, rgba(30, 41, 59, 1) 1.79%, rgba(15, 23, 42, 1), 100.47%, rgba(0, 0, 0, 1) 67.66%);
        box-shadow: 30px 40px 20px -30px rgba(4, 15, 21, 0.1);
        //height:400px;
        border-radius: 10px;
    }
    
}
</style>