<template>
  <div class="error-page">
    <h1>An error occurred</h1>
    <p v-if="error.statusCode">Error Code: {{ error.statusCode }}</p>
    <p>{{ error.message }}</p>
    <button @click="goHome">Go to Home</button>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    required: true,
  },
});

const goHome = () => {
  $router.push("/");
};
</script>
