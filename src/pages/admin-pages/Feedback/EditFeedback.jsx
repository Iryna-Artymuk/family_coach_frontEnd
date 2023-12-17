import useFeedbackStore from '@/store/feedbackStore';
import Select from 'react-select';
import { useIsLoading } from '@/store/loadingStore';
import Spinner from '@/ui/Spinner/Spinner';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatDate } from '@/helpers/formatDate';
import Button from '@/components/admin/Button/Button';
import { toast } from 'react-toastify';

import styles from './FeedbackAdmin.module.scss';
const options = [
  { value: 'Опубліковано', label: 'Опубліковано' },
  { value: 'На розгляді', label: 'На розгляді' },
];
const EditFeedback = () => {
  const { id } = useParams();
  const { getFeedbacks, getFeedbackId, updateFeedbackStatus } =
    useFeedbackStore();
  const [feedback, setFeedback] = useState({});
  const [selectedOption, setSelectedOption] = useState();

  const { isLoading, setIsLoading, setLoaded } = useIsLoading();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading();
        const result = await getFeedbackId(id);
        setFeedback(result.data);
        if (result.data.approved) {
          setSelectedOption(
            options.find(option => option.value === 'Опубліковано')
          );
        } else {
          setSelectedOption(
            options.find(option => option.value === 'На розгляді')
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded();
      }
    };
    fetchData();
  }, [getFeedbacks, setIsLoading, setLoaded, getFeedbackId, id]);

  const handleSelectChange = selectedOption => {
    setSelectedOption(selectedOption);
  };
  const handleStatusChange = async () => {
    // console.log('selectedOption.value: ', selectedOption.value);
    const updateStatus = {};
    if (selectedOption.value === 'Опубліковано') {
      updateStatus.approved = true;
    } else {
      updateStatus.approved = false;
    }

    try {
      setIsLoading();
      const result = await updateFeedbackStatus(id, updateStatus);
      if (result.status === 'success') {
        toast.success(' Статус оновлено  ');
      } else if (result.status === 'error') {
        toast.success(' Статус оновлено  ');
      }
    } catch (error) {
      toast.error(` Статус  не оновлено  ${error.message}`);
    } finally {
      setLoaded();
    }
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.wrapper}>
          <div>
            <p className={styles.label}>Ім&apos;я</p>
            <p className={styles.content}>{feedback.name}</p>
          </div>
          <div>
            <p className={styles.label}>Дата</p>
            <p className={styles.content}> {formatDate(feedback.createdAt)}</p>
          </div>
          <div>
            <p className={styles.label}>Відгук</p>
            <p className={styles.content}> {feedback.feedback}</p>
          </div>

          <Select
            options={options}
            value={selectedOption}
            onChange={handleSelectChange}
            styles={{
              control: baseStyles => ({
                ...baseStyles,
                borderRadius: '15px',
                border: '1px solid  #444',
                width: 262,
                color: '#000',
                fontFamily: 'Montserrat',
                fontSize: 18,
                fontWeight: 500,
              }),
              menu: baseStyles => ({
                ...baseStyles,
                width: 262,
                borderRadius: '15px',
                color: '#000',
                fontFamily: 'Montserrat',
                fontSize: 18,
                fontWeight: 500,
                border: '1px solid  #444',
                overflow: 'hidden',
              }),

              singleValue: baseStyles => ({
                ...baseStyles,
                padding: '10px 24px',
                borderRadius: '15px',
              }),
            }}
            theme={theme => ({
              ...theme,

              colors: {
                ...theme.colors,
                borderRadius: 15,
                primary25: '',
                primary: '#314385',
              },
            })}
          />
          <Button onClick={handleStatusChange}> Змінити статус</Button>
        </div>
      )}
    </div>
  );
};

export default EditFeedback;
