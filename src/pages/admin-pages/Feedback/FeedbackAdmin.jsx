import { useEffect, useState } from 'react';

import useFeedbackStore from '@/store/feedbackStore';
import { useIsLoading } from '@/store/loadingStore';
import Spinner from '@/ui/Spinner/Spinner';

import FeedbackTable from '@/components/admin/FeedbackTable/FeedbackTable';
import { toast } from 'react-toastify';
const FeedbackAdmin = () => {
  const [feedbackStatus] = useState('all');
  const { getFeedbacks, deleteFeedbackId } = useFeedbackStore();
  const [feedbacks, setFeedbacks] = useState([]);
  const { isLoading, setIsLoading, setLoaded } = useIsLoading();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading();
        const result = await getFeedbacks(feedbackStatus);
        setFeedbacks(result.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded();
      }
    };
    fetchData();
  }, [getFeedbacks, feedbackStatus, setIsLoading, setLoaded]);

  const handelDelete = async id => {
    try {
      setIsLoading();
      const result = await deleteFeedbackId(id);

      if (result.status === 'success') {
        const deletedFeedback = feedbacks.find(diploma => diploma._id === id);
        const newFeedbacksArr = feedbacks.filter(
          diploma => diploma._id !== deletedFeedback._id
        );
        setFeedbacks(newFeedbacksArr);
        toast.success('Ура, відгук  видалений');
        setLoaded();
      } else {
        if (result.status === 'error') {
          toast.error('не вдалось видалити , запитай Іру');
        }
        setLoaded();
        return;
      }
    } catch (error) {
      console.log(error);
      setLoaded();
    }
  };
  return (
    <div>
      {isLoading && <Spinner />}
      {feedbacks.length > 0 && (
        <FeedbackTable handelDelete={handelDelete} data={feedbacks} />
      )}
    </div>
  );
};

export default FeedbackAdmin;
