<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Fireworks } from '@fireworks-js/vue'
import { ref, onMounted, onUnmounted } from 'vue';

const showFireworks = ref(false);
const showCursor = ref(false);
const cursorX = ref(0);
const cursorY = ref(0);

const startParty = () => {
  showFireworks.value = true;
  showCursor.value = true;
};

const stopParty = () => {
  showFireworks.value = false;
  showCursor.value = false;
};

const updateCursor = (e: MouseEvent) => {
  cursorX.value = e.clientX;
  cursorY.value = e.clientY;
};

onMounted(() => {
  document.addEventListener('mousemove', updateCursor);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', updateCursor);
});
</script>

<template>
  <section
    id="community"
    class="py-12"
  >
    <div
      v-if="showCursor"
      class="custom-cursor"
      :style="{
        left: cursorX + 'px',
        top: cursorY + 'px'
      }"
    >
      🎉
    </div>
    <Fireworks
      v-if="showFireworks"
      style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 999;"
    />
    <div class="container py-20 sm:py-20">
      <div class="lg:w-[60%] mx-auto">
        <Card
          class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0"
        >
        
          <CardHeader>
            <CardTitle class="text-4xl md:text-5xl font-bold">
              <!-- <Component
                class="w-20 h-20 m-auto mb-4"
                :is="DiscordIcon"
              /> -->
              <!-- Ești pregătit de -->
              iar după 22:00
               <span class="hidden sm:inline-block">🎉</span> 
              <span
                class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text party-cursor"
                id="party-start"
                @mouseenter="startParty"
                @mouseleave="stopParty"
                @touchstart="startParty"
                @touchend="stopParty"
              >
                birthday party
              </span>🎉
            </CardTitle>
          </CardHeader>
          <!-- <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
            cssd
          </CardContent> -->

          <!-- <CardFooter>
            <Button as-child>
              <a href="#contact">
                Abia astept
              </a>
            </Button>
          </CardFooter> -->
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.party-cursor {
  cursor: none;
}

.custom-cursor {
  position: fixed;
  pointer-events: none;
  z-index: 1000;
  font-size: 24px;
  transform: translate(-50%, -50%);
  user-select: none;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
