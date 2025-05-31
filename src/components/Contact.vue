<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { AlertCircle, Phone, Clock, Minus, Plus, House, Map } from "lucide-vue-next";

interface ContactFormeProps {
  name: string;
  phone: string;
  sunday: boolean;
  friday: boolean;
  saturday: boolean;
  overnightFriday: boolean;
  overnightSaturday: boolean;
  counter: number;
}

const contactForm = reactive<ContactFormeProps>({
  name: "",
  phone: "",
  friday: false,
  saturday: false,
  sunday: false,
  overnightFriday: false,
  overnightSaturday: false,
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

const handleSubmit = async () => {
  try {
    const url = 'https://api.sheety.co/06def408e74850aef0fbd22a79539f9f/sweetThirty/confirmati';
    const body = {
      confirmati: {
        "nume": contactForm.name,
        "telefon": contactForm.phone,
        "counter": contactForm.counter,
        "saturday": showPartyElements.value ? contactForm.saturday ? "Da" : "Nu" : "Nu",
        "saturdayOvernight": showPartyElements.value ? contactForm.overnightSaturday ? "Da" : "Nu" : "Nu",
        "sunday": !showPartyElements.value ? "Da" : contactForm.sunday ? "Da" : "Nu",
        "party": showPartyElements.value ? "✓" : "✘",
        "datetime": new Date().toISOString()
      }
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const json = await response.json();
    console.log('Success:', json.confirmati);
    
    // Reset form after successful submission
    contactForm.name = "";
    contactForm.phone = "";
    contactForm.counter = 1;
    contactForm.friday = false;
    contactForm.saturday = false;
    contactForm.sunday = false;
    contactForm.overnightFriday = false;
    contactForm.overnightSaturday = false;

    // Show success message
    alert('Mulțumim pentru confirmare!');
  } catch (error) {
    console.error('Error:', error);
    alert('A apărut o eroare. Te rugăm să încerci din nou sau să ne contactezi telefonic.');
  }
};

const showPartyElements = ref(false);

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  showPartyElements.value = urlParams.has('party');
});
</script>

<template>
  <section
    id="adresa"
    class="container py-24 sm:py-32"
  >
    <section id="contact" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="mb-4 text-center mt-4 md:text-right">
          <h2 class="text-lg text-primary mb-2 tracking-wider">Unde e petrecerea?</h2>

          <h2 class="text-3xl md:text-4xl font-bold">Adresă</h2>
        </div>

        <div class="flex flex-col gap-4 items-center md:items-end text-center md:text-right">
          <div>
            <div class="flex gap-2 mb-1 justify-center md:justify-end">
              <House />
              <div class="font-bold">Șuncuiuș, Bihor</div>
            </div>

            <div>Str. Crișana nr. 11A</div>
            <div class="flex">
              <Button variant="link" size="sm" class="w-fit mt-2 text-primary" asChild>
                <a href="https://maps.app.goo.gl/VbYvtLaDs76yuPhQA" target="_blank" class="flex items-center gap-2">
                  Vezi pe Google Maps
                  <Map class="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <div class="flex gap-2 mb-1 justify-center md:justify-end">
              <Phone />
              <div class="font-bold">Telefon</div>
            </div>

            <div>0774 431 127</div>
          </div>

          <div>
            <div class="flex gap-2 justify-center md:justify-end">
              <Clock />
              <div v-if="showPartyElements" class="font-bold">Program</div>
              <div v-else class="font-bold">Data</div>
            </div>

            <div v-if="showPartyElements">
              <div><b>start</b> Sâmbătă, 19 iulie 2025</div>
              <div><b>end</b> Duminică, 20 iulie 2025</div>
            </div>
            <div v-else>
              <div>Duminică, 20 iulie 2025</div>
            </div>
          </div>
        </div>
      </div>

      <!-- form -->
      <div class="flex justify-center w-full lg:w-2/3">
        <Card class="bg-muted/60 dark:bg-card mx-auto w-full">
          <CardHeader class="text-primary text-2xl text-center">Répondez s'il vous plaît (RSVP)</CardHeader>
          <CardContent>
            <form
              @submit.prevent="handleSubmit"
              class="grid gap-2"
            >
              <div class="flex flex-col md:flex-row gap-2">
                <div class="flex flex-col gap-1.5 w-full md:w-2/3 ">
                  <Label for="name">Nume și prenume</Label>
                  <Input
                    id="name"
                    v-model="contactForm.name"
                    placeholder="Numele tău"
                  />
                </div>

                <div class="flex flex-col w-full gap-2 w-full md:w-1/3">
                  <Label for="email">Telefon</Label>
                  <Input
                    id="phone"
                    type="phone"
                    v-model="contactForm.phone"
                    placeholder="0740 123 789"
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
                    max="5"
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

              <div v-if="showPartyElements" class="flex flex-col gap-1.5">
                <Label for="message" v-if="contactForm.counter === 1">Vin în ziua de</Label>
                <Label for="message" v-else>Venim în ziua de</Label>
                <div class="flex items-center space-x-4 mb-2">
                  <div class="flex items-center space-x-2">
                    <Checkbox 
                      id="saturday" 
                      v-model="contactForm.saturday"
                    />
                    <Label for="saturday">Sâmbătă</Label>
                  </div>

                  <div class="flex items-center space-x-2">
                    <Checkbox 
                      id="sunday" 
                      v-model="contactForm.sunday"
                    />
                    <Label for="sunday">Duminică</Label>
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-1.5" v-if="showPartyElements && contactForm.saturday">
                <Label for="overnight" v-if="contactForm.counter === 1">Doresc să rămân peste noapte</Label>
                <Label for="overnight" v-else>Dorim să rămânem peste noapte</Label>
                <div class="flex items-center space-x-4 mb-2">
                  <div class="flex items-center space-x-2" v-if="contactForm.saturday">
                    <Checkbox 
                      id="overnightSaturday" 
                      v-model="contactForm.overnightSaturday"
                    />
                    <Label for="overnightSaturday">Sâmbătă</Label>
                  </div>
                </div>
              </div>

              <Alert
                v-if="invalidInputForm"
                variant="destructive"
              >
                <AlertCircle class="w-4 h-4" />
                <AlertTitle>Eroare</AlertTitle>
                <AlertDescription>
                  Vă rugăm să verificați datele introduse.
                </AlertDescription>
              </Alert>

              <Button :disabled="!contactForm.name" :class="{ 'mt-56': !(contactForm.friday || contactForm.saturday)  }">Trimite</Button>
            </form>
          </CardContent>

        </Card>
      </div>
    </section>
  </section>
</template>
<style>
.mt-56 {
  margin-top: 56px !important;
}
</style>
