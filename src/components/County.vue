<template>
  <div class="container">
    <div class="item" v-for="state in countyData" :key="state.id">
      <Card
        :nome="state.nome"
        @click="sendCounty(state.nome)"
        :sigla="state.microrregiao.nome"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Card from "./card.vue";
import { api } from "@/core/services/services.js";
export default {
  name: "CountyComponent",
  components: { Card },
  data() {
    return {
      countyData: null,
    };
  },
  computed: {
    ...mapState(["selectItem"]),
  },
  methods: {
    getCounty(UF) {
      api.get(`/localidades/estados/${UF}/municipios`).then((res) => {
        console.log("Data", res.data);
        this.countyData = res.data;
      });
    },
    ...mapActions(["sendCounty"]),
  },
  created() {
    this.getCounty(this.selectItem.uf);
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
