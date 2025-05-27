<script setup lang="ts">
import {
  Card,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description?: string;
}

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
    title: "Chillout",
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
    <!-- <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Services
    </h2> -->

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Muzica
    </h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Pentru toate gusurile
    </h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
    >
      <div
        v-for="{ title, pro } in serviceList"
        :key="title"
      >
        <Card class="bg-muted/60 dark:bg-card h-full relative group">
          <CardHeader>
            <CardTitle class="flex items-center justify-between gap-2">
              {{ title }}
              <div class="sound-wave opacity-0 transition-opacity duration-300 flex items-center justify-center gap-1 group-hover:opacity-100">
                <span class="w-1 h-3 bg-primary rounded-full animate-soundwave"></span>
                <span class="w-1 h-5 bg-primary rounded-full animate-soundwave animation-delay-200"></span>
                <span class="w-1 h-2 bg-primary rounded-full animate-soundwave animation-delay-400"></span>
                <span class="w-1 h-4 bg-primary rounded-full animate-soundwave animation-delay-600"></span>
                <span class="w-1 h-3 bg-primary rounded-full animate-soundwave animation-delay-800"></span>
              </div>
            </CardTitle>
           
            <!-- <CardDescription>{{ description }}</CardDescription> -->
          </CardHeader>
          <Badge
            v-if="pro === ProService.YES"
            variant="secondary"
            class="absolute -top-2 -right-3"
            >DIMINEAȚA</Badge
          >
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
