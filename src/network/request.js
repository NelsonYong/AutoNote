import Axios from 'axios'
import Qs from 'qs'

Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'


// export function request(config) {
//   const instance = new Axios.create({
//     // baseURL: 'http://123.207.32.32:8000',
//     //  baseURL:'http://adi-v3.dev',
//     baseURL: 'http://127.0.0.1/myphp/Data',
//     timeout: 5000
//   });

//   // 请求拦截器
//   instance.interceptors.request.use(config => {
//     //拦截后需要将拦截下来的请求数据返回发送
//     return config;
//   }, err => {

//   })

//   // 相应拦截器
//   instance.interceptors.response.use(res => {
//     // 拦截后需要将拦截下来处理成的结果返回
//     return res.data
//   }, err => {
//     console.log(err)
//   })

//   return instance(config)
// }


const instance = new Axios.create({

  baseURL: 'http://127.0.0.1/myphp/Data',
  timeout: 5000
});

//请求数据前拦截
instance.interceptors.request.use(config => {
  //拦截后需要将拦截下来的请求数据返回发送
  return config;
}, err => {
  console.log(err)
})


//返回数据后拦截
instance.interceptors.response.use(res => {
  // 拦截后需要将拦截下来处理成的结果返回
  return res.data
}, err => {
  console.log(err)
})


export function post(url,data) {
  return new Promise((resolve, reject) => {
    // let Realdata = Qs.stringify(data)
    instance.post(url, {
      data: data
    }).then(response => {
      resolve(response);
    }, err => {
      reject(err)
    })
  })
}
