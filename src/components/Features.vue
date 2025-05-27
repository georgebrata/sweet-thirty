<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Paintbrush,
  MessageCircle,
  TabletSmartphone,
  BadgeCheck,
  Goal,
  PictureInPicture,
  MousePointerClick,
  Newspaper,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "tabletSmartphone",
    title: "Înviorare de dimineață",
    description: "Începem ziua în forță cu un antrenament de grup la ora 10:00",
  },
  {
    icon: "badgeCheck",
    title: "Turneu de fotbal",
    description: "Formăm echipe și organizăm un mini-campionat de fotbal. Adu-ți cei mai buni adidași!",
  },
  {
    icon: "goal",
    title: "Brata Olympics",
    description: "5 probe sportive individuale și de echipă. Medalii și premii pentru câștigători!",
  },
  {
    icon: "pictureInPicture",
    title: "Piscină + Ciubăr",
    description: "Răcorire la piscină, relaxare la ciubăr cu apă caldă și vedere spre munte. Nu uita costumul de baie!",
  },
  {
    icon: "mousePointerClick",
    title: "Cocktail Bar",
    description: "Vrem să ne gustăm cea mai bună rețetă a ta de cocktails",
  },
  {
    icon: "newspaper",
    title: "Barbecue",
    description: "Grătar cu specialități: mici, cârnați de casă și bruschete bihorene. Plus deserturi făcute în casă!",
  },
];

const iconMap: Record<
  string,
  | typeof TabletSmartphone
  | typeof BadgeCheck
  | typeof Goal
  | typeof PictureInPicture
  | typeof Paintbrush
  | typeof MousePointerClick
  | typeof MessageCircle
  | typeof Newspaper
> = {
  tabletSmartphone: TabletSmartphone,
  badgeCheck: BadgeCheck,
  goal: Goal,
  pictureInPicture: PictureInPicture,
  paintbrush: Paintbrush,
  mousePointerClick: MousePointerClick,
  messageCircle: MessageCircle,
  newspaper: Newspaper,
};
</script>

<template>
  <section
    id="program"
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
        v-for="{ icon, title, description } in featureList"
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
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>
