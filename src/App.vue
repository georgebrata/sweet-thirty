<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Benefits from "./components/Benefits.vue";
import Features from "./components/Features.vue";
import Services from "./components/Services.vue";
// import HowItWorks from "./components/HowItWorks.vue";
// import Testimonials from "./components/Testimonials.vue";
// import Team from "./components/Team.vue";
// import Pricing from "./components/Pricing.vue";
// import Sponsors from "./components/Sponsors.vue";
// import Team from "./components/Team.vue";
import Community from "./components/Community.vue";
import Contact from "./components/Contact.vue";
import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";

const showPartyElements = ref(false);

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  showPartyElements.value = urlParams.has('party');
});
</script>

<template>
  <Navbar />
  <Hero />
  <!-- <Sponsors /> -->
  <Benefits />
  <Features />
  <Community v-if="showPartyElements" />
  <Services v-if="showPartyElements" />
  <!-- <HowItWorks /> -->
  <!-- <Testimonials /> -->
  <!-- <Team /> -->

  <!-- <Pricing /> -->
  <Contact />
  <FAQ />
  <Footer />
</template>
