import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useIsLoading } from '@/store/loadingStore';
import useBlogStore from '@/store/blogStore';
import BlogTable from '@/components/admin/BlogTable.jsx/BlogTable';
import Spinner from '@/ui/Spinner/Spinner';
import ButtonSubmit from '@/components/admin/SubmitButton/ButtonSubmit';
import { Link } from 'react-router-dom';
const BlogAdmin = () => {
  const { getPosts, deletePostById } = useBlogStore();
  const [posts, setPosts] = useState([]);
  const { isLoading, setIsLoading, setLoaded } = useIsLoading();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading();
        const result = await getPosts();
        setPosts(result.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded();
      }
    };
    fetchData();
  }, [getPosts, setPosts, setIsLoading, setLoaded]);

  const handelDelete = async id => {
    try {
      setIsLoading();
      const result = await deletePostById(id);

      if (result.status === 'success') {
        const deletedPost = posts.find(post => post._id === id);
        const newPostsArr = posts.filter(post => post._id !== deletedPost._id);
        setPosts(newPostsArr);
        toast.success('Стаття видалена успішно');
        setLoaded();
      } else {
        if (result.status === 'error') {
          toast.error(
            'не вдалось видалити, технічна служба підтримки 0666796604'
          );
        }
        setLoaded();
        return;
      }
    } catch (error) {
      toast.error(`Помилка  ${error.message}`);
      console.log(error);
      setLoaded();
    }
  };
  return (
    <div>
      {isLoading && <Spinner />}
      {posts.length > 0 && (
        <BlogTable handelDelete={handelDelete} data={posts} />
      )}
      <Link to={`add`}>
        <ButtonSubmit
          type="button"
          nameButton="написати нову  статтю"
          isActive={true}
        />
      </Link>
    </div>
  );
};

export default BlogAdmin;
