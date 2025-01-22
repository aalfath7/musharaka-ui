<template>
  <div>
    <h1 class="font-bold text-3xl md:text-4xl">List Your Item</h1>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Home | Musharaka",
  meta: [{ name: "description", content: "Halaman tentang kami" }],
});

definePageMeta({
  middleware: "auth",
});
</script>
