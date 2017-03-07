import Vue from 'Vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

if (sessionStorage.getItem('sid')) {
  Vue.http.headers.common['cookie'] = sessionStorage.getItem('sid');

}

export default {
  UserLogin: function (data) {
    this.$http.get('http://yhostc.local/auction-service/www/wechat/auth', {
      headers: headers
    }).then(res => {
      console.log('success:', res.body);
    }, res => {
      console.log('error:', res);
    });
    return Vue.axios.post('/api/login', data)
  },
  UserLogout: function (data) {
    return instance.post('/api/logout', data)
  }
}