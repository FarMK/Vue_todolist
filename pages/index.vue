<template>
  <div class="signin">
      <div class="inputs">
    

      <form action="" @submit.prevent="pressed">
          <p>Страница входа</p>
          <input type="text" placeholder="Введите email" v-model="email">
          <input type="password" placeholder="Введите пароль"  v-model="password">
          <button type="submit">Войти</button>
           <nuxt-link  to="/signup" class="has_auth">Еще не завели аккаунт?</nuxt-link>

      </form>
  </div>
  </div>
  
</template>

<script>
export default {
   data(){
       return{
           password: "",
           email:""
       }
   },

   mounted(){
      if(localStorage.email){
        this.email=localStorage.email
      }

      if(localStorage.password){
        this.password=localStorage.password
      }
   },

   methods:{
       async pressed(){
          localStorage.email=this.email;
            localStorage.password=this.password
        try{
            await this.$fire.auth.signInWithEmailAndPassword(this.email,this.password)
        
           
           
            this.$router.push('/Home')
          
        }
        catch(e){
            console.log(e)
             alert("Ошибка данных")
        }
     }
   }
}
</script>

<style scoped>
  p{
      color:gray
  }

  button{
      margin-top:20px;
      font-size: 16px;
      background-color: gray;
      width: 25%;
      padding: 10px;
      border: 1px solid gray;
  }
  @media(max-width:785px) {
   button{
     width: 40%;
   }
}


  button:hover{
      background-color: #fff;
  }

  .has_auth{
      width: 55%;
      color: blue;
      font-size: 14px;
      cursor: pointer;
      border-bottom: 1px solid #fff;
      margin-top: 30px;
  }

  @media(max-width:425px){
    .has_auth{
      width: 80%;
    }
  }

  .has_auth:hover{
     border-bottom: 1px solid blue;
  }
</style>