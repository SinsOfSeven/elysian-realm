<template>
  <Card :valkyrie="valkyrie" :signets="signets" />
</template>

<script setup>
import Card from "../../components/Card.vue";

const valkyrie = {
  id: "75ded8e1-1260-4ed4-a7da-96029676e59f",
  name: "Herrscher of Human: Ego",
  imageSrc: "/images/herrscher-of-human-ego.png",
  imageAlt: "Herrscher of Human: Ego",
  position: "object-center",
  derp: {
    imageSrc: "/images/herrscher-of-human-ego.png",
    imageAlt: "Derp Herrscher of Human: Ego",
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