<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="2">
        <v-img src="@/assets/ic-logo.svg"></v-img>
      </v-col>
      <v-col cols="2">
        <v-btn
            rounded
            class="text-none"
        >
          <v-icon>mdi-plus</v-icon>
          Criar contato
        </v-btn>
      </v-col>

      <v-col cols="8">
        <v-text-field
            class="pale-lilac"
            append-icon="mdi-magnify"
            solo
            filled
            dense
            hide-details
            placeholder="Buscar..."
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  name: 'toolbar'
}

</script>

<style lang="scss">

  .pale-lilac {
    & .v-input__slot {
      background: #E5E7F3 !important;
      /*background: #f00 !important;*/
    }
  }


  .text-none {
    text-transform: none !important;
  }


</style>
