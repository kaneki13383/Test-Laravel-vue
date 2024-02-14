<template>
  <div class="container">
    <form>
      <div>
        <label for="">Имя</label>
        <input type="text" v-model="name" placeholder="Введите имя">
      </div>
      <div>
        <label for="">Обращение</label>
        <textarea name="" id="" cols="30" rows="10" v-model="appeal"></textarea>
      </div>
      <button @click.prevent="send()">Отправить</button>
      <router-link to="/output">Проверить вывод данных</router-link>
    </form>
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
    document.title = "Главная"
  },
  methods:{
    send(){
      this.$store.state.form.name = this.name
      this.$store.state.form.appeal = this.appeal
      alert('Данные сохранены с помощью Vuex!');
    }
  }
};
</script>
<style lang="scss" scoped>
  form{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    div{
      display: flex;
      flex-direction: column;
      gap: 10px;
      input, textarea{
        background: transparent;
        border: 1px solid #af3131;
        border-radius: 10px;
        height: 40px;
        padding-left: 20px;
        font-size: 17px;
        color: #fff;
      }
      textarea{
        height: auto;
        padding-top: 20px;
        resize: none;
      }
      label{
        color: #fff;
        font-size: 20px;
      }
    }
    button{
      cursor: pointer;
      width: 200px;
      height: 40px;
      border-radius: 10px;
      background: transparent;
      border: 1px solid #af3131;
      color: #fff;
      font-size: 16px;
    }
  }
</style>