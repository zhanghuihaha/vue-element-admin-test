<template>
  <div class="form-layout-wrapper">
    <div class="header">
      <slot name="topic" />
    </div>
    <div class="form-box">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-layout-wrapper {
    padding: 20px;
    width: 100%;
    .header {
        width: 100%;
        margin-bottom: 20px;
        margin-left: 38px;
    }
    .table-box {
        width: 100%;
    }
}
</style>
