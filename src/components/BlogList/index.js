import BlogItem from '../BlogItem'
import './index.css'

const BlogsList = props => {
  const {blogsListDetails} = props
  return (
    <ul>
      {blogsListDetails.map(each => (
        <BlogItem key={each.id} blogsListDetails={each} />
      ))}
    </ul>
  )
}
export default BlogsList
