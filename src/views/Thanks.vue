<template>
    <v-container>
        <h1>感謝名單</h1>
        <v-row>
            <v-col cols="12" md="4" v-for="user in users" :key="user">
                <router-link :to="{ name: 'Patient', params:{ name: user } }">
                    {{ user }}
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data(){
        return{
            users:[ 
                "Sample"
             ]
        }
    }
}
</script>