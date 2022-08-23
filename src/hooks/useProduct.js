import { useState } from 'react';
// import api from '../api/index';
import api from '../api/index';

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getAllProduct = async (page, limit, sortBy, order) => {
    try {
      setIsLoading(true);
      const res = await api.getAll(page, limit, sortBy, order);
      setData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, data, getAllProduct];
};

export const useDetailProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataDetail, setDataDetail] = useState([]);

  const getProductDetail = async id => {
    try {
      setIsLoading(true);
      const res = await api.getById(id);
      setDataDetail(res.dataDetail);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, dataDetail, getProductDetail];
};