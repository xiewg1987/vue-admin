<template>
  <div class="login">
    <a-form class="login-form" :model="formState" name="basic" autocomplete="off" :label-col="{ span: 6 }"
      @finish="onFinish">
      <a-form-item label="用户名" :help="usernameErrorMsg" :validateStatus="usernameStatus" name="username"
        :rules="[{ required: true, message: '请输入用户名!' }]">
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item label="密码" :validateStatus="passwordStatus" :help="passwordErrorMsg" name="password"
        :rules="[{ required: true, message: '请输入密码!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 6 }">
        <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 6 }">
        <a-button type="primary" html-type="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useLoginStore } from '@/stores/login';

import './styles.less'

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});

const formStateRef = ref(formState);
const loginStore = useLoginStore();

// 用户名状态和错误信息
const usernameStatus = ref('');
const usernameErrorMsg = ref('');

// 密码状态和错误信息
const passwordStatus = ref('');
const passwordErrorMsg = ref('');


const onFinish = (values: FormState) => {
  loginStore.doAccountAction(values);
  // usernameStatus.value = 'error';
  // usernameErrorMsg.value = '用户名错误，请重新输入！ 这是手动输入的错误信息！';
};

</script>
