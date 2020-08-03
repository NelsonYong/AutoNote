import {
  request
} from './request'

export function getHomeMultiData() {
  return request({
    url: '/8_3_3.php'
  });
}

// export function getGoodsData(type, page) {
//   return request({
//     url:'/home/data',
//     params:{
//       type,
//       page
//     }
//   });
// }