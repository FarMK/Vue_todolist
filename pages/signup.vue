<template>
    <div class="signin">
      <div class="inputs">
    

      <form action="" @submit.prevent="pressed">
          <p>Страница регистрации</p>
          <input type="text" placeholder="Введите email" v-model="email">
          <input type="password" placeholder="Введите пароль"  v-model="password">
           <input type="password" placeholder="Введите пароль"  v-model="password_true">
          
          <button type="submit">Зарегистрироваться</button>
          <nuxt-link  to="/" class="has_auth">Уже есть аккаунт?</nuxt-link>

      </form>
  </div>
  </div>
</template>

<script>

 

export default {

 data(){
     return{
          password: "",
           email:"",
           errors:"",
           password_true:'',
     }
 },

  methods:{
    async pressed(){
        if(this.password===this.password_true){
            try{
            await this.$fire.auth.createUserWithEmailAndPassword(this.email,this.password)
            this.$router.push('/Home')
           
        }
        catch(e){
            console.log(e)
        }
     }

     else{
         alert("пароли не совпадают")
     }
        }

}
}
</script>

<style scoped>
  p:nth-child(1){
      color:gray;
      
  }

  button{
    
      font-size: 16px;
      background-color: gray;
      width: 60%;
      margin: 0 auto;
        margin-top:20px;
      padding: 10px;
      border: 1px solid gray;
  }


  button:hover{
      background-color: #fff;
  }

  @media(max-width:425px) {
   button{
       width: 70%;
   }
}

  .has_auth{
      width: 40%;
      color: blue;
      font-size: 14px;
      cursor: pointer;
      border-bottom: 1px solid #fff;
      margin-top: 30px;
  }

  .has_auth:hover{
     border-bottom: 1px solid blue;
  }
</style>