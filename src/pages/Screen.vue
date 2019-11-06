
<template>
<div class="Screen MatcSreen">
  <div class="Column_1">
    <div class="Row_1"> <img src="../images/a2aa10a1MIGLCxb7RE654BQwjgT5eo8JESldyOXZmo6YojyNHZ1AzgYoQM4q.jpg" class="Image" />
      <div class="Primary_Label">Como Funciona</div>
      <div class="Label_1">São apenas 2 passos:
        1. Escolha o serviço bancário que deseja comparar.&nbsp;
        2. Informe a quantidade que utiliza por mês.
      </div>
    </div>
    <div class="Row_2">
      <div class="DropDown" />
      <div class="DropDown_1" />
      <div class="OK" @click="navigateTo('Screen_1')">OK</div>
    </div>
    <div class="Row_3">
      <div class="Primary_Label_1">Quem Somos</div>
      <div class="Label">O Preço da Conta PJ é um comparativo de tarifas de vários bancos para Micro e Pequenas Empresas para ajudar o empresário na escolha do menor preço.</div>
    </div>
  </div>
</div>
</template>
<style lang="css" scoped>
    @import url("../css/normalize.css");
    @import url("../css/Screen.css");
</style>
<script>
export default {
    name: "Screen",
    mixins: [],
    props: [],
    data: function() {
        return {

        };
    },
    components: {},
    methods: {
        navigateTo (screen) {
            this.$router.push(screen + '.html')
        }
    },
    mounted() {}
};
</script>