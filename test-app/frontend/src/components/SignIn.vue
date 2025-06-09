<template>
  <div class="w-full max-w-xs mx-auto flex flex-col items-center">
    <div class="bg-gray-100 rounded-full p-3 mb-2">
      <LockClosedIcon class="w-6 h-6 text-gray-700" />
    </div>

    <h1 class="text-xl font-semibold mb-4">Sign in</h1>

    <form class="w-full space-y-4" @submit.prevent="handleSubmit" novalidate>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        required
        class="w-full p-2 border rounded"
        data-testid="signin-email"
        v-model="email"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
        class="w-full p-2 border rounded"
        data-testid="signin-password"
        v-model="password"
      />

      <label class="flex items-center text-sm">
        <input
          type="checkbox"
          class="mr-2"
          data-testid="signin-remember"
          v-model="remember"
        />
        Remember me
      </label>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        data-testid="signin-submit"
      >
        Sign In
      </button>

      <div class="flex justify-between text-sm">
        <a href="#" @click.prevent="handleChange(null, 2)" class="underline text-blue-600 hover:text-blue-800 transition">
          Forgot password?
        </a>
        <a href="#" @click.prevent="handleChange(null, 1)" class="underline text-blue-600 hover:text-blue-800 transition">
          Don't have an account? Sign Up
        </a>
      </div>

      <p class="text-xs italic mt-4 text-center">
        This is an example of a sign in form for test automation practice.<br />
        Email: test@test.com<br />
        Password: testing123!
      </p>
    </form>

    <!-- Dialog jako overlay -->
    <div
      v-if="showDialog"
      class="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-sm text-center relative">
        <button @click="closeDialog" class="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
          <XMarkIcon class="w-5 h-5" />
        </button>
        <p class="font-semibold text-lg">
          {{ loginState ? 'Login successful' : 'Login failed' }}
        </p>
        <p class="text-sm mt-2">
          {{
            loginState
              ? 'Close this box to practice with more forms'
              : 'Please check your email and password.'
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { LockClosedIcon, XMarkIcon } from '@heroicons/vue/24/solid'

const props = defineProps(['handleChange'])

const email = ref('')
const password = ref('')
const remember = ref(false)

const showDialog = ref(false)
const loginState = ref(false)

const handleSubmit = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + '/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value })
    })

    loginState.value = response.ok
    showDialog.value = true
    if (!response.ok) throw new Error('Login failed')
  } catch (err) {
    console.error('Error logging in:', err.message)
    loginState.value = false
    showDialog.value = true
  }
}

const closeDialog = () => {
  showDialog.value = false
}
</script>