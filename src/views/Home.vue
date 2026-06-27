<script setup>
import { useRouter } from 'vue-router'
import circleDown from '../images/circleDown.png'
import PlayHome from '../images/PlayHome.png'

const router = useRouter()

const stats = [
  { value: '10K+', label: 'фильмов' },
  { value: '5K+', label: 'сериалов' },
  { value: '1M+', label: 'зрителей' }
]

function goToRegister() {
  router.push('/register')
}
</script>

<template>
  <div>
    <div class="animate-fade-in">
      <div class="flex items-center justify-center mt-69">
        <h1 class="font-['Anticva'] text-[96px]">
          <span class="text-[#FA8938] block animate-slide-down opacity-0">
            Добро пожаловать
          </span>
          <span class="text-white ml-[2.2em] block animate-slide-down opacity-0 [animation-delay:0.3s]">
            в мир кино!
          </span>
        </h1>
      </div>

      <div class="opacity-0 animate-fade-in [animation-delay:0.6s]">
        <h1 class="text-[#595959] text-center text-[16px]">
          <span class="block">Откройте для себя тысячи фильмов и сериалов.</span>
          <span class="block">Смотрите в любое время, в любом месте.</span>
        </h1>
      </div>

      <div class="flex items-center justify-center p-5 opacity-0 animate-scale-in [animation-delay:0.9s] relative z-10">
        <button
          @click="goToRegister"
          class="w-52 h-9.25 bg-linear-to-r from-[#DA500B] to-[#FA8938] rounded-[10px] flex items-center justify-between px-9 text-white text-[14px] cursor-pointer group relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px] hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(250,137,56,0.35)] active:translate-y-0 active:scale-[0.98]"
        >
          <span>Начать просмотр</span>
          <img :src="PlayHome" alt="PlayHome" class="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-110">
        </button>
      </div>
    </div>

    <div class="flex justify-center items-center bg-[#0d0d0d] p-8 relative z-10">
      <div class="relative bg-transparent px-8 py-3 rounded-xl overflow-hidden transition-all duration-400 hover:translate-y-[-4px] hover:shadow-[0_12px_40px_rgba(255,122,0,0.15)]">
        <span class="absolute top-0 left-0 w-8 h-8 pointer-events-none opacity-0 animate-corner-in [animation-delay:0.5s]
                     border-t border-l border-[#ff7a00] rounded-tl-xl
                     [mask-image:linear-gradient(to_bottom_right,black_20%,transparent_80%)]">
        </span>
        <span class="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-0 animate-corner-in [animation-delay:0.6s]
                     border-t border-r border-[#ff7a00] rounded-tr-xl
                     [mask-image:linear-gradient(to_bottom_left,black_20%,transparent_80%)]">
        </span>
        <span class="absolute bottom-0 left-0 w-8 h-8 pointer-events-none opacity-0 animate-corner-in [animation-delay:0.7s]
                     border-b border-l border-[#ff7a00] rounded-bl-xl
                     [mask-image:linear-gradient(to_top_right,black_20%,transparent_80%)]">
        </span>
        <span class="absolute bottom-0 right-0 w-8 h-8 pointer-events-none opacity-0 animate-corner-in [animation-delay:0.8s]
                     border-b border-r border-[#ff7a00] rounded-br-xl
                     [mask-image:linear-gradient(to_top_left,black_20%,transparent_80%)]">
        </span>

        <div class="grid grid-cols-3 gap-x-10 text-center relative z-10 whitespace-nowrap">
          <div
            v-for="(item, index) in stats"
            :key="index"
            class="flex flex-col gap-0.5 opacity-0 animate-fade-in-up transition-all duration-300 hover:translate-y-[-4px] hover:scale-105"
            :style="{ animationDelay: `${1.2 + index * 0.2}s` }"
          >
            <span class="text-xl font-semibold text-[#ff5a00] tracking-wide font-sans inline-block transition-shadow duration-300 group-hover:[text-shadow:0_0_20px_rgba(255,90,0,0.5)]">
              {{ item.value }}
            </span>
            <span class="text-[10px] font-normal text-gray-500 uppercase tracking-widest">
              {{ item.label }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-[-850px] opacity-0 animate-fade-in [animation-delay:0.3s] relative z-[-1]">
      <img :src="circleDown" alt="" class="absolute animate-float">
    </div>
  </div>
</template>
