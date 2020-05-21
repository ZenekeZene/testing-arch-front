<template>
  <div id="app">
    <span>Nº de posts: {{ postsCount }}</span>
    <PostComponent
      v-for="(post, index) in posts"
      :key="`post-${index}`"
      :title="post.title"
      :description="post.description"
    />
  </div>
</template>

<script>
import PostComponent from './components/post/PostComponent'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    PostComponent
  },
  computed: {
    ...mapState('post', ['posts']),
    ...mapGetters('post', ['postsCount'])
  },
  methods: {
    ...mapActions('post', ['getPost'])
  },
  mounted() {
    this.getPost({ title: 'Título 1', description: 'Description 1'})
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
