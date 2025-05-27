<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { AlertCircle, Phone, Clock, Minus, Plus, House, Map } from "lucide-vue-next";

interface ContactFormeProps {
  name: string;
  phone: string;
  message: string;
  counter: number;
}

const contactForm = reactive<ContactFormeProps>({
  name: "",
  phone: "",
  message: "",
  counter: 1,
});

const invalidInputForm = ref<boolean>(false);

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const nameFromUrl = urlParams.get('invitat');
  if (nameFromUrl) {
    contactForm.name = decodeURIComponent(nameFromUrl);
  }
});

const handleSubmit = () => {
  // const { name, phone, counter, message } = contactForm;
  console.log("contact: ", contactForm);
};
</script>

<template>
  <section
    id="adresa"
    class="container py-24 sm:py-32"
  >
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="mb-4 text-center mt-4 md:text-right">
          <h2 class="text-lg text-primary mb-2 mt-8 tracking-wider">Unde e petrecerea?</h2>

          <h2 class="text-3xl md:text-4xl font-bold">Adresa</h2>
        </div>

        <div class="flex flex-col gap-4 items-center md:items-end text-center md:text-right">
          <div>
            <div class="flex gap-2 mb-1 justify-end">
              <House />
              <div class="font-bold">Șuncuiuș, Bihor</div>
            </div>

            <div>Str. Crișana nr. 11A</div>
            <div class="flex">
              <Button variant="link" size="sm" class="w-fit mt-2 text-primary" asChild>
                <a href="https://maps.app.goo.gl/1234567890" target="_blank" class="flex items-center gap-2">
                  Vezi pe Google Maps
                  <Map class="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <div class="flex gap-2 mb-1 justify-end">
              <Phone />
              <div class="font-bold">Telefon</div>
            </div>

            <div>0774 431 127</div>
          </div>

          <div>
            <div class="flex gap-2 justify-end">
              <Clock />
              <div class="font-bold">Program</div>
            </div>

            <div>
              <div><b>start</b> Vineri, 18 iulie 2025</div>
              <div><b>end</b> Duminica, 20 iulie 2025</div>
            </div>
          </div>
        </div>
      </div>

      <!-- form -->
      <Card class="bg-muted/60 dark:bg-card">
        <CardHeader class="text-primary text-2xl text-center">Répondez s'il vous plaît (RSVP)</CardHeader>
        <CardContent>
          <form
            @submit.prevent="handleSubmit"
            class="grid gap-4"
          >
            <div class="flex flex-col md:flex-row gap-8">
              <div class="flex flex-col w-full gap-1.5">
                <Label for="name">Nume</Label>
                <Input
                  id="name"
                  v-model="contactForm.name"
                  placeholder="Your name"
                />
              </div>

              <div class="flex flex-col w-full gap-1.5">
                <Label for="email">Telefon</Label>
                <Input
                  id="phone"
                  type="phone"
                  v-model="contactForm.phone"
                  placeholder="0740123789"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="subject">Număr de persoane</Label>

              <div class="flex items-center w-full gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  @click="contactForm.counter > 1 ? contactForm.counter-- : null"
                >
                  <Minus class="h-4 w-4" />
                </Button>
                
                <Input
                  id="subject"
                  type="number"
                  v-model="contactForm.counter"
                  class="flex-1 text-center"
                  min="1"
                />

                <Button 
                  variant="outline" 
                  size="icon"
                  @click="contactForm.counter++"
                >
                  <Plus class="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="message">Mesaj (optional)</Label>
              <Textarea
                id="message"
                placeholder="Mesaj ..."
                rows="5"
                v-model="contactForm.message"
              />
            </div>

            <Alert
              v-if="invalidInputForm"
              variant="destructive"
            >
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Eroare</AlertTitle>
              <AlertDescription>
                There is an error in the form. Please check your input.
              </AlertDescription>
            </Alert>

            <Button class="mt-4">Trimite</Button>
          </form>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
    </section>
  </section>
</template>
