import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';

import styles from './Product.style';
import useFetch from '../../Hooks/useFetch';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Config from 'react-native-config';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';

const Product = ({navigation}) => {
  const [inputFilter, setInputFilter] = useState('');
  const {data, loading, error, filter, setFilter} = useFetch(
    `${Config.API_URL}`,
  );
  const handleProductSelect = id => {
    navigation.navigate('DetailScreen', {id});
  };

  const renderItem = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  const CategorizeData = data.map(item => {
    return item;
  });

  function handleSearch() {
    const SearchData = CategorizeData.filter(item => {
      return item.title
        .toString()
        .toLowerCase()
        .includes(inputFilter.toLocaleLowerCase());
    });
    setFilter(SearchData);
  }

  function handleMansCategory() {
    const categorizeMans = CategorizeData.filter(
      item => item.category === "men's clothing",
    );
    setFilter(categorizeMans);
  }
  function handleWomansCategory() {
    const categorizeWoman = CategorizeData.filter(
      item => item.category === 'jewelery',
    );
    setFilter(categorizeWoman);
  }
  function handleElectronicCategory() {
    const categorizeElectronics = CategorizeData.filter(
      item => item.category === 'electronics',
    );
    setFilter(categorizeElectronics);
  }
  function handleAllCategory() {
    setFilter(data);
  }

  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <View>
        <Input
          placeholder={'ara'}
          value={inputFilter}
          onChangeText={setInputFilter}
        />
        <Button title={'search'} onPress={handleSearch} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button title={'all pro.'} onPress={handleAllCategory} />
        <Button title={'mans'} onPress={handleMansCategory} />
        <Button title={'womans'} onPress={handleWomansCategory} />
        <Button title={'Electronics'} onPress={handleElectronicCategory} />
      </View>
      <FlatList data={filter} renderItem={renderItem} />
    </View>
  );
};

export default Product;
