import {
  post
} from './request'

export function PushData(data) {
 
  return post('/AddData.php',data)
}