<template>
  <div class="container">
    <div class="item" v-for="state in ufData" :key="state.nome">
      <Card
        :nome="state.nome"
        @click="sendUf(state.sigla)"
        :sigla="state.sigla"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Card from "./card.vue";
import { api } from "@/core/services/services.js";
export default {
  name: "UfCompoent",
  components: { Card },
  data() {
    return {
      ufData: null,
    };
  },
  methods: {
    getUf() {
      api.get(`/localidades/estados`).then((res) => {
        this.ufData = res.data;
      });
    },
    ...mapActions(["sendUf"]),
  },
  created() {
    this.getUf();
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  .item {
    flex: 1 1 35%;
  }
}
</style>
