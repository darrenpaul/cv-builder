<template>
  <div class="w-full h-full">
    <Header />
    <Body />
  </div>
</template>

<script>
// components
import Header from "@/components/Header.vue";
import Body from "@/components/Body.vue";

export default {
  components: { Header, Body },

  Bodydata() {
    return {};
  },
};
</script>
