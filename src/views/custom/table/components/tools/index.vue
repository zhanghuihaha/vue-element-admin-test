<template>
  <div class="tools-wrapper">
    <div class="tools-wrapper__item"><span>姓名</span><el-input v-model="value" /></div>
    <div class="tools-wrapper__item"><el-button @click="validateName"><span>搜索</span></el-button></div>
    {{ errMsg }}
  </div>
</template>

<script>
import validateMixin from '../../mixin/validateMixin.vue'
export default {
  mixins: [validateMixin],
  data() {
    return {
      value: ''
    }
  },
  methods: {
    validateName() {
      this.validate(this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.tools-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 20px;
    &__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 20px;
        span {
            display: inline-block;
            width: 60px;
        }
    }
}
</style>
