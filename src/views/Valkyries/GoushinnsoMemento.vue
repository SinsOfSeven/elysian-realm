<template>
  <Card :valkyrie="valkyrie" :signets="signets" />
</template>

<script setup>
import Card from "../../components/Card.vue";

const valkyrie = {
  id: "e70546e9-6583-44d2-a219-e8426a923a3e",
  name: "Goushinnso Memento",
  imageSrc: "/images/goushinnso-memento.jpg",
  imageAlt: "Goushinnso Memento",
  position: "object-center",
  derp: {
    imageSrc: "/images/goushinnso-memento.jpg",
    imageAlt: "Derp Goushinnso Memento",
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