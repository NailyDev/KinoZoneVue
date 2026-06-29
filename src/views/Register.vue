<script setup>
import Logo from '@/images/qqq.png'
import { ValidateRegister } from '@/scripts/auth.js'; // ЭТО ГЛАВНОЕ
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const login = ref('')
const email = ref('')
const password = ref('')

const router = useRouter()

function handleRegister() {
  const result = ValidateRegister(login.value, email.value, password.value)
  
  if (result.success) {
    router.push('/KinoZone')
  } else {
    if (result.errors.login) {
      console.log('Ошибка логина:', result.errors.login)
    }
    if (result.errors.email) {
      console.log('Ошибка email:', result.errors.email)
    }
    if (result.errors.password) {
      console.log('Ошибка пароля:', result.errors.password)
    }
  }
}

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
        <input v-model="login" type="text" placeholder="Логин" class="w-[375px] h-[35px]">
      </div>

      <div class="bg-[#343434] w-[375px] h-[35px] border border-[#6F6F6F] flex items-center justify-center text-[#6F6F6F] text-[15px]">
        <input v-model="email" type="email" placeholder="Email" class="w-[375px] h-[35px]">
      </div>

      <div class="bg-[#343434] w-[375px] h-[35px] border border-[#6F6F6F] flex items-center justify-center text-[#6F6F6F] text-[15px]">
        <input v-model="password" type="password" placeholder="Пароль" class="w-[375px] h-[35px]">
      </div>

      <button @click="handleRegister" class="bg-[#343434] w-[375px] h-[35px] border border-[#6F6F6F] flex items-center justify-center">
        Зарегистрироваться
      </button>

      <div class="flex gap-1 text-[#FF6E2D]">
        <span>Уже зарегистрирован?</span>
        <a href="#">Авторизуйтесь!</a>
      </div>
    </div>
  </div>
</template>