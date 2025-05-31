<script setup lang="ts">
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Sparkle,
  Tag,
  Paintbrush,
  Blocks,
  Bath,
  LineChart,
  StickyNote,
  Shirt,
  Footprints,
  Wallet,
} from "lucide-vue-next";
import { onMounted, ref } from "vue";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "waves",
    title: "Costum de baie",
    description: "Piscina și ciubărul te vor aștepta",
  },
  {
    icon: "footprints",
    title: "Încălțăminte sport",
    description: "Vom avea un turneu de fotbal așa că ai nevoie de cei mai buni adidași",
  },
  {
    icon: "stickyNote",
    title: "Prosoape",
    description: "Ești la o cabană, nu la un hotel",
  },
  {
    icon: "shirt",
    title: "Pijamale",
    description: "Doar dacă planifici să rămâi peste noapte",
  },
];

const iconMap: Record<
  string,
  | typeof Sparkle
  | typeof Tag
  | typeof Paintbrush
  | typeof Blocks
  | typeof LineChart
  | typeof Wallet
> = {
  sparkle: Sparkle,
  tag: Tag,
  waves: Bath,
  paintbrush: Paintbrush,
  blocks: Blocks,
  lineChart: LineChart,
  wallet: Wallet,
  bath: Bath,
  stickyNote: StickyNote,
  footprints: Footprints,
  shirt: Shirt,
};

const showPartyElements = ref(false);

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  showPartyElements.value = urlParams.has('party');
});
</script>

<template>
  <section
    id="code"
    class="container py-24 sm:py-32"
  >
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 class="text-lg text-primary mb-2 tracking-wider">Ce aduci tu</h2>

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Nu uita să împachetezi
        </h2>
        <p v-if="showPartyElements" class="text-xl text-muted-foreground mb-8">
          Va fi un weekend plin de activități pentru toate vârstele și personalitățile.
        </p>
        <p v-else class="text-xl text-muted-foreground mb-8">
          Va fi o zi plină de activități pentru toate vârstele și personalitățile.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="({ icon, title }, index) in !showPartyElements ? benefitList.slice(0, 2) : benefitList"
          :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number border-2 border-transparent hover:border-primary"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component
                class="size-8 mb-6 text-primary"
                :is="iconMap[icon]"
              />

              <span
                class="text-5xl text-primary/15 font-medium transition-all delay-75 group-hover/number:text-primary"
                >0{{ index + 1 }}</span
              >
            </div>

            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>

          <!-- <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent> -->
        </Card>
      </div>
    </div>
  </section>
</template>
