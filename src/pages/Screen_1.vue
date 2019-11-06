
<template>
<div class="Screen_1 MatcSreen">
  <div class="Row_4">
    <div class="Column_4"> <img src="../images/a2aa10a1MIGLCxb7RE654BQwjgT5eo8JESldyOXZmo6YojyNHZ1AzgYoQM4q.jpg" class="Image_1" />
      <div class="Primary_Button">FILTROS</div>
      <div class="CheckBoxGroup" />
    </div>
    <div class="Table" />
  </div>
  <div class="Primary_Label">Lore Ipsum</div>
</div>
</template>
<style lang="css" scoped>
    @import url("../css/normalize.css");
    @import url("../css/Screen_1.css");
</style>
<script>
export default {
    name: "Screen 1",
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