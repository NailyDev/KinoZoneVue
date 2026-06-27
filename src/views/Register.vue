<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen text-white">
    <h1 class="font-['Anticva'] text-[64px] text-[#FA8938] animate-slide-down">
      Регистрация
    </h1>
    <p class="text-[#595959] mt-4 text-[16px] animate-fade-in [animation-delay:0.3s]">
      Скоро здесь будет форма регистрации
    </p>
    <button
      @click="goBack"
      class="mt-8 px-6 py-2 bg-linear-to-r from-[#DA500B] to-[#FA8938] rounded-[10px] text-white text-[14px] cursor-pointer transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_25px_rgba(250,137,56,0.35)]"
    >
      На главную
    </button>
  </div>
</template>
