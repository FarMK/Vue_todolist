<template>
 <main>
   <p id="logout" @click="signout">Выйти</p>
  <h1>Список дел</h1>

  <p>Добавьте свои задания</p>



  <div class="todo_list">
    <input v-model="newTask" placeholder="Введите сюда свое задание" @keypress.enter="addTask" />
    <button v-on:click="addTask()">Добавить</button>
    
  </div>


  <div class="tasks">
   
    <Tasks
       v-for="task, i in $store.state.tasks" v-bind:key="i" v-bind:task="task"/>
  </div>
 </main>
</template>

<script>
export default {
  name: 'IndexPage',

  data(){
    return{
      newTask:''
    }
  },


  methods:{
    addTask(){
      if(this.newTask){
      this.$store.commit('ADD_TASK', this.newTask)
      this.newTask='';
   
      }
    },

    signout: async function(){
        this.$fire.auth.signOut()
        this.$router.push("/")
   }
  },


 
}
</script>
