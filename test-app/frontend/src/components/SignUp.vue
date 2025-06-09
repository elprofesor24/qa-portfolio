<template>
  <div class="w-full max-w-xs mx-auto flex flex-col items-center">
    <div class="bg-gray-100 rounded-full p-3 mb-2">
      <LockClosedIcon class="w-6 h-6 text-gray-700" />
    </div>

    <h1 class="text-xl font-semibold mb-4">Sign up</h1>

    <form class="w-full space-y-4" @submit.prevent="handleSubmit" novalidate>
      <div class="flex gap-2">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          class="w-1/2 p-2 border rounded"
          data-testid="signup-firstname"
          v-model="firstName"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          class="w-1/2 p-2 border rounded"
          data-testid="signup-lastname"
          v-model="lastName"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        class="w-full p-2 border rounded"
        data-testid="signup-email"
        v-model="email"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        class="w-full p-2 border rounded"
        data-testid="signup-password"
        v-model="password"
      />

      <textarea
        name="aboutMe"
        placeholder="Tell me about yourself"
        rows="3"
        required
        class="w-full p-2 border rounded"
        data-testid="signup-about"
        v-model="aboutMe"
      ></textarea>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        data-testid="signup-submit"
      >
        Sign Up
      </button>

      <div class="text-center text-sm mt-2">
        <a href="#" @click.prevent="handleChange(null, 0)" class="underline text-blue-600 hover:text-blue-800 transition">
          Already have an account? Sign In
        </a>
      </div>

      <p class="text-xs italic mt-4 text-center">
        This is an example of a sign up form for test automation practice.
      </p>
    </form>

    <!-- Dialog jako overlay -->
    <div
      v-if="showDialog"
      class="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
    >
      <div class="relative bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-sm text-center">
        <!-- Zavírací křížek -->
        <button
          @click="closeDialog"
          class="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          <XMarkIcon class="w-5 h-5" />
        </button>

        <p class="font-semibold text-lg">
          {{ signupState ? 'Signup successful' : 'Signup failed' }}
        </p>
        <p class="text-sm mt-2">
          {{ signupMessage }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { LockClosedIcon, XMarkIcon } from '@heroicons/vue/24/solid'

const props = defineProps(['handleChange'])

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const aboutMe = ref('')

const showDialog = ref(false)
const signupState = ref(false)
const signupMessage = ref('')

const handleSubmit = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + '/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        aboutMe: aboutMe.value
      })
    })

    const data = await response.json()
    signupState.value = response.ok
    signupMessage.value = data.message || (response.ok ? 'Signup successful' : 'Signup failed')
    showDialog.value = true
  } catch (err) {
    console.error('Error signing up:', err.message)
    signupState.value = false
    signupMessage.value = 'Signup failed. Please try again.'
    showDialog.value = true
  }
}

const closeDialog = () => {
  showDialog.value = false
}
</script>