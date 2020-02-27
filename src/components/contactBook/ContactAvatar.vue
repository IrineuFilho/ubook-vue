<template>
  <v-avatar color="indigo" size="24">
    <span class="white--text font-size--16px">{{ firstLetter }}</span>
  </v-avatar>
</template>
<script>

export default {
  name: 'contact-avatar',
  props: {
    contactName: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    firstLetter(){
      if (this.contactName && this.contactName.length > 0)
        return this.contactName[0];
      return 'U'
    }
  }
}

</script>

<style lang="scss">
</style>
