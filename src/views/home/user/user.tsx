import { defineComponent } from 'vue'

import UserInfo from './userInfo'
import UserMenue from './userMenue'

import './user.scss'




export default defineComponent({
  name: 'homeUser',

  created() {
    console.log('homeUser created')
  },
  render() {
    return (
      <div class="user-content">
        <UserInfo></UserInfo>
        <UserMenue></UserMenue>
      </div>
    )
  }
})
