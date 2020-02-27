<template>

  <v-container fluid>
    <v-row>
      <v-col md="auto">
        <img
            src="@/assets/ic-logo.svg"
            class="mr-7"
        />
      </v-col >
      <v-col md="2">
        <add-contact-button
            class="ml-7"
            v-if="contacts.length > 0"/>
      </v-col>
      <v-col>
        <search-field/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import AddContactButton from "./AddContactButton";
import SearchField from "./SearchField";
import { mapGetters } from 'vuex';

export default {
  name: 'toolbar',
  components: { AddContactButton, SearchField },
  computed: {
    ...mapGetters('contactBook', ['contacts'])
  }
}

</script>
