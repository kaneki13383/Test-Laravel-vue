<template>
    <div class="container">
        <ul>
            <li>Имя: {{ name }}</li>
            <li>Обращение: {{ appeal }}</li>
            <li><router-link to="/">Вернуться</router-link></li>
        </ul>        
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        name: '',
        appeal: ''
      };
    },  
    mounted(){    
      document.title = "Вывод"
      this.name = this.$store.state.form.name
      this.appeal = this.$store.state.form.appeal
    },
  };
  </script>
  <style lang="scss" scoped>
    ul li{
    color: #fff;
    font-size: 20px;
}
  </style>