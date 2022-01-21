<template>
    <div :class="color + ' py-15'">
        <slot name="default"/>
    </div>
</template>
<script>
export default {
    props:{
        color:{
            type: String,
            default:()=>{ return "pink lighten-4" }
        }
    }
}
</script>