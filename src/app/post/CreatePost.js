import Post from '@/domain/post'
import PostRepository from '@/infra/post/PostRepository'

export default function createPost(title, description) {
	const post = new Post(title, description)
	PostRepository.add(post)
	return post
}