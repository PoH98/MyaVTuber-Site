import axios from 'axios';
export const state = () => ({
    patient: [],
    isMobile: false
})
export const mutations = {
    patient(state, data) {
        state.patient = data
    },
    setMobile(state, data) {
        state.isMobile = data;
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
                axios.post('https://api.mya-hkvtuber.com/identity-server/connect/token', new URLSearchParams(bodyFormData), { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8'" }).then((result) => {
                    axios.get('https://api.mya-hkvtuber.com/api/content/mya-vtuber-api/patient-list/', { headers: { Authorization: `Bearer ${result.data.access_token}`, 'X-Flatten': 1 } }).then((list) => {
                        commit('patient', list.data.items);
                        resolve();
                    })
                })
            }
            else {
                resolve();
            }
        });
    },
    setMobile({ commit }, data) {
        commit('setMobile', data);
    }
}