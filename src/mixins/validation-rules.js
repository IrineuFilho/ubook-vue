const validationRules = {
  email: v => /.+@.+/.test(v) || 'E-mail deve ser válido',
  required: v => !!v || 'Este campo não pode ficar em branco',
  telephone: v => !!(v.length === 14) || !!(v.length == 15) || 'Este campo não pode ficar em branco'
}

export default validationRules
