<template>
  <div class="min-h-screen bg-gray-100">
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Body from './components/Body.vue';

export default {
  components: {
    Header,
    Body,
  },
};
</script>