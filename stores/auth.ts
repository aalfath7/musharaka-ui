import { defineStore } from "pinia";
import { useLoadingStore } from "./loading";

type AuthResponse = {
  user: { id: number; name: string; email: string };
  token: string;
};

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as null | { id: number; name: string; email: string },
    token: null as string | null,
  }),
  actions: {
    async login(credentials: { email: string; password: string }) {
      const loadingStore = useLoadingStore();
      loadingStore.setLoading(true);

      try {
        // send request login to API
        const response = await $fetch<AuthResponse>("/api/auth/login", {
          method: "POST",
          body: credentials,
        });

        // save user data dan token
        this.user = response.user;
        this.token = response.token;

        // save token in cookie
        const cookie = useCookie("auth_token");
        cookie.value = response.token;
      } catch (error) {
        if (error instanceof Error) {
          throw new Error("login failed: " + error.message);
        } else {
          throw new Error("login failed: Unknown error");
        }
      } finally {
        console.log(loadingStore.isLoading);
        loadingStore.setLoading(false);
        console.log(loadingStore.isLoading);
      }
    },
    logout() {
      this.user = null;
      this.token = null;

      // remove token from cookie
      const cookie = useCookie("auth_token");
      cookie.value = null;
    },
    async verifyToken() {
      const cookie = useCookie("auth_token");
      if (cookie.value) {
        try {
          // Memanggil API endpoint yang dibuat di server untuk memverifikasi token
          const response = await $fetch<{
            user: { id: number; name: string; email: string };
          }>("/api/auth/verify", {
            headers: {
              Authorization: `Bearer ${cookie.value}`,
            },
          });

          // Jika token valid, simpan data user
          this.user = response.user;
          this.token = cookie.value;
        } catch (error) {
          console.error("Token tidak valid atau kedaluwarsa", error);
          // this.logout();
        }
      }
    },
  },
});
