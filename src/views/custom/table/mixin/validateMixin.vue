<script>
export default {
  data() {
    return {
      errMsg: '',
      rules: [
        {
          test: function(value) {
            return value
          },
          message: '姓名不能为空值'
        }
      ]
    }
  },
  methods: {
    validate(value) {
      const validateState = this.rules.reduce((pre, cur) => {
        const check = cur && cur.test && cur.test(value)
        this.errMsg = check ? '' : cur.message
        return pre && check
      }, true)
      return validateState
    }
  }
}
</script>
