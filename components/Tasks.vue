<template>
  <div class="task_list" v-bind:class="{tagged:task.done}">
       <div class="task_list_left"  >{{task.content}}</div>
       <div class="task_list_right">
            <button @click="toggleItem" v-bind:class="{btn_clicked:task.done}" class="task_list_btn">Выполнено</button>
       <button @click="removeItem" class="delete_btn">Удалить</button>
       </div>
  </div>

 
</template>

<script>
export default {
 props:['task'],

 methods:{
    removeItem:function(){
            this.$store.commit('REMOVE_TASKS', this.task)
    },


    toggleItem: function(){
        this.$store.commit('TOGGLE_TASK', this.task)
    }
}
}



</script>




<style>

</style>