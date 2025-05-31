<script setup lang="ts">
import {
  Card,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { ref } from "vue";
import { Volume2, VolumeX, Sparkle, Tag, Paintbrush, Blocks, Bath, LineChart, StickyNote, Shirt, Footprints, Wallet } from "lucide-vue-next";
import jazzMusic from "@/assets/jazz.mp3";
import houseMusic from "@/assets/house.mp3";
import hiphopMusic from "@/assets/hiphop.mp3";
import maneleMusic from "@/assets/manele.mp3";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description?: string;
}

const jazzAudio = ref<HTMLAudioElement | null>(null);
const houseAudio = ref<HTMLAudioElement | null>(null);
const hiphopAudio = ref<HTMLAudioElement | null>(null);
const maneleAudio = ref<HTMLAudioElement | null>(null);

const isSoundEnabled = ref(false);

const toggleSound = () => {
  isSoundEnabled.value = !isSoundEnabled.value;
  if (!isSoundEnabled.value) {
    stopAllMusic();
  }
};

const playMusic = (title: string) => {
  if(isSoundEnabled.value) {
    stopAllMusicExcept(title)

    if (title === "Jazz" && jazzAudio.value) {
      jazzAudio.value.play();
      jazzAudio.value.loop = true;
    }
    if (title === "House" && houseAudio.value) {
      houseAudio.value.play();
      houseAudio.value.loop = true;
    }
    if (title === "Hip - Hop" && hiphopAudio.value) {
      hiphopAudio.value.play();
      hiphopAudio.value.loop = true;
    }
    if (title === "Manele" && maneleAudio.value) {
      maneleAudio.value.play();
      maneleAudio.value.loop = true;
    }
  }
};

const stopMusic = (title: string) => {
  if (title === "Jazz" && jazzAudio.value) {
    jazzAudio.value.pause();
    jazzAudio.value.currentTime = 0;
  }
  if (title === "House" && houseAudio.value) {
    houseAudio.value.pause();
    houseAudio.value.currentTime = 0;
  }
  if (title === "Hip - Hop" && hiphopAudio.value) {
    hiphopAudio.value.pause();
    hiphopAudio.value.currentTime = 0;
  }
  if (title === "Manele" && maneleAudio.value) {
    maneleAudio.value.pause();
    maneleAudio.value.currentTime = 0;
  }
};

const stopAllMusic = () => {
  if (jazzAudio.value) {
    jazzAudio.value.pause();
    jazzAudio.value.currentTime = 0;
  }
  if (houseAudio.value) {
    houseAudio.value.pause();
    houseAudio.value.currentTime = 0;
  }
  if (hiphopAudio.value) {
    hiphopAudio.value.pause();
    hiphopAudio.value.currentTime = 0;
  }
  if (maneleAudio.value) {
    maneleAudio.value.pause();
    maneleAudio.value.currentTime = 0;
  }
};

const stopAllMusicExcept = (title: string) => {
  const allTitles = ["Jazz", "House", "Hip - Hop", "Manele"];
  allTitles.forEach(musicTitle => {
    if (musicTitle !== title) {
      stopMusic(musicTitle);
    }
  });
};

const serviceList: ServiceProps[] = [
  {
    title: "Jazz",
    pro: 0,
  },
  {
    title: "Hip - Hop",
    pro: 0,
  },
  {
    title: "House",
    pro: 0,
  },
  {
    title: "Manele",
    pro: 1,
  },
];
</script>

<template>
  <section
    id="services"
    class="container py-24 sm:py-32"
  >
    <audio
      ref="jazzAudio"
      :src="jazzMusic"
      preload="auto"
    ></audio>
    <audio
      ref="houseAudio"
      :src="houseMusic"
      preload="auto"
    ></audio>
    <audio
      ref="hiphopAudio"
      :src="hiphopMusic"
      preload="auto"
    ></audio>
    <audio
      ref="maneleAudio"
      :src="maneleMusic"
      preload="auto"
    ></audio>

    <!-- <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Services
    </h2> -->

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Muzică
    </h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Pentru toate gusturile
    </h3>

    <!-- Sound toggle button -->
    <div class="flex justify-center mb-8">
      <button 
        @click="toggleSound"
        class="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
      >
        <component
          :is="isSoundEnabled ? Volume2 : VolumeX"
          class="size-4"
        />
        <span class="text-sm">{{ isSoundEnabled ? 'Dezactivează sunetul' : 'Activează sunetul' }}</span>
      </button>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
    >
      <div
        v-for="{ title, pro } in serviceList"
        :key="title"
      >
        <Card 
          class="bg-muted/60 dark:bg-card h-full relative group border-2 border-transparent hover:border-primary transition-all delay-75"
          @touchstart="playMusic(title)"
          @mouseenter="playMusic(title)"
          @mouseleave="stopMusic(title)"
        >
          <CardHeader>
            <CardTitle class="flex items-center justify-between gap-2">
              {{ title }}
              <div class="opacity-0 transition-opacity duration-300 flex items-center justify-center gap-1 group-hover:opacity-100">
                <template v-if="isSoundEnabled">
                  <span class="w-1 h-3 bg-primary rounded-full animate-soundwave"></span>
                  <span class="w-1 h-5 bg-primary rounded-full animate-soundwave animation-delay-200"></span>
                  <span class="w-1 h-2 bg-primary rounded-full animate-soundwave animation-delay-400"></span>
                  <span class="w-1 h-4 bg-primary rounded-full animate-soundwave animation-delay-600"></span>
                  <span class="w-1 h-3 bg-primary rounded-full animate-soundwave animation-delay-800"></span>
                </template>
                <VolumeX v-else class="size-5 text-primary" />
              </div>
            </CardTitle>
           
            <!-- <CardDescription>{{ description }}</CardDescription> -->
          </CardHeader>
          <Badge
            v-if="pro === ProService.YES"
            variant="secondary"
            class="absolute -top-2 -right-3"
          >
            DIMINEAȚA
          </Badge>
        </Card>
      </div>
    </div>
  </section>
</template>
<style scoped>

.animate-soundwave {
  animation: soundwave 1s ease-in-out infinite;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}

@keyframes soundwave {
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.5);
  }
}
</style>
