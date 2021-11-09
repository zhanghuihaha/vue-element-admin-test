<template>
  <div class="form-wapper">
    <form-layout>
      <template slot="topic">
        <h2>添加学生信息</h2>
      </template>
      <template slot="content">
        <el-form ref="form" :model="form" label-width="80px">
         
          <el-form-item label="姓 名">
            <s-validate #default="{ validate }" :rules="name" :value="form.name">
              <el-col :span="6">
                <el-input v-model="form.name" @blur="validate" />
              </el-col>
            </s-validate>
          </el-form-item>
          <el-form-item class="sno" label="学号">
            <s-validate #default="{ validate }" :rules="sno" :value="form.sno">
              <el-col :span="11">
                <el-input v-model="form.sno" @blur="validate" />
              </el-col>
            </s-validate>
          </el-form-item>
          <el-form-item label="出生日期">
            <s-validate #default="{ validate }" :rules="date" :value="form.date">
              <el-col :span="6">
                <el-date-picker v-model="form.date" type="date" placeholder="选择日期" style="width: 100%;" @blur="validate" />
              </el-col>
            </s-validate>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </template>
    </form-layout>
  </div>
</template>

<script>
import { add } from '@/api/custom'

import SValidate from './svalidate'
import FormLayout from '@/components/FormLayout'
export default {
  components: {
    SValidate,
    FormLayout
  },
  data() {
    return {
      form: {
        date: '',
        name: '',
        sno: ''
      },
      date: [
        {
          test: function(value) {
            return value
          },
          message: '请选择日期'
        }
      ],
      name: [
        {
          test: function(value) {
            return value
          },
          message: '请输入姓名'
        },
        {
          test: function(value) {
            return /^[\u4e00-\u9fa5]{2,4}$/.test(value)
          },
          message: '请输入正确的姓名(2~4个汉字)'
        }
      ],
      sno: [
        {
          test: function(value) {
            return /^\d{6}$/.test(value)
          },
          message: '请输入正确的学号(六位数字)'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      add(this.form).then((res) => {
        const { code } = res
        if (Number(code) === 20000) {
          this.$message({
            showClose: true,
            message: '恭喜你，添加成功',
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.sno .el-select {
    margin-right: 20px;
}
</style>
