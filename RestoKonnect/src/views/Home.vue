<script setup>
    import Restaurant from "../components/Restaurants.vue";
    import Logo2 from "../components/Logo2.vue"
    import Footer2 from "../components/Footer2.vue"

</script>

<template>
    <section class="">
        <div class="bg-rgreen-100 p-10">
            <div class="flex justify-between items-center">
                <div>
                    <Logo2/>
                </div>
                <div class="flex gap-10 items-center">
                    <button>
                        <img src="../img/icons/Ellipse 4.png" alt="">
                    </button>
                    <button>
                        <img class="pb-2" src="../img/icons/garden_cart.png" alt="">
                    </button>
                </div>
            </div>
            <div class="my-24">
                <div class="flex justify-center mb-5">
                    <p class="text-4xl text-white font-extrabold break-words">Welcome! Mowa</p>
                </div>
                <div class="flex justify-center">
                    <div class="flex gap-2 bg-white p-3 rounded-3xl w-96">
                        <button>
                            <img src="../img/icons/search.png" alt="">
                        </button>
                        <input type="text" name="search" id="search" class="p-1" placeholder="search">
                    </div>
                </div>
            </div>     
        </div>
        <div class="container2">
            <h2 class="text-rgreen-100 text-2xl lg:text-4xl font-poppins font-semibold break-words lg:ml-10 mt-5">Explore Restaurants</h2>
            <div class="border-2 mx-10 rounded-lg mt-5 border-rgreen-100">
                <Restaurant/>
            </div>
        </div>
        <div class="bg-rgreen-100">
            <Footer2/>
        </div>
    </section>
</template>