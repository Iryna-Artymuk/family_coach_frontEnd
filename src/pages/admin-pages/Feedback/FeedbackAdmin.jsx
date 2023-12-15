import { useEffect, useState } from 'react';


import useFeedbackStore from '@/store/feedbackStore';
import { useIsLoading } from '@/store/loadingStore';
import Spinner from '@/ui/Spinner/Spinner';


import FeedbackTable from '@/components/admin/FeedbackTable/FeedbackTable';
const FeedbackAdmin = () => {
  const [feedbackStatus] = useState('all');
  const { getFeedbacks } = useFeedbackStore();
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
  return (
    <div>
      {isLoading && <Spinner />}
      {feedbacks.length > 0 && <FeedbackTable data={feedbacks} />}
    </div>
  );
};

export default FeedbackAdmin;
