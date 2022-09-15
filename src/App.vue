<template>
  <Header />
  <main>
    <UfCompoent v-if="!selectItem.uf" />
    <CountyComponent v-else />
  </main>
</template>

<script>
import Header from "@/core/components/ToHeader.vue";
import UfCompoent from "@/components/uf.vue";
import CountyComponent from "@/components/County.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: { Header, UfCompoent, CountyComponent },
  computed: {
    ...mapState(["selectItem"]),
  },
};
</script>

<style lang="scss">
body,
html {
  background: rgb(232, 232, 232);
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

main {
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  max-width: 900px;
}
</style>
