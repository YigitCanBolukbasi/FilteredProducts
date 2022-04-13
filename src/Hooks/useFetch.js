import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, Setloading] = useState(true);
  const [filter, setFilter] = useState([]);

  const fetchData = async () => {
    try {
      const {data: productData} = await axios.get(url);
      setData(productData);
      setFilter(productData);
      Setloading(false);
    } catch (err) {
      setError(err.message);
      Setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {data, error, loading, setFilter, filter};
};

export default useFetch;
