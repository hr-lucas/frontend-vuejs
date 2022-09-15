<template>
  <header>
    <div class="logo">
      <div class="icon">
        <h2>STATE - APP</h2>
      </div>
      <div class="information">
        <div class="container" v-if="verificCounty">
          <div class="item">
            <p>UF:</p>
            <Check :typeCheck="verificUf" />
          </div>
          <div class="item">
            <p>Municipio:</p>
            <Check :typeCheck="verificCounty" />
          </div>
        </div>
        <div class="content-frase" v-else>
          <div class="frase-center">
            <p>Seja bem-vindo a</p>
            <h3>{{ selectItem.County }} - {{ selectItem.uf }}</h3>
          </div>
          <button @click="cleaState">Limpar</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Check from "@/components/checkstate.vue";
export default {
  name: "HeaderComponent",
  components: { Check },
  computed: {
    ...mapState(["selectItem"]),
    verificUf() {
      if (this.selectItem.uf != null) {
        return false;
      }
      return true;
    },
    verificCounty() {
      if (this.selectItem.County != null) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions(["cleaState"]),
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  -webkit-box-shadow: 1px 13px 10px 0px rgba(0, 0, 0, 0.091);
  box-shadow: 1px 13px 10px 0px rgba(0, 0, 0, 0.091);
  background: white;
  .logo {
    position: sticky;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    .icon {
      width: 30%;
      h2 {
        padding: 20px;
        font-size: 1.6rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 900;
      }
    }
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 30px;
    .item {
      display: flex;
      align-items: center;
      gap: 15px;
      justify-content: center;
    }
  }
  .information {
    width: 70%;
  }
  .content-frase {
    display: flex;
    width: 100%;
    gap: 5px;
    align-items: center;
    justify-content: space-between;
    .frase-center {
      text-align: center;
      width: 70%;
    }
    p {
      font-size: 1rem;
      font-family: Arial, Helvetica, sans-serif;
    }
    h3 {
      font-size: 1.4rem;
      font-family: Arial, Helvetica, sans-serif;
    }
    button {
      width: 30%;
      padding: 10px 25px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 1rem;
      border: none;
      transition: all 0.3s;
      z-index: 1;
      &:hover {
        background: rgb(255, 174, 0);
        transform: scale(1.1);
      }
    }
  }
}
</style>
