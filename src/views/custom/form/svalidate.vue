<template>
  <div class="validate-wapper">
    <slot :validate="validate" />
    {{ errMsg }}
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['rules', 'value'],
  data() {
    return {
      errMsg: ''
    }
  },
  methods: {
    validate() {
      this.errMsg = ''
      const validateState = this.rules.reduce((pre, cur) => {
        const check = cur && cur.test && cur.test(this.value)
        this.errMsg = this.errMsg || (check ? '' : cur.message)
        return pre && check
      }, true)
      return validateState
    }
  }
}
</script>

<style lang="scss" scoped>
.validate-wapper {
    display: flex;
    flex-direction: row;
}
</style>
