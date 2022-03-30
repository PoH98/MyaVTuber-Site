export const state = () => ({
    status: {},
    futurevid: {}
})

export const mutations = {
    status(state, data) {
        state.status = data;
    },
    futurevid(state, data) {
        state.futurevid = data;
    }
}

export const actions = {
    fetchYTData(context) {
        return new Promise(async (resolve) => {
            context.commit('status', await this.$http
                .get("https://www.mya-hkvtuber.com/api/mya/getytstatus")
                .then((res) => res.json()));
            context.commit('futurevid', await this.$http
                .get("https://www.mya-hkvtuber.com/api/mya/getfuturevid")
                .then((res) => res.json()));
            resolve();
        })

    }
}