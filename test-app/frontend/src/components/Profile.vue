<template>
  <div class="w-full max-w-2xl mx-auto flex flex-col items-center text-center">
    <img
      v-if="profile"
      :src="avatar"
      alt="Profile Avatar"
      class="w-24 h-24 rounded-full mb-4"
    />

    <h1 v-if="profile" class="text-2xl font-bold mb-2" data-testid="profile-name">
      Hi, I'm {{ profile.firstName }} {{ profile.lastName }}!
    </h1>

    <p
      v-if="profile"
      class="text-sm text-justify px-2"
      data-testid="profile-about"
      v-html="profile.aboutMe"
    />

    <p v-if="profile" class="text-xs italic mt-4">
      This is a static user profile for QA and test automation practice.
    </p>

    <template v-else>
      <img :src="avatar" alt="Profile Avatar" class="w-24 h-24 rounded-full mb-4" />
      <h1 class="text-2xl font-bold mb-2">Profile not found</h1>
      <p class="text-sm">
        <a href="#" @click.prevent="() => handleChange(null, 0)" class="underline">
          Sign in to access your profile data
        </a>
      </p>
    </template>
  </div>
</template>

<script setup>
import avatar from '../assets/images/avatar.png'
const props = defineProps(['handleChange'])

const profile = {
  firstName: 'Pavel',
  lastName: 'Dobes',
  aboutMe: `
    <p>
      I'm a QA engineer with hands-on experience in both frontend and backend testing.
      I specialize in designing and executing test cases using tools like Cypress, Playwright, and Postman
      to ensure the stability and quality of modern web applications.
    </p>
    <p class="mt-2">
      I'm focused on building efficient, repeatable testing workflows and contributing to clean, maintainable codebases.
      I collaborate closely with developers and product teams to identify issues early and help deliver software that’s both reliable and user-friendly.
    </p>
  `
}
</script>