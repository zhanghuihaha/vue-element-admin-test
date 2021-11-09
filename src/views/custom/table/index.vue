<template>
  <div class="custom-table-wapper">
    <custom-table-layout>
      <template slot="tools">
        <tools />
      </template>
      <template slot="content">
        <lb-table stripe border :column="column" :data="list" :pagination="true" :total="total" :page-size="params.limit" :current-page.sync="params.page" @current-change="getList" />
      </template>
    </custom-table-layout>
  </div>
</template>

<script>
import fetchTableListMixin from './mixin/fetchTableListMixin.vue'

import CustomTableLayout from '@/components/CustomTableLayout'
import LbTable from '@/components/LbTable/lb-table.vue'
import Tools from './components/tools/index.vue'
export default {
  components: {
    CustomTableLayout,
    LbTable,
    Tools
  },
  mixins: [fetchTableListMixin]
}
</script>

<style lang="scss" scoped>

</style>
