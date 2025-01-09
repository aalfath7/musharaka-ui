<template>
  <div>
    <header class="py-24">
      <Search />
    </header>
    <NewItems />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Home | Musharaka",
  meta: [{ name: "description", content: "Halaman tentang kami" }],
});
</script>
