<template>
  <li>
    <router-link :to="{ name: 'Buildpack', params: { id: buildpack.id }}">{{ buildpack.name }}</router-link>
    <a :href="github" target="_blank">Github</a>
  </li>
  </div>
</template>

<script>
import VueRouter from 'vue-router'

export default {
  name: 'li-buildpack',
  props: ['buildpack'],
  components: { 'router-link': VueRouter },
  computed: {
    github: function () {
      return `https://github.com/${this.buildpack.repo}`
    }
  }
}
</script>

<style scoped>
</style>
