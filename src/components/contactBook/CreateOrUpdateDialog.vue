<template>
  <v-dialog
      content-class="br-4"
      v-model="dialog"
      persistent
      width="434"
  >
    <v-card>
      <v-card-title
          class="v-card__title-custom font-size--16px text--dark font-weight-regular"
      >
        Criar novo contato
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>

        <v-container
            class="pa-0"
        >
          <v-form
              v-model="valid"
          >
            <v-row>
              <v-col
                  class="py-0 mb-3">
                <label for="name">Nome</label>
                <v-text-field
                    id="name"
                    v-model="name"
                    class="v-text-field--custom"
                    :rules="[validationRules.required]"
                    required
                    hide-details
                    outlined
                    dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                  class="py-0 mb-3">
                <label for="email">E-mail</label>
                <v-text-field
                    id="email"
                    v-model="email"
                    class="v-text-field--custom"
                    :rules="validationForEmailField()"
                    hide-details
                    outlined
                    dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                  cols="5"
                  class="py-0 mb-3">
                <label for="telephone">Telefone ({{ telephone.length }})</label>
                <v-text-field
                    id="telephone"
                    v-model="telephone"
                    class="v-text-field--custom"
                    :rules="[validationRules.required]"
                    v-mask="getMask()"
                    required
                    hide-details
                    outlined
                    dense
                ></v-text-field>
              </v-col>
            </v-row>

          </v-form>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            class="text--transform-none v-btn-actions-dialog"
            color="primary"
            rounded
            text
            @click="closeCreateOrUpdateDialog()"
        >
          Cancelar
        </v-btn>

        <v-btn
            class="v-btn--custom--disabled text--transform-none v-btn-actions-dialog"
            color="primary"
            rounded
            :disabled="!valid"
            @click="save()"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import validationRules from '@/mixins/validation-rules'
import {mask} from 'vue-the-mask'

export default {
  name: 'create-or-update-dialog',
  directives: {
    mask,
  },
  data() {
    return {
      name: '',
      email: '',
      telephone: '',
      valid: false,
      validationRules
    }
  },
  methods: {
    ...mapActions('contactBook', ['closeCreateOrUpdateDialog', 'saveEditedItem']),
    validationForEmailField() {
      if (this.email !== '') {
        return [validationRules.email]
      }
      return [];
    },
    getMask() {
      return this.telephone.length < 15 ? '(##) ####-####' : '(##) #####-####'
    },
    save() {
      const payload = { name: this.name, email: this.email, telephone: this.telephone };

      this.saveEditedItem(payload);
      this.closeCreateOrUpdateDialog();
      this.cleanForm();
    },
    cleanForm() {
      this.name = '';
      this.email = '';
      this.telephone = '';
    }
  },
  computed: {
    ...mapGetters('contactBook', ['dialog', 'editedItem', 'editedIndex']),
  },
  watch: {
    dialog(newValue) {
      if (newValue) {
        if (this.editedIndex < 0)
          return;

        this.name = this.editedItem.name;
        this.email = this.editedItem.email;
        this.telephone = this.editedItem.telephone;
      }
    }
  }
}

</script>

<style lang="scss">


  .v-card__title-custom {
    padding: 16px 12px 12px 16px !important;
    line-height: 1em !important;
  }

  .v-text-field--custom {
    fieldset {
      height: 37px;
      border: solid #c0c3d2 1px !important;
    }

    .v-text-field__slot {
      height: 32px;

      input {
        padding: 2px;
        font-size: 14px;
      }
    }
  }

  .v-btn--custom--disabled {
    &.theme--light.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
      background-color: #fa726833 !important;

      .v-btn__content {
        color: #fff !important;
      }
    }
  }
</style>
