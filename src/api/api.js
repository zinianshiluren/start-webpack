import Server from './server'
class API extends Server{

  async getRecord(){
    try{
      let result = await this.axios('get', '/api/qq');
      if(result){
        return result;
      }else{
        let err = {
          tip: '获取mongodb的数据',
          response: result,
          url: '/api/qq',
        }
        throw err;
      }
    }catch(err){
      throw err;
    }
  }

}

export default new API()