import axiosClient from './axiosClient';

const userApi = {
  
  getAll(params) {
    const url = '/api/v1/users';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/api/v1/user/${id}`;
    return axiosClient.get(url);
  },  

  update(data) {
    const url = `/api/v1/user/${data.id}`;
    return axiosClient.put(url, data);
  }  
};

export default userApi;
