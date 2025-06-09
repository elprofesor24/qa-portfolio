<template>
  <div class="w-full flex flex-col items-center px-[10%] pt-10">
    <div class="max-w-4xl text-center space-y-6">
      <h2 class="text-4xl font-semibold italic whitespace-pre-line">
        Welcome to my
        <br />
        Practice Vue App!
      </h2>
      <p class="text-base whitespace-pre-line">
        This is a simple app powered by Vue 3 with TailwindCSS, that may be used to practice and demonstrate the fundamentals of test automation and web development.
        <br />
        Test your knowledge and skills with various automation tools and frameworks that you may use for your applications, including Selenium, Cypress, Robot Framework, and many more!
      </p>
      <p class="text-sm italic">
        Select a tab below to practice automation with different example forms and pages
      </p>
    </div>

    <div class="w-full max-w-4xl mt-10">
      <Tabs />
    </div>
  </div>
</template>

<script setup>
import Tabs from './Tabs.vue'
</script>