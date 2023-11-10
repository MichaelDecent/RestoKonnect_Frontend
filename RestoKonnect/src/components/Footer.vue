<script setup>
    import Logo from "../components/Logo.vue"
</script>
<template>
     <div class=" border-y-2 border-rgreen-100 flex justify-around mt-10 items-center">
        <div class="my-20">
            <Logo/>
        </div>
        <div class=" my-16">
                <a class="flex gap-3 my-2" href="">
                    <img src="../img/icons/round-place-24px.png" alt="">
                    <span class="text-rgreen-100  hover:text-ryellow transition duration-300 ease-in-out">345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</span>
                </a>
                <a class="flex gap-3 my-2" href="">
                    <img src="../img/icons/round-phone-24px.png" alt="">
                    <span class="text-rgreen-100  hover:text-ryellow transition duration-300 ease-in-out">(+123) 456-7890</span>
                </a>
                <div class="flex gap-5 items-center mt-8 ml-2">
                    <p class="text-rgreen-100">Social Media</p>
                    <a href="">
                        <img class="transform hover:scale-150 transition-transform duration-300 ease-in-out" src="../img/icons/linkedin black.1.png" alt="">
                    </a>
                    <a href="">
                        <img class="transform hover:scale-150 transition-transform duration-300 ease-in-out" src="../img/icons/facebook black.1.png" alt="">
                    </a>
                    <a href="">
                        <img class="transform hover:scale-150 transition-transform duration-300 ease-in-out" src="../img/icons/twitter black.1.png" alt="">
                    </a>
                </div>
        </div>
    </div>
</template>