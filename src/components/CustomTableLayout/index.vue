<template>
  <div class="table-layout-wrapper">
    <div class="header">
      <slot name="tools" />
    </div>
    <div class="table-box">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-layout-wrapper {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .header {
        width: 100%;
        margin-bottom: 20px;
    }
    .table-box {
        width: 100%;
    }
}
</style>
