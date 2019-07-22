import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'uuid';
import axios from 'axios';
import DummyTranscripts from '../dummyData/dummy';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transcriptList: [],
    errorMessage: '',
    isError: false,
  },
  mutations: {
    retrieveTranscripts(state, items) {
      // state.transcriptList = items;
      state.transcriptList = items;

      // return [].concat(state.transcriptList, items);
    },
    deleteTranscript(state, value) {
      const updatedState = state.transcriptList.filter(x => x.id !== value);
      state.transcriptList = updatedState;
    },
    editTranscript(state, value) {
      const updatedTranscripts = state.transcriptList;
      const posTranscript = updatedTranscripts.findIndex(x => x.id === value.itemid);
      if (value.item === 'text') {
        updatedTranscripts[posTranscript].text = value.data;
      } else {
        updatedTranscripts[posTranscript].voice = value.data;
      }
      state.transcriptList = updatedTranscripts;
    },
    addTranscript(state) {
      state.transcriptList = [...state.transcriptList, { id: uuid.v4(), voice: '', text: '' }];
    },
    setError(state, message) {
      state.isError = true;
      state.errorMessage = message;
    },
    clearError(state) {
      state.errorMessage = '';
      state.isError = false;
    },
  },
  actions: {
    uploadTranscripts({ commit }) {
      // axios request
      console.log(this.state.transcriptList);
      /* axios.post('',) */
      //

      if (this.state.transcriptList.length > 0) {
        const dummyItemsPresent = this.state.transcriptList.some(x => DummyTranscripts.includes(x));
        if (dummyItemsPresent) {
          commit('setError', 'delete the dummy items first then try to upload the transcripts again.');
          setTimeout(() => {
            commit('clearError');
          }, 3000);
        }
      }
    },
    addNewTranscript({ commit }) {
      // todo add transcript logic
      commit('addTranscript');
    },
    removeTranscript({ commit }, value) {
      // todo remove transcript logic
      commit('deleteTranscript', value);
    },
    getTranscripts({ commit }) {
      // todo fetch transcripts
      axios.get(process.env.NODE_ENV === 'development' ? '/fb-api/transcripts' : 'https://europe-west1-fb-function-testing.cloudfunctions.net/api/transcripts').then((result) => {
        const { data } = result;
        commit('retrieveTranscripts', data.transcripts);
      }).catch((err) => {
        console.log('something went wrong fetching the transcripts', err);
        commit('setError', 'An error occured while retrieving the transcriptions. Please try again.');
        commit('retrieveTranscripts', DummyTranscripts);
        setTimeout(() => {
          commit('clearError');
        }, 3000);
      });
      //
    },
    updateTranscript({ commit }, value) {
      // console.log(`updateTranscript hit with value${JSON.stringify(value, null, 2)}`);
      commit('editTranscript', value);
    },
  },
});
