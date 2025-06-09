<template>
  <div class="w-full bg-white/50 min-h-[300px] rounded-lg p-4">
    <div class="flex justify-center mb-4">
      <div class="flex rounded-full bg-gray-200 p-1">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="[
            'px-4 py-2 text-base font-light rounded-full transition',
            activeTab === index
              ? 'bg-white text-black'
              : 'text-gray-600 hover:bg-white/70'
          ]"
          @click="activeTab = index"
          :data-testid="tab.testid"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <div class="w-full">
      <component :is="tabs[activeTab].component" :handle-change="setTab" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import SignIn from './SignIn.vue'
import SignUp from './SignUp.vue'
import ForgotPassword from './ForgotPassword.vue'
import Profile from './Profile.vue'

const activeTab = ref(0)
const setTab = (event, index) => {
  activeTab.value = index
}

const tabs = [
  { label: 'Sign In', component: SignIn, testid: 'signin-tab' },
  { label: 'Sign Up', component: SignUp, testid: 'signup-tab' },
  { label: 'Forgot Password', component: ForgotPassword, testid: 'forgot-tab' },
  { label: 'About Me', component: Profile, testid: 'about-tab' }
]
</script>