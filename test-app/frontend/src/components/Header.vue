<template>
  <header class="sticky top-0 bg-gray-100 shadow-md w-full z-50">
    <div class="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
      <h1 class="text-xl font-semibold hidden md:flex">ClickTest</h1>

      <div class="hidden md:flex gap-2">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="w-10 h-10 p-1.5 bg-white rounded-full flex items-center justify-center"
        >
          <img
            :src="link.logo"
            :alt="link.label"
            class="w-full h-full object-contain"
            :title="link.label"
          />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import githubLogo from '../assets/images/github-logo.png'
import linkedinLogo from '../assets/images/linkedin-black-logo.png'
import vueLogo from '../assets/images/vue-logo.png'

const links = [
  { label: 'Learn Vue', logo: vueLogo, url: 'https://vuejs.org/guide/introduction.html' },
  {
    label: 'My Github Portfolio',
    logo: githubLogo,
    url: 'https://github.com/elprofesor24/qa-portfolio'
  },
  {
    label: 'My LinkedIn Profile',
    logo: linkedinLogo,
    url: 'https://www.linkedin.com/in/paveldobes/'
  }
]
</script>