<template>
  <div class="card">
    <h2>{{ nome }}</h2>
    <p>{{ sigla }}</p>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    nome: {
      type: String,
      required: true,
    },
    sigla: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  min-height: 100px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  transition: all 0.3s;
  z-index: 1;
  &:hover {
    background: rgb(255, 174, 0);
    transform: scale(1.1);
  }
  h2 {
    font-size: 1.6rem;
  }
}
</style>
