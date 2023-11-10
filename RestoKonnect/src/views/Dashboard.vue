<script setup>
    import Logo from "../components/Logo.vue"
    import axios from "axios";
    import { ref } from "vue";
    import { useRoute } from "vue-router";


    const restaurantData = ref({
        name: '',
        address: '',
    });

    const imagefile = ref();
    const currentPath = ref("")
    const route = useRoute()

    currentPath.value = route.path
    console.log(currentPath.value)

    const handleFileChange = (event) => {
      imagefile.value = event.target.files[0];
    };

    const submitForm = async () => {
        try {
            const formData = new FormData();
            formData.append('name', restaurantData.value.name)
            formData.append('address', restaurantData.value.address)
            formData.append('image', imagefile.value)

            const response = await axios.post(`https://restokonnectapi-8d0b7b86e6bb.herokuapp.com/api/v1${currentPath.value}`, formData);
            alert("upload successful")

        } catch (error) {
            alert(error)
            console.error('Upload Failed:', error);
        }

    };

</script>
<template>
    <section class="bg-[#F2FCF2]">
        <div class="p-10">
            <Logo/>
            <div class="my-10">
                <h1 class="text-3xl font-bold">Your Restaurant</h1>
                <span>Fill in your resturant details</span>
            </div>
            <div class="flex justify-center">
                <form @submit.prevent="submitForm" @change="handleFileChange" action="" class=" w-4/5">
                    <div class="w-1/2">
                        <label for="name" class="block text-xl font-semibold">Name of Restaurant</label>
                        <input v-model="restaurantData.name" type="text" name="name" id="name" class="w-full border-2 rounded p-3" placeholder="Name of Restaurant" required>
                        <div>
                            <div class="flex justify-end">
                                <button class="bg-rgreen-100 hover:bg-ryellow text-white font-semibold p-2 rounded transform hover:scale-105 transition-transform duration-300 ease-in-out mt-5" >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <label for="image" class="block text-xl font-semibold">Restaurant Wallpaper</label>
                        <input v-bind="restaurantData.image" type="file" name="image" id="image" class="w-full border-2 rounded p-3" required>
                        <div>
                            <div class="flex justify-end">
                                <button class="bg-rgreen-100 hover:bg-ryellow text-white font-semibold p-2 rounded transform hover:scale-105 transition-transform duration-300 ease-in-out mt-5" >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <label for="address" class="block text-xl font-semibold">Restaurant Address</label>
                        <input v-model="restaurantData.address" type="text" name="address" id="address" class="w-full border-2 rounded p-3" placeholder="Restaurant Address" required>
                        <div>
                            <div class="flex justify-end">
                                <button class="bg-rgreen-100 hover:bg-ryellow text-white font-semibold p-2 rounded transform hover:scale-105 transition-transform duration-300 ease-in-out mt-5" >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="w-1/2 text-white bg-rgreen-100 hover:bg-ryellow font-semibold rounded-lg lg:text-lg px-5 py-2.5 text-center mt-5">Upload</button>
                </form>
            </div>
        </div>
        <div class="p-10">
            <div class="my-10">
                <h1 class="text-3xl font-bold">Your Menu</h1>
                <span>Upload images of your meals and add a description.</span>
            </div>
            <div class="flex justify-center">
                <form action="" class=" w-4/5">
                    <div class="w-1/2">
                        <label for="name" class="block text-xl font-semibold">Name of Food</label>
                        <input type="text" name="name" id="name" class="w-full border-2 rounded p-3" placeholder="Name of Restaurant" required>
                        <div>
                            <div class="flex justify-end">
                                <button class="bg-rgreen-100 hover:bg-ryellow text-white font-semibold p-2 rounded transform hover:scale-105 transition-transform duration-300 ease-in-out mt-5" >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <label for="image" class="block text-xl font-semibold">Image of Food</label>
                        <input type="file" name="image" id="image" class="w-full border-2 rounded p-3" required>
                        <div>
                            <div class="flex justify-end">
                                <button class="bg-rgreen-100 hover:bg-ryellow text-white font-semibold p-2 rounded transform hover:scale-105 transition-transform duration-300 ease-in-out mt-5" >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2">
                        <label for="address" class="block text-xl font-semibold">Price</label>
                        <input type="text" name="address" id="address" class="w-full border-2 rounded p-3" placeholder="Restaurant Address" required>
                        <div>
                            <div class="flex justify-end">
                                <button class="bg-rgreen-100 hover:bg-ryellow text-white font-semibold p-2 rounded transform hover:scale-105 transition-transform duration-300 ease-in-out mt-5" >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="w-1/2 text-white bg-rgreen-100 hover:bg-ryellow font-semibold rounded-lg lg:text-lg px-5 py-2.5 text-center mt-5">Upload</button>
                </form>
            </div>
            <button class="bg-rgreen-100 hover:bg-ryellow text-white font-semibold p-2 rounded transform hover:scale-105 transition-transform duration-300 ease-in-out mt-5" >
                Delete Restaurant
            </button>
        </div>
    </section>
</template>