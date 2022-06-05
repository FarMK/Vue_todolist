export const state = () => ({
    tasks: [

    ],

    user: null

});



export const mutations = {

    ADD_TASK(state, task) {

        state.tasks = [{ content: task, done: false }, ...state.tasks]


    },

    ADD_USER(state, user) {
        state.user = user
    },


    REMOVE_TASKS(state, task) {
        state.tasks.splice(state.tasks.indexOf(task), 1)
    },

    TOGGLE_TASK(state, task) {
        task.done = !task.done
    }
}