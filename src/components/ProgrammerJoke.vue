<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Code2, RefreshCw } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

interface Joke {
  setup: string;
  punchline: string;
}

const jokes: Joke[] = [
  {
    setup: "Ce i-a zis tortul lui George când a împlinit 30 de ani?",
    punchline: "Nu te îngrijora, încă arăți proaspăt scos din cuptor! 🎂"
  },
  {
    setup: "De ce a fost George supărat la petrecerea de 30 de ani?",
    punchline: "Pentru că lumânările costau mai mult decât tortul! 🕯️"
  },
  {
    setup: "Care e partea cea mai grea când împlinești 30 de ani?",
    punchline: "Să-ți ții respirația până numeri toate lumânările! 😅"
  },
  {
    setup: "Ce cadou primești când faci 30 de ani?",
    punchline: "O durere de spate gratuită și un abonament la 'Unde mi-am pus cheile?' 🎁"
  },
  {
    setup: "De ce a fost George fericit că a împlinit 30 de ani?",
    punchline: "Pentru că acum poate să spună că are experiență în a fi tânăr! 🌟"
  },
  {
    setup: "Care e diferența dintre 20 și 30 de ani?",
    punchline: "La 20 te trezești pentru party, la 30 faci party ca să nu adormi! 🎉"
  }
];

const isVisible = ref(false);
const isJokeChanging = ref(false);
const currentJoke = ref<Joke>(jokes[Math.floor(Math.random() * jokes.length)]);

const getNewJoke = () => {
  isJokeChanging.value = true;
  setTimeout(() => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * jokes.length);
    } while (jokes[newIndex].setup === currentJoke.value.setup);
    
    currentJoke.value = jokes[newIndex];
    isJokeChanging.value = false;
  }, 200);
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  const element = document.getElementById('programmer-joke');
  if (element) {
    observer.observe(element);
  }
});
</script>

<template>
  <section
    id="programmer-joke"
    class="container py-24 sm:py-32"
  >
    <div class="mb-12 text-center">
      <h2 class="text-lg text-primary mb-2 tracking-wider">Pentru programatori</h2>
      <h2 class="text-3xl md:text-4xl font-bold">Un pic de umor</h2>
    </div>

    <div class="flex justify-center">
      <Card 
        class="w-full max-w-2xl bg-muted/50 dark:bg-card transition-all duration-500"
        :class="{ 'opacity-0 translate-y-4': !isVisible, 'opacity-100 translate-y-0': isVisible }"
      >
        <CardHeader>
          <div class="flex items-center justify-between gap-2 mb-4">
            <div class="flex items-center gap-2">
              <Code2 class="size-6 text-primary" />
              <h3 class="text-xl font-semibold">Glume de Programator</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              @click="getNewJoke" 
              class="text-primary hover:text-primary/80 transition-colors"
              :disabled="isJokeChanging"
            >
              <RefreshCw class="size-4" :class="{ 'animate-spin': isJokeChanging }" />
            </Button>
          </div>
        </CardHeader>
        <CardContent class="text-lg">
          <div class="transition-opacity duration-200" :class="{ 'opacity-0': isJokeChanging, 'opacity-100': !isJokeChanging }">
            <p class="mb-4">{{ currentJoke.setup }}</p>
            <p class="text-primary">{{ currentJoke.punchline }}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>

