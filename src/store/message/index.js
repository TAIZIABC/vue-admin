const type = {
  ADD_TO_READING: 'ADD_TO_READING',
  ADD_SOME_TO_READING: 'ADD_SOME_TO_READING',
  ADD_TO_TRASH: 'ADD_TO_TRASH',
  ADD_SOME_TO_TRASH: 'ADD_SOME_TO_TRASH',
  DELETE: 'DELETE',
  DELETE_SOME: 'DELETE_SOME'
};


const state = {
  unReadMsg: {
    type: 'a',
    data: [
      {
        id: 'aafdsfasd',
        title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
        date: '2018-04-19 20:00:00'
      },
      {
        id: 'dsgfvfdads',
        title: '今晚12点整发大红包，先到先得',
        date: '2018-04-19 21:00:00'
      },
      {
        id: 'vfafddfbf',
        title: '今晚12点整发大红包，先到先得',
        date: '2018-04-19 21:00:00'
      },
    ]
  },
  readMsg: {
    type: 'b',
    data: [
      {
        id: 'weadsdsad',
        title: '【招募令】双11学生团长招募，教你如何3天赚取1个月生活费',
        date: '2018-11-05 18:47:14'
      },
      {
        id: 'dsaddvd',
        title: '11.11来了，云产品低至1折，推荐好友赢现金红包，最高¥1111！',
        date: '2018-10-29 09:01:56'
      },
    ]
  },
  trashMsg: {
    type: 'c',
    data: [
      {
        id: 'fdsgafsad',
        title: '【安骑士】ECS的安全贴身护卫，限时七折优惠',
        date: '2018-10-31 20:41:01'
      },
      {
        id: 'fsadsad',
        title: '【910会员节】仅剩2天！！',
        date: '2018-09-13 14:13:42'
      },
    ]
  }
};

const getters = {
  getUnMsg: state => state.unReadMsg,
  getReadMsg: state => state.readMsg,
  getTrashMsg: state => state.trashMsg
};

const mutations = {
  [type.ADD_TO_READING](state,row){
    state.unReadMsg.data = state.unReadMsg.data.filter(item=>item.id!==row.id);
    state.readMsg.data.unshift(row);
  },
  [type.ADD_SOME_TO_READING](state,rows){
    rows.forEach(item=>{
      state.unReadMsg.data = state.unReadMsg.data.filter(v=>v.id!==item.id)
    });
    state.readMsg.data = [...rows,...state.readMsg.data];
  },
  [type.ADD_TO_TRASH](state,row){
    state.readMsg.data = state.readMsg.data.filter(item=>item.id!==row.id);
    state.trashMsg.data.unshift(row);
  },
  [type.ADD_SOME_TO_TRASH](state,rows){
    rows.forEach(item=>{
      state.readMsg.data = state.readMsg.data.filter(v=>v.id!==item.id)
    });
    state.trashMsg.data = [...rows,...state.trashMsg.data];
  },
  [type.DELETE](state,row){
    state.trashMsg.data = state.trashMsg.data.filter(item=>item.id!==row.id);
  },
  [type.DELETE_SOME](state,rows){
    rows.forEach(item=>{
      state.trashMsg.data = state.trashMsg.data.filter(v=>v.id!==item.id)
    });
  },
};


const actions = {
  addToRead({commit},row){
    commit(type.ADD_TO_READING,row);
  },
  addSomeToRead({commit},rows){
    commit(type.ADD_SOME_TO_READING,rows);
  },
  addToTrash({commit},row){
    commit(type.ADD_TO_TRASH,row);
  },
  addSomeToTrash({commit},rows){
    commit(type.ADD_SOME_TO_TRASH,rows);
  },
  delete({commit},row){
    commit(type.DELETE,row);
  },
  deleteSome({commit},rows){
    commit(type.DELETE_SOME,rows);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}

