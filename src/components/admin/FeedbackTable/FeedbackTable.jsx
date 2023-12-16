import { Link } from 'react-router-dom';
import clsx from 'clsx';
// import useNewsStore from '@/store/newsStore';
import { formatDate } from '@/helpers/formatDate';

import sprite from '@/assets/icons/sprite-admin.svg';
import style from './FeedbackTable.module.scss';
const FeedbackTable = ({ data, handelDelete }) => {
  // const { deletePost } = useNewsStore();

  const subString = str => {
    return str.slice(0, 30);
  };
  const getStatus = status => {
    if (status) {
      return 'Опубліковано';
    } else {
      return 'На розгляді';
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={clsx(style.tableItem, style.headItem)}>Імя</div>
        <div className={clsx(style.tableItem, style.headItem)}>Відгук</div>
        <div className={clsx(style.tableItem, style.headItem)}>Статус</div>
        <div className={clsx(style.tableItem, style.headItem)}>Дата</div>
        <div className={clsx(style.tableItem, style.headItem)}></div>
        <div className={clsx(style.tableItem, style.headItem)}></div>
      </div>

      {data.map((feedback, index) => (
        <div key={index} className={style.container}>
          <div className={style.tableItem}>{feedback.name}</div>
          <div className={style.tableItem}>{subString(feedback.feedback)}</div>
          <div
            className={clsx(
              style.tableItem,
              !feedback.approved && style.notAprooved
            )}
          >
            {getStatus(feedback.approved)}
          </div>
          <div className={style.tableItem}>
            {formatDate(feedback.createdAt)}
          </div>
          <div className={style.tableItem}>
            <Link to={`edit/${feedback.id}`}>
              <svg>
                <use href={`${sprite}#icon-edit`} />
              </svg>
            </Link>
          </div>

          <div className={style.tableItem}>
            <button onClick={() => handelDelete(feedback._id)}>
              <svg>
                <use href={`${sprite}#icon-trash`} />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FeedbackTable;
