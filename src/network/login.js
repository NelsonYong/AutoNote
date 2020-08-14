import {
  post
} from './request'

export function getUserInfo(id, password) {
 
  return post('/Login.php',{id,password});
}