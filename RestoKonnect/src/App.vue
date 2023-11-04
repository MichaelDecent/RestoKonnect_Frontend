<template>
  <main class="bg-white w-full p-5 md:p-10">
    <div>
      <header class="flex flex-col md:flex-row justify-between p-5 items-center">
        <div class="flex gap-3">
          <img src="./img/ramen_dining.png" alt="logo_icon">
          <img src="./img/Restokonnet.png" alt="logo">
        </div>
        <nav class="mt-4 md:mt-0">
          <ul class="flex space-x-4 md:space-x-6">
            <li class="relative group">
                <a href="#" class="text-green-600 hover:text-yellow-600 transition duration-300 ease-in-out relative group text-lg md:text-2xl font-semibold">
                    Home
                    <div class="absolute w-full h-1 bg-yellow-600 bottom-0 left-0 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100 duration-300 ease-in-out"></div>
                </a>
            </li>
            <li class="relative group">
                <a href="#" class="text-green-600 hover:text-yellow-600 transition duration-300 ease-in-out relative group text-lg md:text-2xl font-semibold">
                    About Us
                    <div class="absolute w-full h-1 bg-yellow-600 bottom-0 left-0 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100 duration-300 ease-in-out"></div>
                </a>
            </li>
            <li class="relative group">
                <a href="#" class="text-green-600 hover:text-yellow-600 transition duration-300 ease-in-out relative group text-lg md:text-2xl font-semibold">
                    Vendor
                    <div class="absolute w-full h-1 bg-yellow-600 bottom-0 left-0 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100 duration-300 ease-in-out"></div>
                </a>
            </li>
            <li class="relative group">
                <a href="#" class="text-green-600 hover:text-yellow-600 transition duration-300 ease-in-out relative group text-lg md:text-2xl font-semibold">
                    Customer
                    <div class="absolute w-full h-1 bg-yellow-600 bottom-0 left-0 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100 duration-300 ease-in-out"></div>
                </a>
            </li>
            <!-- Add similar code for other navigation links -->
          </ul>
        </nav>
      </header>
      <div class="mt-5 mx-3 md:mx-5 flex flex-col md:flex-row items-center justify-around">
        <div class="md:w-1/2">
            <div class="text-green-600 text-4xl md:text-5xl lg:text-8xl font-poppins font-extrabold leading-80 tracking-widest break-words">
            Connect with your favorite Restaurant meals.
            </div>
            <div class="w-full text-gray-800 text-base md:text-lg lg:text-4xl font-poppins font-medium leading-30 break-words">
            Savor dishes born from passion, love, and expertise, all conveniently accessible through our seamless and intuitive platform.
            </div>
            <button class="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded mt-2">Get Started</button>
        </div>
        <div class="md:w-1/2 mt-5 md:mt-0">
            <img src="./img/image 5.png" alt="burger image" class="w-full h-auto">
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
            <div class="text-green-600 lg:text-4xl font-bold font-helvetica break-words my-6">
                Why Choose RestoKonnect
            </div>
            <div class="border-2 rounded-lg border-green-400 w-5/6 overflow-hidden">
                <div class="flex justify-between my-7 lg:mx-24 items-center">
                    <div class="lg:my-24 lg:mx-2 p-1">
                        <p class="lg:text-4xl font-semibold break-words text-green-600">We can get your favorite Meals delivered Right to your door step.</p>
                    </div>
                    <div class="p-1">
                        <img class="rounded-lg h-2/3 lg:h-full" src="./img/Frame 52.png" alt="frame1">
                    </div>
                </div>
            </div>
            <div class="border-2 rounded-lg border-green-400 w-5/6 overflow-hidden">
                <div class="flex justify-between my-7 lg:mx-24 items-center">
                    <div class="p-1">
                        <img class="rounded-lg h-2/3 lg:h-full" src="./img/Frame 52 (1).png" alt="frame1">
                    </div>
                    <div class="lg:my-24 lg:mx-2 p-1">
                        <p class="lg:text-4xl font-semibold break-words text-green-600">Get your to connect with the best Food Vendors in Nigeria .</p>
                    </div>
                </div>
            </div>
            <div class="border-2 rounded-lg border-green-400 w-5/6 overflow-hidden">
                <div class="flex justify-between my-7 lg:mx-24 items-center">
                    <div class="lg:my-24 lg:mx-2 p-1">
                        <p class="lg:text-4xl font-semibold break-words text-green-600">Affordable Delivery fees and 500N off on your first purchase.</p>
                    </div>
                    <div class="p-1">
                        <img class="rounded-lg h-2/3 lg:h-full" src="./img/image 8.png" alt="frame1">
                    </div>
                </div>
            </div>
            <div class="border-2 rounded-lg border-green-400 w-5/6 overflow-hidden">
                <div class="flex justify-between my-7 lg:mx-24 items-center">
                    <div class="p-1">
                        <img class="rounded-lg h-2/3 lg:h-full" src="./img/Frame 52 (2).png" alt="frame1">
                    </div>
                    <div class="lg:my-24 lg:mx-2 p-1">
                        <p class="lg:text-4xl font-semibold break-words text-green-600">Swift and timely delivery on every meal you order. </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-green-600">
            <div class="flex justify-center my-7 pt-8 px-2 flex-wrap items-center">
                <h2 class="text-white break-words md:text-4xl font-bold text-sm">Register to become one of restoconnect team </h2>
            </div>
            <div class="flex justify-around p-2 gap-2">
                <div>
                    <img src="./img/food_vendor.png" alt="food_vendor">
                    <p class="text-white lg:text-2xl font-semibold lg:ml-20 lg:my-6 ml-10">Vendor</p>
                </div>
                <div class="">
                    <img src="./img/Dispatch_rider.png" alt="disptch_rider">
                    <p class="text-white lg:text-2xl font-semibold lg:ml-20 lg:my-6 ml-10">Delivery</p>
                </div>
            </div>
        </section>
        <footer class="">
            <div class=" border-y-2 border-green-500 flex justify-around mt-10 items-center">
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
    </div>
  </main>
</template>
