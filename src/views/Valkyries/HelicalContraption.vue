<template>
  <Card :valkyrie="valkyrie" :signets="signets" />
</template>

<script setup>
import Card from "../../components/Card.vue";

const valkyrie = {
  id: "7089c7a6-fb3f-456b-8ef8-5ce90759cc2e",
  name: "Helical Contraption",
  imageSrc: "/images/helical-contraption.png",
  imageAlt: "Helical Contraption",
  position: "object-center",
  derp: {
    imageSrc: "/images/derp/helical-contraption.jpg",
    imageAlt: "Derp Helical Contraption",
    position: "object-center",
  }
};

const signets = {
  builds: [
    {
      name: "coming soon",
    }
  ]
};
</script>