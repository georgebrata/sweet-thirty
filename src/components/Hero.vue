<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
import { useCountdown } from "@/composables/useCountdown";
import { ref, onMounted } from 'vue';
import { Fireworks } from '@fireworks-js/vue'

const showFireworks = ref(false);
const showPartyElements = ref(false);
const urlParams = new URLSearchParams(window.location.search);
showPartyElements.value = urlParams.has('party');
const { days, hours, minutes, seconds } = useCountdown(showPartyElements.value ? new Date('2025-07-19') : new Date('2025-07-20'));

const ms = ref(1000);

onMounted(() => {
  setInterval(() => {
    ms.value = ms.value - 17; // Roughly 60 FPS
    if (ms.value <= 0) {
      ms.value = 1000;
    }
  }, 16.67); // ~60 FPS refresh rate
});

const startParty = () => {
  // fireworks
  showFireworks.value = true;
};

const stopParty = () => {
  showFireworks.value = false;
};

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  showPartyElements.value = urlParams.has('party');
});
  
</script>

<template>
  <section class="container">
    <Fireworks
      v-if="showFireworks"
      style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 999;"
    />
    <div
      class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32"
    >
      <div class="text-center space-y-8">

        <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          Cu drag te invit la
        </p>
        <div
          class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold"
        >
          <h1 class="custom-cursor" id="start-party" @mouseenter="startParty" @mouseleave="stopParty" @touchstart="startParty" @touchend="stopParty">
            <span
              class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >George Brata</span>'s
              sweet 30 🎉
          </h1>
          <h2 v-if="showPartyElements" class="text-xl md:text-2xl lg:text-3xl mt-2 italic">
            19 - 20 Iulie 2025
          </h2>
          <h2 v-else class="text-xl md:text-2xl lg:text-3xl mt-2 italic">
            20 Iulie 2025
          </h2>
        </div>
        <p v-if="showPartyElements" class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          Ești pregătit să petreci un weekend spectaculos în natură, <br/> pe malul Crișului Repede?
        </p>
        <p v-else class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          Ești pregătit să petreci timp spectaculos în natură, <br/> pe malul Crișului Repede?
        </p>

        <Badge
          variant="outline"
          class="text-sm py-2"
        >
          <span class="mr-2 text-primary">
            <Badge>Începe în</Badge>
          </span>
          <span>           
              {{ days }} zile {{ hours }}ore {{ minutes }}minute {{ seconds }}secunde 
          </span>
        </Badge>



        <div class="space-y-4 md:space-y-0 md:space-x-4">
          <Button 
            as-child
            class="w-5/6 md:w-1/4 font-bold group/arrow dark:bg-primary/90"
          >
            <a 
              href="#contact"
              class="flex items-center justify-center w-full"
            >
              RSVP
              <ArrowRight
                class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
              />
            </a>
          </Button>

          <Button
            as-child
            variant="secondary"
            class="w-5/6 md:w-1/4 font-bold"
          >
            <a
              href="https://georgebrata.ro/ok"
              target="_blank"
              >NO RSVP</a
            >
          </Button>
        </div>
      </div>

      <div class="relative group mt-14">
        <!-- gradient shadow -->
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <div class="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation">
          <iframe 
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1026188852351042&show_text=false&width=1200&height=675"
            class="w-full h-[250px] md:h-[650px] rounded-lg"
            style="border:none;"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>

        <!-- gradient effect -->
        <div
          class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
}
</style>
