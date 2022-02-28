<template>
<v-lazy>
    <div :class="color + (disablePadding?'':' py-15')">
        <slot name="default"/>
    </div>
</v-lazy>
</template>
<script>
export default {
    props:{
        color:{
            type: String,
            default:()=>{ return "pink lighten-4" }
        },
        disablePadding:{
            type:Boolean,
            default:()=>{return false}
        }
    }
}
</script>