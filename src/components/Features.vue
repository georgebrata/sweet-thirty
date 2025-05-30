<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Dumbbell,
  Trophy,
  Medal,
  Waves,
  Wine,
  UtensilsCrossed,
  ForkKnife,
} from "lucide-vue-next";

import Basketball from "@/components/icons/Basketball.vue";
import Tennis from "@/components/icons/Tennis.vue";
import { onMounted, ref } from "vue";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const saturdayActivities: FeaturesProps[] = [
{
    icon: "trophy",
    title: "Turneu de fotbal",
    description: "Formăm echipe și organizăm un mini-campionat de fotbal. Adu schemele!",
  },
  {
    icon: "basketball",
    title: "Meciuri de baschet",
    description: "Turneu one-on-one de baschet. Adu-ți cei mai buni adidași!",
  },
  {
    icon: "medal",
    title: "Scavenger Hunt",
    description: "Caută, colecționează și câstigă un premiu surpriză",
  },
]

const sundayActivities: FeaturesProps[] = [
{
    icon: "waves",
    title: "Piscină + Ciubăr",
    description: "Poolside drinks, relaxare la ciubăr și vedere spre munte. Nu uita costumul de baie!",
  },
  {
    icon: "wine",
    title: "Cocktail Bar",
    description: "Vrem să ne gustăm cea mai bună rețetă a ta de cocktails",
  },
  {
    icon: "utensilsCrossed",
    title: "Barbecue",
    description: "Grătar cu specialități: mici, cârnați de casă și <i>bruschete bihorene</i>",
  },
]

const activities: FeaturesProps[] = [
  {
    icon: "dumbbell",
    title: "Înviorare de dimineață",
    description: "Începem ziua în forță cu un antrenament de grup la ora 10:00",
  },
  {
    icon: "forkKnife",
    title: "Brunch",
    description: "Un brunch corespunzător cu un meniu generos și băuturi light",
  },
  {
    icon: "tennis",
    title: "Badminton",
    description: "Campionat de badminton pe sate. Cât de sus poți să sari?",
  }
];

const iconMap: Record<
  string,
  typeof Dumbbell | typeof Trophy | typeof Medal | typeof Waves | typeof Wine | typeof UtensilsCrossed | typeof Basketball | typeof Tennis
> = {
  forkKnife: ForkKnife,
  dumbbell: Dumbbell,
  trophy: Trophy,
  medal: Medal,
  waves: Waves,
  wine: Wine,
  utensilsCrossed: UtensilsCrossed,
  basketball: Basketball,
  tennis: Tennis,
};

const showPartyElements = ref(false);

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  showPartyElements.value = urlParams.has('party');
});
</script>

<template>
  <section
    id="activitati"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider mb-8">
      Ce aduc eu
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-2 ">
      Pe lângă
    </h3>
    <h2 class="text-3xl md:text-4xl text-center font-bold mb-8">
      Voie bună
    </h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description } in activities"
        :key="title"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary"
              />
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            <div v-html="description" />
          </CardContent>
        </Card>
      </div>
    </div>

    <h2 v-if="showPartyElements" class="text-3xl md:text-4xl text-center font-bold mb-8 mt-16">
      Activități Sâmbătă
    </h2>

    <div v-if="showPartyElements" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description } in saturdayActivities"
        :key="title"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary"
              />
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            <div v-html="description" />
          </CardContent>
        </Card>
      </div>
    </div>

    <h2 v-if="showPartyElements" class="text-3xl md:text-4xl text-center font-bold mb-8 mt-16">
      Activități Duminică
    </h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description } in sundayActivities"
        :key="title"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary"
              />
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            <div v-html="description" />
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
#party-start {
  user-select: none;
  -webkit-user-select: none;
}
</style>
