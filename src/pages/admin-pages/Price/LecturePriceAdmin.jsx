// const LecturePriceAdmin = () => {
//   return <div>LecturePriceAdmin </div>;
// };

// export default LecturePriceAdmin;

import { toast } from 'react-toastify';
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';

import { useIsLoading } from '@/store/loadingStore';
import usePriceStore from '@/store/priceStore';
import Spinner from '@/ui/Spinner/Spinner';

import TextInput from '../formik/TextInput/TextInput';

import sprite from '@/assets/icons/sprite-admin.svg';
import styles from './Price.module.scss';

import clsx from 'clsx';
import { lecturePriceValidationSchema } from './validationShemas/lecturePriceValidationSchema';
import ButtonSubmit from '@/components/admin/SubmitButton/ButtonSubmit';

const initialValues = {
  category: 'Лекції',
  type: '',
  theme: '',
  price: '',
};
const LecturePriceAdmin = () => {
  const { getPrices, updatePrice, addPrice, deletePriceById } = usePriceStore();
  const [lecturePrices, setLecturePrices] = useState([]);
  const { isLoading, setIsLoading, setLoaded } = useIsLoading();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading();
        const result = await getPrices();

        const { lecturePrices } = result.data[0];
        setLecturePrices(lecturePrices);
        setLoaded();
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded();
      }
    };
    fetchData();
  }, [getPrices, setIsLoading, setLoaded]);

  const updateOnSubmit = async (values, id) => {
    try {
      setIsLoading();
      const result = await updatePrice(values, id);
      if (result.status === 'success') {
        toast.success(
          'успішно оновлено, щоб побачити результат перезагрузіть сторінку'
        );
      } else {
        setLoaded();
        if (result.status === 'error') {
          toast.error('ой, сталась помилка , служба підтрики 24/7 0666796604');
        }
      }
      setLoaded();
    } catch (error) {
      console.log(error);
    }
  };
  const addOnSubmit = async (values, id) => {
    try {
      setIsLoading();
      const result = await addPrice(values, id);
      if (result.status === 'success') {
        toast.success(`Ура, ${values.type} додано успішно `);
      } else {
        setLoaded();
        if (result.status === 'error') {
          toast.error(
            `ой, сталась помилка, ${result.message} служба підтримки 0666796604`
          );
        }
      }
      setLoaded();
    } catch (error) {
      console.log(error);
    }
  };
  const handelDelete = async id => {
    const category = 'Лекції';
    try {
      setIsLoading();
      const result = await deletePriceById(id, category);

      if (result.status === 'success') {
        const deletedDiploma = lecturePrices.find(
          diploma => diploma._id === id
        );
        const newPriceArr = lecturePrices.filter(
          diploma => diploma._id !== deletedDiploma._id
        );
        setLecturePrices(newPriceArr);
        toast.success('Ура, успішно видалено');
        setLoaded();
      } else {
        if (result.status === 'error') {
          toast.error(`ой, сталась помилка ,${result.message}`);
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
      {!isLoading && lecturePrices?.length > 0 && (
        <div className={styles.wrapper}>
          {lecturePrices?.map((price, index) => {
            return (
              <Formik
                key={index}
                initialValues={initialValues}
                validationSchema={lecturePriceValidationSchema}
                onSubmit={value => {
                  updateOnSubmit(value, price._id);
                }}
              >
                {formik => {
                  return (
                    <Form>
                      <div className={styles.layout}>
                        <div
                          className={styles.deleteIcon}
                          onClick={() => handelDelete(price._id)}
                        >
                          <svg>
                            <use href={`${sprite}#${'icon-cross'}`} />
                          </svg>
                        </div>
                        <Field
                          name="category"
                          id="category"
                          placeholder="category"
                          component={TextInput}
                          maxLength={20}
                          showCharacterCount={true}
                          text={price?.category}
                          label="Категорія"
                        />
                        <Field
                          name="type"
                          id="type"
                          placeholder="Тип"
                          component={TextInput}
                          maxLength={20}
                          showCharacterCount={true}
                          text={price?.type}
                          label="Тип"
                        />

                        <Field
                          name="theme"
                          id="theme"
                          placeholder="Тема"
                          maxLength={100}
                          showCharacterCount={true}
                          component={TextInput}
                          text={price?.theme}
                          label="Тема лекції чи вебінару"
                        />

                        <Field
                          name="price"
                          id="price"
                          placeholder="Ціна"
                          component={TextInput}
                          text={price?.price}
                          label="Ціна(грн)"
                        />

                        <ButtonSubmit
                          type="submit"
                          handlClick={formik.handleSubmit}
                          nameButton="Оновити лекцію"
                          isActive={formik.isValid}
                        />
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            );
          })}

          <Formik
            initialValues={initialValues}
            validationSchema={lecturePriceValidationSchema}
            onSubmit={addOnSubmit}
          >
            {formik => {
              return (
                <Form>
                  <div className={styles.layout}>
                    <Field
                      name="category"
                      id="category"
                      placeholder="category"
                      component={TextInput}
                      maxLength={20}
                      showCharacterCount={true}
                      label="Категорія"
                    />
                    <Field
                      name="type"
                      id="type"
                      placeholder="Тип"
                      component={TextInput}
                      maxLength={20}
                      showCharacterCount={true}
                      label="Тип"
                    />
                    <Field
                      name="theme"
                      id="theme"
                      placeholder="Ціна"
                      component={TextInput}
                      maxLength={100}
                      label="Тема лекції чи вебінару"
                    />
                    <Field
                      name="price"
                      id="price"
                      placeholder="Ціна"
                      component={TextInput}
                      label="Ціна(грн)"
                    />

                    <ButtonSubmit
                      type="submit"
                      handlClick={formik.handleSubmit}
                      nameButton="Додати лекцію"
                      isActive={formik.isValid}
                      handlerSubmitButton={formik.handleSubmit}
                    />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default LecturePriceAdmin;
