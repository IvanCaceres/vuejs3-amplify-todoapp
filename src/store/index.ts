import { createStore } from "vuex";
import { Auth } from 'aws-amplify';
import {
  createTodoList as createTodoListAPI,
  updateTodoList as updateTodoListAPI,
  listTodoLists as listTodoListsAPI,
  getTodoList as getTodoListAPI
} from '@/providers/api';

export default createStore({
  state: {
    user: null,
    todoLists: []
  } as any,
  mutations: {
    updateUser(state, user) {
      state.user = user
    },
    updateTodoLists(state, todoLists) {
      state.todoLists = todoLists
    }
  },
  actions: {
    async checkAuth({ commit, state }) {
      try {
        const user = await Auth.currentAuthenticatedUser();
        commit('updateUser', user)
        return user
      } catch (error) {
        console.log('Error checking authentication status', error)
      }
    },
    async login({ commit, state }, { username, password }) {
      try {
        const user = await Auth.signIn(username, password);
        commit('updateUser', user)
        return {
          outcome: user,
          error: false
        }
      } catch (error) {
        console.log('Error logging in', error);
        return {
          outcome: error.message,
          error: true
        };
      }
    },
    async logout({ commit, state }) {
      try {
        const user = await Auth.signOut();
        commit('updateUser', null)
        commit('updateTodoLists', [])
      } catch (error) {
        console.log('Error logging out', error);
        throw error;
      }
    },
    async registerUser({ commit, state }, { email, password, confirmPassword }) {
      if (!email) {
        throw new Error('Email must be provided.');
      }

      if (!password) {
        throw new Error('Password must be provided.');
      }

      if (!confirmPassword) {
        throw new Error('confirmPassword must be provided.');
      }

      try {
        const { user } = await Auth.signUp({
          username: email,
          password,
          attributes: {
            email
          }
        });

        return {
          outcome: user,
          error: false
        };
      } catch (error) {
        console.log('Error with AWS Cognito User Creation.', error);
        return {
          outcome: error.message,
          error: true
        }
      }
    },
    async getTodoList({ commit, state }, id) {
      const todoList = await getTodoListAPI(id)
      return todoList
    },
    async fetchTodoLists({ commit, state }) {
      const todoLists = await listTodoListsAPI()
      commit('updateTodoLists', todoLists)
      return todoLists
    },
    async createTodoList({ commit, state }, { todoList }) {
      const todoListModel = await createTodoListAPI(todoList)
      return todoListModel
    },
    async updateTodoList({ commit, state }, { todoList }) {
      const todoListModel = await updateTodoListAPI(todoList)
      return todoListModel
    },
  },
  modules: {}
});
