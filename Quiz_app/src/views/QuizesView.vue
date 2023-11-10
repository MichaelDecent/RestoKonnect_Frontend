<script setup>
    import q from "../data/quizes.json"
    import { ref, watch } from "vue"
    import Card from "../components/Card.vue"

    const quizes = ref(q)
    const search = ref("")

    watch(search, () => {
        quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
    })
</script>

<template>
    <div class="container mx-auto max-w-4xl p-4">
        <header class="mt-10 mb-30 flex justify-center gap-5 items-center">
            <h1 class="font-bold text-4xl">Quizes</h1>
            <input v-model.trim="search" class="bg-gray-300 p-3 rounded-lg" placeholder="Search..." type="text">
        </header>
        <div class="flex flex-wrap p-5 gap-3">
             <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
        </div>
    </div> 
</template>