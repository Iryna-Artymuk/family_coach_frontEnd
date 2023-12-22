import { Field, Formik, Form, getIn } from 'formik';

import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useIsLoading } from '@/store/loadingStore';
import usePriceStore from '@/store/priceStore';



import TextInput from '../formik/TextInput/TextInput';
import Spinner from '@/ui/Spinner/Spinner';
import sprite from '@/assets/icons/sprite-admin.svg';
import styles from './Price.module.scss';
import { kidsPriceValidationSchema } from './validationShemas/kidsPriceValidationSchema';
import ButtonSubmit from '@/components/admin/SubmitButton/ButtonSubmit';

const initialValues = {
  category: 'Діти',
  type: '',
  amount: '',
  duration: '',
  period: '',
  price: '',
  singleConsultation: {
    type: '',
    duration: '',
    price: '',
  },
};
const KidsPriceAdmin = () => {
  const { getPrices, updatePrice, addPrice, deletePriceById } = usePriceStore();
  const [kidsPrices, setKidsPrices] = useState([]);
  const { isLoading, setIsLoading, setLoaded } = useIsLoading();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading();
        const result = await getPrices();

        const { kidsPrices } = result.data[0];
        setKidsPrices(kidsPrices);
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
  const addOnSubmit = async values => {
    console.log('values: ', values);
    try {
      setIsLoading();
      const result = await addPrice(values);
      if (result.status === 'success') {
        toast.success(`Ура, новий пакет${values.type} додано`);
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
    const category = 'Діти';
    try {
      setIsLoading();
      const result = await deletePriceById(id, category);

      if (result.status === 'success') {
        const deletedPrice = kidsPrices.find(price => price._id === id);
        const newPriceArr = kidsPrices.filter(
          price => price._id !== deletedPrice._id
        );
        setKidsPrices(newPriceArr);
        toast.success('Ура,  видалено успішно ');
        setLoaded();
      } else {
        if (result.status === 'error') {
          toast.error(
            `ой, сталась помилка, ${result.message} служба підтримки 0666796604`
          );
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
      {!isLoading && kidsPrices?.length > 0 && (
        <div className={styles.wrapper}>
          {kidsPrices?.map((price, index) => {
            return (
              <Formik
                key={index}
                initialValues={initialValues}
                validationSchema={kidsPriceValidationSchema}
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
                          name="amount"
                          id="amount"
                          placeholder="Кількість консультацій"
                          component={TextInput}
                          maxLength={100}
                          showCharacterCount={true}
                          text={price?.amount}
                          label="Кількість консультацій"
                        />
                        <Field
                          name="duration"
                          id="duration"
                          placeholder="Кількість консультацій"
                          component={TextInput}
                          maxLength={20}
                          showCharacterCount={true}
                          text={price?.duration}
                          label="Тривалість(хв)"
                        />
                        <Field
                          name="period"
                          id="period"
                          placeholder="Термін дії"
                          component={TextInput}
                          text={price?.period}
                          label="Термін дії(днів)"
                        />
                        <Field
                          name="price"
                          id="price"
                          placeholder="Ціна"
                          component={TextInput}
                          text={price?.price}
                          label="Ціна(грн)"
                        />

                        <Field
                          name="singleConsultation.type"
                          id="singleConsultation.type"
                          placeholder="Тип"
                          component={TextInput}
                          maxLength={20}
                          showCharacterCount={true}
                          text={price?.singleConsultation.type}
                          label="Тип"
                          nestedErrorText={
                            getIn(formik.touched, 'singleConsultation.type') &&
                            getIn(formik.errors, 'singleConsultation.type')
                          }
                          nestedError={Boolean(
                            getIn(formik.touched, 'singleConsultation.type') &&
                              getIn(formik.errors, 'singleConsultation.type')
                          )}
                        />
                        <Field
                          name="singleConsultation.duration"
                          id="singleConsultation.duration"
                          placeholder="Кількість консультацій"
                          component={TextInput}
                          maxLength={20}
                          showCharacterCount={true}
                          text={price?.singleConsultation.duration}
                          label="Тривалість(хв)"
                          nestedErrorText={
                            getIn(
                              formik.touched,
                              'singleConsultation.duration'
                            ) &&
                            getIn(formik.errors, 'singleConsultation.duration')
                          }
                          nestedError={Boolean(
                            getIn(
                              formik.touched,
                              'singleConsultation.duration'
                            ) &&
                              getIn(
                                formik.errors,
                                'singleConsultation.duration'
                              )
                          )}
                        />
                        <Field
                          name="singleConsultation.price"
                          id="singleConsultation.price"
                          placeholder="Ціна"
                          component={TextInput}
                          text={price?.singleConsultation.price}
                          label="Ціна(грн)"
                          nestedErrorText={
                            getIn(formik.touched, 'singleConsultation.price') &&
                            getIn(formik.errors, 'singleConsultation.price')
                          }
                          nestedError={Boolean(
                            getIn(formik.touched, 'singleConsultation.price') &&
                              getIn(formik.errors, 'singleConsultation.price')
                          )}
                        />
                        <ButtonSubmit
                        type='submit'
                          nameButton="Оновити пакет"
                          isActive={formik.isValid}
                       handlClick={formik.handleSubmit}
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
            validationSchema={kidsPriceValidationSchema}
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
                      // placeholder="Тип"
                      component={TextInput}
                      maxLength={20}
                      showCharacterCount={true}
                      label="Тип"
                    />
                    <Field
                      name="amount"
                      id="amount"
                      placeholder="Кількість консультацій"
                      component={TextInput}
                      maxLength={50}
                      showCharacterCount={true}
                      label="Кількість консультацій"
                    />
                    <Field
                      name="duration"
                      id="duration"
                      placeholder="Кількість консультацій"
                      component={TextInput}
                      label="Тривалість(хв)"
                    />
                    <Field
                      name="period"
                      id="period"
                      placeholder="Термін дії"
                      component={TextInput}
                      label="Термін дії(днів)"
                    />
                    <Field
                      name="price"
                      id="price"
                      placeholder="Ціна"
                      component={TextInput}
                      label="Ціна(грн)"
                    />

                    <Field
                      name="singleConsultation.type"
                      id="singleConsultation.type"
                      // placeholder="Тип разової консультації"
                      component={TextInput}
                      maxLength={20}
                      showCharacterCount={true}
                      label="Тип разової консультації"
                      nestedErrorText={
                        getIn(formik.touched, 'singleConsultation.type') &&
                        getIn(formik.errors, 'singleConsultation.type')
                      }
                      nestedError={Boolean(
                        getIn(formik.touched, 'singleConsultation.type') &&
                          getIn(formik.errors, 'singleConsultation.type')
                      )}
                    />
                    <Field
                      name="singleConsultation.duration"
                      id="singleConsultation.duration"
                      // placeholder="Кількість разових консультацій"
                      component={TextInput}
                      maxLength={20}
                      showCharacterCount={true}
                      label="Тривалість разових консультацій(хв)"
                      nestedErrorText={
                        getIn(formik.touched, 'singleConsultation.duration') &&
                        getIn(formik.errors, 'singleConsultation.duration')
                      }
                      nestedError={Boolean(
                        getIn(formik.touched, 'singleConsultation.duration') &&
                          getIn(formik.errors, 'singleConsultation.duration')
                      )}
                    />
                    <Field
                      name="singleConsultation.price"
                      id="singleConsultationPrice"
                      // placeholder="Ціна"
                      component={TextInput}
                      label="Ціна разової консультації(грн)"
                      nestedErrorText={
                        getIn( formik.touched, 'singleConsultation.price' ) &&
                        getIn(formik.errors, 'singleConsultation.price')
                      }
                      nestedError={Boolean(
                        getIn(formik.touched, 'singleConsultation.price') &&
                          getIn(formik.errors, 'singleConsultation.price')
                      )}
                    />
                    <ButtonSubmit
                    type='submit'
                      nameButton="додати пакет"
                      isActive={formik.isValid}
                   handlClick={formik.handleSubmit}
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

export default KidsPriceAdmin;
