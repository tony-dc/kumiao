import {DataApi} from './request'
class API extends DataApi{
    //正在热映接口
    getMovieOnInfoList(params){
        return this.get('/ajax/movieOnInfoList?cityId='+params)
    }
    //获取影院数据接口
    getcinamedata(params){
       return this.get('/ajax/cinemaList?ci='+params)
    }
    //获取城市数据接口
    getCity(){
        return this.get('/dianying/cities.json')
    }
    //即将上映接口
    getComingSoon(cityId){
        return this.get(`/ajax/comingList?ci=${cityId}&token=&limit=10`)
    }
    //电影详情页接口
    getDetail(movieId){
        return this.get( "/ajax/detailmovie?movieId="+movieId)
    }
    //搜素数据接口
    getSerach(newVal,cityId){
        return this.get(`/ajax/search?kw=${newVal}&cityId=${cityId}`)
    }
}
//导出
export default new API()