<template>
  <v-avatar :color="randomizeColor()" size="24">
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
  data(){
    return {
      colors: ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'teal', 'green', 'blue-grey', 'orange']
    }
  },
  methods: {
    randomizeColor(){
      return this.colors[Math.floor(Math.random() * 10)]
    }
  },
  computed: {
    firstLetter(){
      if (this.contactName && this.contactName.length > 0)
        return this.contactName[0].toUpperCase();
      return 'U'
    }
  }
}

</script>

<style lang="scss">
</style>
