import { createStore } from "vuex";
import { Auth } from 'aws-amplify';

export default createStore({
  state: {
    user: null
  } as any,
  mutations: {
    updateUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async checkAuth({ commit, state }) {
      const user = await Auth.currentAuthenticatedUser();
      commit('updateUser', user)
      return user
    },
    async login({ commit, state }, { username, password }) {
      try {
        const user = await Auth.signIn(username, password);
        commit('updateUser', user)
        return user;
      } catch (error) {
        console.log('Error logging in', error);
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

        return user;
      } catch (error) {
        console.log('Error with AWS Cognito User Creation.', error);
        throw error;
      }
    }
  },
  modules: {}
});
