import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  await authStore.verifyToken();
  if (!authStore.user) {
    authStore.logout();
    return navigateTo("/auth/signin");
  }
});
