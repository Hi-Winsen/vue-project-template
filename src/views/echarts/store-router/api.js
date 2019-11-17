import actionsFactory from '@/utils/axios/actionsFactory'

const apis = {
  getGraphData: `http://127.0.0.1:10086/graph`
}
export default actionsFactory(apis)
