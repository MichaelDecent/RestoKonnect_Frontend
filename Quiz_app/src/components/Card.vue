<script setup>
    import { defineProps } from 'vue';
    import { useRouter } from 'vue-router'


    const {quiz} = defineProps(['quiz'])

    const router = useRouter()

    const navToQuiz = () => {
        router.push(`/quiz/${quiz.id}`)
    }
</script>

<template>
    <div @click="navToQuiz" class="w-64 h-58 rounded-xl overflow-hidden shadow-lg">
        <img :src="quiz.img" alt="maths image">
        <div class="p-3">
            <h2 class="font-semibold">{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} Questions</p>
        </div>
    </div>
</template>