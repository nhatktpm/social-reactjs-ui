import axiosClient from './axiosClient';

const postsApi = {
  getAll(params) {
    const url = '/api/v1/posts';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/api/v1/post/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/api/v1/post';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/api/v1/post/${data.id}`;
    return axiosClient.put(url, data);
  },

  remove(id) {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  },
};

export default postsApi;