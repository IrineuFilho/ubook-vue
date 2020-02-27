const validationRules = {
  email: v => /.+@.+/.test(v) || 'E-mail deve ser válido',
  required: v => !!v || 'Este campo não pode ficar em branco'
}

export default validationRules
