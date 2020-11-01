//二次封装函数，请求后台数据接口
import service from './service'
//创造一个类
export class DataApi {
  constructor() {
    this.handle = service
  }
  DataResponse(res) {
    const {
      data,
      status
    } = res
    if (status === 200) {
      return data
    }
    return res
  }
  get(url,data={}){
       return this.handle.get(url,data).then(this.DataResponse)
  }
  post(url,data,config){
    return this.handle.post(url,data,config).then(this.DataResponse)
  }
}