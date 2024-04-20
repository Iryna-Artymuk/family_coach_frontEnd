import { Link } from 'react-router-dom';
import clsx from 'clsx';
// import useNewsStore from '@/store/newsStore';
import { formatDate } from '@/helpers/formatDate';

import sprite from '@/assets/icons/sprite-admin.svg';
import style from './BlogTable.module.scss';

const BlogTable = ({ data, handelDelete }) => {
  // const { deletePost } = useNewsStore();

  return (
    <div className={style.wrapper}>
      <div>
        <div className={style.container}>
          <div className={clsx(style.tableItem, style.headItem)}>Заголовок</div>
          <div className={clsx(style.tableItem, style.headItem)}>Дата</div>

          <div className={clsx(style.tableItem, style.headItem)}></div>
          <div className={clsx(style.tableItem, style.headItem)}></div>
        </div>

        {data.map(post => (
          <div key={post._id} className={style.container}>
            <div className={style.tableItem}>{post.title}</div>

            <div className={style.tableItem}>{formatDate(post.createdAt)}</div>
            <div className={style.tableItem}>
              <Link to={`edit/${post._id}`}>
                <svg>
                  <use href={`${sprite}#icon-edit`} />
                </svg>
              </Link>
            </div>

            <div className={style.tableItem}>
              <button onClick={() => handelDelete(post._id)}>
                <svg>
                  <use href={`${sprite}#icon-trash`} />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogTable;
