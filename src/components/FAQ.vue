<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone } from "lucide-vue-next";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Ce cadou pot să cumpăr?",
    answer: "Orice cadou din urmatoarea listă e mai mult ca perfect: <a style='text-decoration: underline;' href='https://www.emag.ro/favorites/hash/b34ce790-a4f6-4395-be8f-468c74c7295b' target='_blank'>emag wishlist</a>",
    value: "item-1"
  },
  {
    question: "Ce activități vor fi la petrecere?",
    answer: "Petrecerea va include muzică live (jazz, hip-hop, house și manele), dans, și multe momente de distracție împreună. Vom avea și activități în aer liber dacă vremea permite.",
    value: "item-1"
  },
  {
    question: "Aduceți voi mingi?",
    answer: "Da, aducem mingi de fotbal și baschet. Dacă dorești să aduci alte sporturi, te rugăm să ne anunți.",
    value: "item-2"
  },
  {
    question: "Pot să rămân peste noapte?",
    answer: "Da, există posibilitatea de cazare pentru vineri și sâmbătă noaptea. Te rugăm să menționezi acest lucru în formularul de RSVP pentru a putea organiza spațiile de cazare.",
    value: "item-3"
  },
  {
    question: "Ce să aduc cu mine?",
    answer: "Doar bună dispoziție și energie pentru dans! Dacă rămâi peste noapte, nu uita să aduci cele necesare pentru înnoptat.",
    value: "item-4"
  },
  {
    question: "Până la ce oră se întinde petrecerea?",
    answer: "Petrecerea se termină duminică seara, 20 iulie. Pentru cei care rămân peste noapte, distracția continuă până dimineața!",
    value: "item-5"
  },
  {
    question: "Pot să vin cu mașina?",
    answer: "Da, există locuri de parcare disponibile la locație. Dacă plănuiești să consumi alcool, te rugăm să ai un șofer desemnat sau să rămâi peste noapte.",
    value: "item-6"
  }
];
</script>

<template>
  <section
    id="faq"
    class="container md:w-[700px] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">FAQs</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Întrebări frecvente
      </h2>
    </div>

    <Accordion
      type="single"
      collapsible
      class="AccordionRoot"
    >
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>
          <div v-html="answer" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4 text-center">
      Tot mai ai întrebări?
      <br />
      <a href="tel:+40774431127" class="underline">
        <Phone class="inline-block size-4 mr-1" />
        Suna-mă
      </a>
    </h3>
  </section>
</template>
