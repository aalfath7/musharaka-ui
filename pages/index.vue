<template>
  <div>
    <header class="py-24">
      <Search />
    </header>
    <NewItems />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

useHead({
  title: "Home | Musharaka",
  meta: [{ name: "description", content: "Halaman tentang kami" }],
});

definePageMeta({
  middleware: "auth",
});

const authStore = useAuthStore();
</script>
