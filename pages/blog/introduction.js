import PostLayout from '../../components/Layout/PostLayout'

const markdown = `
I'm manekawa, a developer.
`

const Post = () => {
  return <PostLayout useMarkdown={true} useImage={true}>
    {markdown}
  </PostLayout>
}

export default Post
