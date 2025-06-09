<template>
  <div class="w-full max-w-xs mx-auto flex flex-col items-center">
    <div class="bg-gray-100 rounded-full p-3 mb-2">
      <LockClosedIcon class="w-6 h-6 text-gray-700" />
    </div>

    <h1 class="text-xl font-semibold mb-1">Forgot Password</h1>
    <p class="text-sm text-center mb-4">
      Enter your email and we'll send you a link to reset your password
    </p>

    <form class="w-full space-y-4" @submit.prevent="handleSubmit" novalidate>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        class="w-full p-2 border rounded"
        data-testid="forgot-email"
        v-model="email"
      />

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        data-testid="forgot-submit"
      >
        Submit
      </button>

      <div class="text-center text-sm mt-2">
        <a href="#" @click.prevent="handleChange(null, 0)" class="underline text-blue-600 hover:text-blue-800 transition">
          Back to Sign in
        </a>
      </div>

      <p class="text-xs italic mt-4 text-center">
        This is an example of a forgot password form for test automation practice.<br />
        Email: test@test.com
      </p>
    </form>

    <!-- Overlay dialog -->
    <div
      v-if="showDialog"
      class="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
    >
      <div class="relative bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-sm text-center">
        <button
          @click="closeDialog"
          class="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          <XMarkIcon class="w-5 h-5" />
        </button>
        <p class="font-semibold text-lg">
          {{ isValidEmail ? 'Success' : 'Error' }}
        </p>
        <p class="text-sm mt-2">
          {{ message }}
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
const showDialog = ref(false)
const isValidEmail = ref(false)
const message = ref('')

const handleSubmit = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + '/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value })
    })

    const data = await response.json()
    isValidEmail.value = response.ok
    message.value = data.message || (response.ok ? 'Link sent' : 'Failed')
    showDialog.value = true
  } catch (err) {
    console.error('Error:', err.message)
    isValidEmail.value = false
    message.value = 'Request failed. Try again later.'
    showDialog.value = true
  }
}

const closeDialog = () => {
  showDialog.value = false
}
</script>