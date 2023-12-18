import { useIsLoading } from '@/store/loadingStore';
import usePriceStore from '@/store/priceStore';
import Spinner from '@/ui/Spinner/Spinner';
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import TextInput from '../formik/TextInput/TextInput';
import styles from './Price.module.scss';
import { toast } from 'react-toastify';

const initialValues = {
  category: 'Дорослі',
  type: '',
  amount: '',
  duration: '',
  period: '',
  price: '',
};
const AdultPriceAdmin = () => {
  const { getPrices, updatePrice } = usePriceStore();
  const [adultPrices, setAdultPrices] = useState([]);
  const { isLoading, setIsLoading, setLoaded } = useIsLoading();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading();
        const result = await getPrices();

        const { adultPrices } = result.data[0];
        console.log('adultPrices : ', adultPrices);
        setAdultPrices(adultPrices);
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
        toast.success('Ура, пакет оновлено');
        setLoaded();
      } else {
        setLoaded();
        if (result.status === 'error') {
          toast.error(
            'не вдалось оновити пакет, зверніться в службу підтримки 0666796604'
          );
        }
      }
      setLoaded();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && adultPrices?.length > 0 && (
        <div className={styles.wrapper}>
          {adultPrices?.map((price, index) => {
            return (
              <Formik
                key={index}
                initialValues={initialValues}
                // validationSchema={newsValidation}
                onSubmit={value => {
                  updateOnSubmit(value, price._id);
                }}
              >
                <Form>
                  <div className={styles.layout}>
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
                      maxLength={20}
                      showCharacterCount={true}
                      text={price?.period}
                      label="Термін дії(днів)"
                    />
                    <Field
                      name="price"
                      id="price"
                      placeholder="Ціна"
                      component={TextInput}
                      maxLength={20}
                      showCharacterCount={true}
                      text={price?.price}
                      label="Ціна(грн)"
                    />

                    <button className={styles.button} type="submit">
                      {' '}
                      Оновити пакет
                    </button>
                  </div>
                </Form>
              </Formik>
            );
          })}

          <Formik
            initialValues={initialValues}
            // validationSchema={newsValidation}
            // onSubmit={addOnSubmit}
          >
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
                  maxLength={100}
                  showCharacterCount={true}
                  label="Кількість консультацій"
                />
                <Field
                  name="duration"
                  id="duration"
                  placeholder="Кількість консультацій"
                  component={TextInput}
                  maxLength={20}
                  showCharacterCount={true}
                  label="Тривалість(хв)"
                />
                <Field
                  name="period"
                  id="period"
                  placeholder="Термін дії"
                  component={TextInput}
                  maxLength={20}
                  showCharacterCount={true}
                  label="Термін дії(днів)"
                />
                <Field
                  name="price"
                  id="price"
                  placeholder="Ціна"
                  component={TextInput}
                  maxLength={20}
                  showCharacterCount={true}
                  label="Ціна(грн)"
                />

                <button className={styles.button} type="submit">
                  Додати новий пакет
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default AdultPriceAdmin;
