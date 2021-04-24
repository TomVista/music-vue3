import { defineComponent } from 'vue'

import { useStore } from "@/store";

import userDefaultAvatar from '@icon/user-default.jpg'
import rightIcon from '@icon/home/right.png'

import './index.scss'


export default defineComponent({

  setup() {
    return useStore()
  },
  render() {

    const Avatar = (
      <img class="user-avatar" src={this.state.user?.avatarUrl || userDefaultAvatar} alt="user-avatar" />
    )

    const defaultInfo = (
      <span>
        立即登录 
      </span>
    )

    const userInfo = (
      <div class="user-info">
        <div class="user-name">
          {this.state.user?.nickname}
        </div>

        <span>
          vip lv:0
        </span>
      </div>
    )

    const info = this.state.user ? userInfo : defaultInfo

    return (
      <div class="user-info-content">
        {Avatar}
        {info}
        <img class="icon" src={rightIcon} style="width:15px;height:15px" />
      </div>
    )
  }

})
