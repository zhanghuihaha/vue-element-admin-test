
import Layout from '@/layout'

const customRouter = {
  path: '/custom',
  component: Layout,
  name: 'Custom',
  meta: {
    title: 'Custom',
    icon: 'form'
  },
  children: [
    {
      path: 'table',
      component: () => import('@/views/custom/table/index'),
      name: 'CustomTable',
      meta: {
        title: 'Table Mixins',
        roles: ['editor']
      }
    },
    {
      path: 'form',
      component: () => import('@/views/custom/form/index'),
      name: 'CustomForm',
      meta: {
        title: 'Form Renderless',
        roles: ['admin']
      }
    }
  ]
}

export default customRouter
