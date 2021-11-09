<script>
import { fetchTableList } from '@/api/custom'
export default {
  data() {
    return {
      column: [
        {
          prop: 'id',
          label: 'id',
          width: '80px',
          align: 'center'
        }, 
        {
          prop: 'name',
          label: '姓名',
          width: '120px',
          align: 'center'
        },
          {
          prop: 'sno',
          label: '学号',
          width: '120px',
          align: 'center'
        },
        {
          prop: 'birthday',
          label: '出生日期',
          width: '120px',
          align: 'center'
        },
        {
          prop: 'tools',
          label: '操作',
          width: '200px',
          align: 'center',
          render(_, scope) {
            return (
              <div>
                <el-button size='mini'>编辑</el-button>
                <el-button size='mini' type='danger'>删除</el-button>
              </div>
            )
          }
        }
      ],
      list: [],
      total: 0,
      params: {
        limit: 20,
        page: 1
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      fetchTableList(this.params).then((res) => {
        const { code, data } = res
        if (Number(code) === 20000) {
          const { items, total } = data
          this.list = items
          this.total = total
        }
      })
    }
  }
}
</script>
