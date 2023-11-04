<template>
    <main class="bg-white w-screen h-screen p-10">
        <div>
            <header class="flex justify-between p-5 items-center">
                <div class="flex gap-3">
                    <img src="./img/ramen_dining.png" alt="logo_icon">           
                    <img src="./img/Restokonnet.png" alt="logo">
                </div>
                <nav class="flex gap-5">
                    <button class="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded mt-2">Home</button>
                    <button class="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded mt-2">Vendor</button>
                    <button class="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded mt-2">Customer</button>
                    <button class="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded mt-2">About Us</button>
                </nav>
            </header>
            <div class="mt-5 mx-5 flex items-center justify-around">
                <div>
                    <div class="smw-auto text-green-600 text-5xl lg:text-8xl font-poppins font-extrabold leading-80 tracking-widest break-words">
                    Connect with your favorite Restaurant meals.
                    </div>
                    <div class="w-full text-gray-800 text-lg lg:text-4xl font-poppins font-medium leading-30 break-words">
                    Savor dishes born from passion, love, and expertise, all conveniently accessible through our seamless and intuitive platform.
                    </div>
                    <button class="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded mt-2">Get Started</button>
                </div>         
                <div class="lg:w-4/5 h-4/5">
                    <img src="./img/image 5.png" alt="burger image">
                </div>
            </div>
        </div>
        <div class="bg-green-600 mt-3 p-3 ">
            <h2 class="text-white text-2xl lg:text-4xl font-poppins font-semibold break-words">Explore Restaurants</h2>
            <div class="mt-5 flex flex-wrap gap-4 lg:justify-around">
                <div class="max-w-xs rounded-lg overflow-hidden shadow-lg">
                    <img class="w-full" src="./img/restaurant_banner2.jpeg" alt="Card Image">
                    <div class="px-2 py-4 bg-white flex items-center justify-between">
                        <span class="font-bold text-xl mb-2 w-auto mt-3">KAYON KITCHEN</span>
                        <button class="bg-green-600 hover:bg-green-500 text-white font-semibold p-2 rounded">View Menu</button>
                    </div>
                </div>
                <div class="max-w-xs rounded-lg overflow-hidden shadow-lg">
                    <img class="w-full" src="./img/restaurant_banner2.jpeg" alt="Card Image">
                    <div class="px-2 py-4 bg-white flex items-center justify-between">
                        <span class="font-bold text-xl mb-2 w-auto mt-3">KAYON KITCHEN</span>
                        <button class="bg-green-600 hover:bg-green-500 text-white font-semibold p-2 rounded">View Menu</button>
                    </div>
                </div>
                <div class="max-w-xs rounded-lg overflow-hidden shadow-lg">
                    <img class="w-full" src="./img/restaurant_banner2.jpeg" alt="Card Image">
                    <div class="px-2 py-4 bg-white flex items-center justify-between">
                        <span class="font-bold text-xl mb-2 w-auto mt-3">KAYON KITCHEN</span>
                        <button class="bg-green-600 hover:bg-green-500 text-white font-semibold p-2 rounded">View Menu</button>
                    </div>
                </div>
                <div class="max-w-xs rounded-lg overflow-hidden shadow-lg">
                    <img class="w-full" src="./img/restaurant_banner2.jpeg" alt="Card Image">
                    <div class="px-2 py-4 bg-white flex items-center justify-between">
                        <span class="font-bold text-xl mb-2 w-auto mt-3">KAYON KITCHEN</span>
                        <button class="bg-green-600 hover:bg-green-500 text-white font-semibold p-2 rounded">View Menu</button>
                    </div>
                </div>
                <div class="max-w-xs rounded-lg overflow-hidden shadow-lg">
                    <img class="w-full" src="./img/restaurant_banner2.jpeg" alt="Card Image">
                    <div class="px-2 py-4 bg-white flex items-center justify-between">
                        <span class="font-bold text-xl mb-2 w-auto mt-3">KAYON KITCHEN</span>
                        <button class="bg-green-600 hover:bg-green-500 text-white font-semibold p-2 rounded">View Menu</button>
                    </div>
                </div>
            </div>
            <div class="flex justify-end mx-5">
                <button class="bg-white hover:bg-green-500 text-green-600 font-semibold py-2 px-4 rounded mt-2">See More</button>
            </div>
        </div>
        <section class="flex flex-wrap gap-3 justify-center">
            <div class="text-green-600 text-4xl font-bold font-helvetica break-words my-6">
                Why Choose RestoKonnect
            </div>
            <div class="border-2 rounded-lg border-green-400 w-5/6 overflow-hidden">
                <div class="flex justify-between my-7 mx-24">
                    <div class=" my-24 mx-2">
                        <p class=" text-3xl font-semibold break-words text-green-600 ">We can get your favorite Meals delivered Right to your door step.</p>
                    </div>
                    <img class="rounded-lg" src="./img/Frame 52.png" alt="frame1">
                </div>
            </div>
            <div class="border-2 rounded-lg border-green-400 w-5/6 overflow-hidden">
                <div class="flex justify-between my-7 mx-24">
                    <img class="rounded-lg" src="./img/Frame 52 (1).png" alt="frame1">
                    <div class=" my-24 mx-2">
                        <p class=" text-3xl font-semibold break-words text-green-600 ">Get your to connect with the best Food Vendors in Nigeria .</p>
                    </div>
                </div>
            </div>
            <div class="border-2 rounded-lg border-green-400 w-5/6 overflow-hidden">
                <div class="flex justify-between my-7 mx-24">
                    <div class=" my-24 mx-2">
                        <p class=" text-3xl font-semibold break-words text-green-600 ">Affordable Delivery fees and 500N off on your first purchase.</p>
                    </div>
                    <img class="rounded-lg" src="./img/image 8.png" alt="frame1">
                </div>
            </div>
            <div class="border-2 rounded-lg border-green-400 w-5/6 overflow-hidden">
                <div class="flex justify-between my-7 mx-24">
                    <img class="rounded-lg" src="./img/Frame 52 (2).png" alt="frame1">
                    <div class=" my-24 mx-2">
                        <p class=" text-3xl font-semibold break-words text-green-600 ">Swift and timely delivery on every meal you order. </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-green-600">
            <div class="flex justify-center my-7 pt-8">
                <h2 class="text-white break-words text-4xl font-bold">Register to become one of restoconnect team </h2>
            </div>
            <div class="flex justify-around">
                <div>
                    <img src="./img/food_vendor.png" alt="food_vendor">
                    <p class="text-white text-2xl font-semibold ml-20 my-6">Vendor</p>
                </div>
                <div class="">
                    <img src="./img/Dispatch_rider.png" alt="disptch_rider">
                    <p class="text-white text-2xl font-semibold ml-20 my-6">Delivery</p>
                </div>
            </div>
        </section>
        <footer class="">
            <div class=" border-y-2 border-green-500 flex justify-around my-10 items-center">
                <div class="my-20">
                    <img src="./img/ramen_dining.png" alt=""> 
                    <img src="./img/Restokonnet.png" alt="logo">
                </div>
                <div class=" my-16">
                    <a class="flex gap-3 my-2" href="">
                        <img src="./img/icons/round-place-24px.png" alt="">
                        <span class="text-green-600">345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</span>
                    </a>
                    <a class="flex gap-3 my-2" href="">
                        <img src="./img/icons/round-phone-24px.png" alt="">
                        <span class="text-green-600">(+123) 456-7890</span>
                    </a>
                    <div class="flex gap-5 items-center mt-8 ml-2">
                        <p class="text-[#489B53]">Social Media</p>
                        <a href="">
                            <img src="./img/icons/linkedin black.1.png" alt="">
                        </a>
                        <a href="">
                            <img src="./img/icons/facebook black.1.png" alt="">
                        </a>
                        <a href="">
                            <img src="./img/icons/twitter black.1.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </main>
</template>