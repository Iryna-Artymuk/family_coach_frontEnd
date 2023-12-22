import { useParams } from 'react-router-dom';

const EditBlogPost = () => {
  const { id } = useParams();
  return <div>EditBlogPost{console.log('id: ', id)}</div>;
};

export default EditBlogPost;
