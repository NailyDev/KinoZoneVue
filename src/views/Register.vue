<script setup>
import Logo from '@/images/qqq.png'
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.push('/')
}
</script>

<template>
  <div>
    <header>
      <img :src="Logo" alt="">
    </header>

    <div class="flex flex-col items-center gap-4 text-white font-trebuchetms">
      <h1>Регистрация</h1>

      <div class="bg-[#343434] w-[375px] h-[35px] border border-[#6F6F6F] flex items-center justify-center text-[#6F6F6F] text-[15px]">
        <input type="text" placeholder="Логин" class="w-[375px] h-[35px]">
      </div>

      <div class="bg-[#343434] w-[375px] h-[35px] border border-[#6F6F6F] flex items-center justify-center text-[#6F6F6F] text-[15px]">
        <input type="email" placeholder="Email" class="w-[375px] h-[35px]">
      </div>

      <div class="bg-[#343434] w-[375px] h-[35px] border border-[#6F6F6F] flex items-center justify-center text-[#6F6F6F] text-[15px]">
        <input type="password" placeholder="Пароль" class="w-[375px] h-[35px]">
      </div>

      <button class="bg-[#343434] w-[375px] h-[35px] border border-[#6F6F6F] flex items-center justify-center">
        Зарегистрироваться
      </button>

      <div class="flex gap-1 text-[#FF6E2D]">
        <span>Уже зарегистрирован?</span>
        <a href="#">Авторизуйтесь!</a>
      </div>
    </div>
  </div>
</template>