import axios from 'axios';
export const state = () => ({
    patient: [],
    home:{},
    access_token:''
})
export const mutations = {
    patient(state, data) {
        state.patient = data;
    },
    home(state, data) {
        state.home = data;
    },
    setToken(state, data){
        state.access_token = data;
    }
}
export const actions = {
    patient({ commit, state }) {
        return new Promise((resolve, reject) => {
            if (state.patient.length < 1) {
                var bodyFormData = new FormData();
                bodyFormData.append('grant_type', 'client_credentials');
                bodyFormData.append('client_id', 'mya-vtuber-api:reader');
                bodyFormData.append('client_secret', 'mayixh2gwwwcmg72mcnwflowxpkanbeahsuyvlgcormx');
                if(state.access_token){
                    axios.get('https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/patient-list/', { headers: { Authorization: `Bearer ${state.access_token}`, 'X-Flatten': 1 } }).then((list) => {
                        commit('patient', list.data.items);
                        resolve();
                    })
                }
                else{
                    axios.post('https://api.mya-hkvtuber.com/identity-server/connect/token', new URLSearchParams(bodyFormData), { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8'" }).then((result) => {
                        commit('setToken', result.data.access_token);
                        axios.get('https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/patient-list/', { headers: { Authorization: `Bearer ${result.data.access_token}`, 'X-Flatten': 1 } }).then((list) => {
                            commit('patient', list.data.items);
                            resolve();
                        })
                    })
                }
            }
            else {
                resolve();
            }
        });
    },
    home({ commit, state }) {
        return new Promise((resolve, reject) => {
            if (state.patient.length < 1) {
                var bodyFormData = new FormData();
                bodyFormData.append('grant_type', 'client_credentials');
                bodyFormData.append('client_id', 'mya-vtuber-api:reader');
                bodyFormData.append('client_secret', 'mayixh2gwwwcmg72mcnwflowxpkanbeahsuyvlgcormx');
                if(state.access_token){
                    axios.get('https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/home/', { headers: { Authorization: `Bearer ${state.access_token}`, 'X-Flatten': 1 } }).then((list) => {
                        commit('home', list.data.items[0].data);
                        resolve();
                    })
                }
                else{
                    axios.post('https://api.mya-hkvtuber.com/identity-server/connect/token', new URLSearchParams(bodyFormData), { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8'" }).then((result) => {
                        commit('setToken', result.data.access_token);
                        axios.get('https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/home/', { headers: { Authorization: `Bearer ${result.data.access_token}`, 'X-Flatten': 1 } }).then((list) => {
                            commit('home', list.data.items[0].data);
                            resolve();
                        })
                    })
                }
            }
            else {
                resolve();
            }
        });
    }
}