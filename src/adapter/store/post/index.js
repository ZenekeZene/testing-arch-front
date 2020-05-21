import createPost from '@/app/post/CreatePost'

export default {
	namespaced: true,
	state: {
		posts: []
	},
	mutations: {
		addPost(state, { post }) {
			state.posts.push(post)
		}
	},
	getters: {
		postsCount(state) {
			return state.posts.length
		}
	},
	actions: {
		getPost({ commit }, { title, description }) {
			const post = createPost(title, description)
			commit('addPost', { post })
		}
	}
}