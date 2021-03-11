<template>
  <div class="login">
    <div class="logo">
      <img src="@icon/logo.png" alt="" />
    </div>
    <div class="content">
      <input class="login-input" placeholder="手机号" v-model="username" />
      <input
        class="login-input"
        type="password"
        placeholder="密码"
        v-model="password"
      />
      <div class="login-button" @click="login">登录</div>

      <div class="other-login">
        <img class="logo" src="@icon/login/wechat.png" />
        <img class="logo" src="@icon/login/qq.png" />
        <img class="logo" src="@icon/login/weibo.png" />
        <img class="logo" src="@icon/login/wangyi.png" />
      </div>
      <div class="user-agreement">
        <img
          v-if="agreementSelected"
          class="select"
          src="@icon/login/selected.png"
          alt=""
          @click="unselect"
        />
        <img
          v-else
          class="select"
          src="@icon/login/unselect.png"
          alt=""
          @click="select"
        />
        <span
          >同意《用户协议》《隐私协议》《儿童隐私协议》《中国移动认证服务协议》</span
        >
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Options, setup, Vue, prop } from "vue-class-component";
import axios from "axios";

import { useStore, Store } from "@/store/reactiveStates";

class Props {
  test = prop<number>({ default: 1 });
}

@Options({})
export default class Login extends Vue.with(Props) {
  username: string = "";
  password: string = "";
  agreementSelected: boolean = false;

  store = setup(() => {
    return useStore();
  }) as Store;

  get name() {
    return this.store.state.counter + this.test;
  }

  login() {
    axios
      .post(
        `/login/cellphone?phone=${this.username}&password=${encodeURIComponent(
          this.password
        )}&&timestamp=${Date.now()}`
      )
      .then((res) => {
        document.cookie = res.data.cookie;
        this.store.mutations.setUser(res.data.profile);
        localStorage.setItem("user", JSON.stringify(res.data.profile));
        this.$router.push("/search");
      })
      .catch((error) => {
        // 处理登录异常
      });
  }

  select() {
    this.agreementSelected = true;
  }

  unselect() {
    this.agreementSelected = false;
  }
}
</script>
<style lang="scss" scoped>
.login {
  background: red;
  .logo {
    display: flex;
    justify-content: center;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .login-input {
      width: 200px;
      height: 35px;

      border-radius: 17.5px;
      border: none;

      line-height: 35px;

      padding-left: 10px;
      padding-right: 10px;
      ~ .login-input {
        margin-top: 15px;
      }
    }

    .login-button {
      width: 200px;
      height: 35px;

      padding-left: 10px;
      padding-right: 10px;

      margin-top: 25px;
      border-radius: 17.5px;

      color: red;
      line-height: 35px;
      text-align: center;

      background: white;
    }

    .other-login {
      margin-top: 25px;
      width: 210px;
      display: flex;
      justify-content: space-between;
      .logo {
        width: 30px;
        height: 30px;
      }
    }

    .user-agreement {
      width: 200px;
      margin-top: 25px;

      font-size: 12px;
      color: white;
      text-align: center;

      display: inline-block;
      .select {
        vertical-align: bottom;

        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>