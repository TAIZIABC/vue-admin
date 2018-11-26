const type = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};


const state = {
  count: 1
};


const getters = {
  getCount: state => state.count,
};


const mutations = {
  [type.INCREMENT](state){
    state.count++
  },
  [type.DECREMENT](state){
    state.count--
  }
};

const actions = {
  increment: ({commit}) => {
    commit(type.INCREMENT);
  },
  decrement: ({commit}) => {
    commit(type.DECREMENT)
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}



