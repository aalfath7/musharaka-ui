<template>
  <div class="space-y-20">
    <header class="py-24">
      <Search />
    </header>
    <div>
      <h2 class="font-bold text-xl md:text-2xl">
        Recently active items in East Barnet
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10"
      >
        <CardItem v-for="item in newItems" :key="item.id" :item="item" />
      </div>
    </div>
    <div>
      <h2 class="font-bold text-3xl md:text-4xl text-center">Why Us?</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 grid-5">
        <div
          v-for="item in why"
          class="py-10 flex flex-col justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-24 bg-blue-200 rounded-full p-4 shadow mb-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              :d="item.icon"
            />
          </svg>
          <h3 class="font-bold text-2xl text-center">{{ item.content }}</h3>
          <p class="text-center">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item } from "~/types/items";
import type { Why } from "~/types/about";

useHead({
  title: "Home | Musharaka",
  meta: [{ name: "description", content: "Halaman tentang kami" }],
});

definePageMeta({
  middleware: "auth",
});

const item = {
  id: 1,
  name: "laptop",
  category: "electronic",
  price: "50",
  available: true,
};

const newItems = await $fetch<Item[]>("/api/items/new");
const why = await $fetch<Why[]>("/api/about/why");
</script>
