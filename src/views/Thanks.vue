<template>
    <v-container>
        <h1><v-icon class="mr-2">{{ mdiPartyPopper }}</v-icon>感謝名單<v-icon class="ml-1">{{ mdiPartyPopper }}</v-icon></h1>
        <v-row class="mt-5">
            <v-col cols="12" md="4" v-for="user in users" :key="user">
                <router-link :to="{ name: 'Patient', params:{ name: user.replace(' ', '_') } }">
                    {{ user }}
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { mdiPartyPopper } from '@mdi/js'
export default {
    data(){
        return{
            mdiPartyPopper,
            users:[ 
                "Ben",
                "Hentai Matthew"
             ]
        }
    }
}
</script>