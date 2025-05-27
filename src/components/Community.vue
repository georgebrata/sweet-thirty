<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
</script>

<template>
  <section
    id="community"
    class="py-12"
  >
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
              Ești pregătit de
              <span
                class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >
                party
              </span>?
            </CardTitle>
          </CardHeader>
          <!-- <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
            cssd
          </CardContent> -->

          <CardFooter>
            <Button as-child>
              <a href="#contact">
                Daa  🥂
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
</template>
