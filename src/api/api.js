import axios from 'axios';

const axios_instance = axios.create({
  baseURL: 'https://643a7f81bd3623f1b9b4b1c4.mockapi.io/myContacts',
});

// export async function getFeedbacks() {
//   const { data } = await axios_instance.get(`/feedback`);

//   return data;
// }

const feedbacks = {
  getFeedbacks: async function () {
    const { data } = await axios_instance.get(`/feeedback`);

    return data;
  },
  addFeedbacks: async function (newFeedBack) {
    const { data } = await axios_instance.post(`/feeedback`, newFeedBack);

    return data;
  },
};

export default feedbacks;
