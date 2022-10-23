<template>
  <v-card>
    <v-card-title>
      {{ fixedVariables.name }}
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6" xl="3">
          STR: {{ fixedVariables.variables.STR }}
        </v-col>
        <v-col cols="12" md="6" xl="3">
          AGI: {{ fixedVariables.variables.AGI }}
        </v-col>
        <v-col cols="12" md="6" xl="3">
          VIT: {{ fixedVariables.variables.VIT }}
        </v-col>
        <v-col cols="12" md="6" xl="3">
          INT: {{ fixedVariables.variables.INT }}
        </v-col>
      </v-row>
      <hr />
      <v-row>
        <v-col cols="12" md="6" xl="3">
          HP: {{ val.HP }}/{{ fixedVariables.defaultValue.HP }}
        </v-col>
        <v-col cols="12" md="6" xl="3" v-if="defaultValue.SP">
          SP: {{ val.SP }}/{{ fixedVariables.defaultValue.SP }}</v-col
        >
        <v-col cols="12" md="6" xl="3" v-if="defaultValue.MP">
          MP: {{ val.MP }}/{{ fixedVariables.defaultValue.MP }}</v-col
        >
        <v-col cols="12" md="6" xl="3" v-if="defaultValue.SAN">
          SAN: {{ val.SAN }}/{{ fixedVariables.defaultValue.SAN }}</v-col
        >
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: Object,
      required: true,
    },
    fixedVariables: {
      type: Object,
      required: true,
    },
  },
  computed: {
    val() {
      return this.modelValue;
    },
  },
};
</script>