import {View, Text, Image} from 'react-native';
import React from 'react';

import styles from './Detail.style';
import useFetch from '../../Hooks/useFetch';
import Config from 'react-native-config';

const Detail = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(`${Config.API_URL}/${id}`);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.image}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.category}>{data.category}</Text>
        <Text style={styles.price}>{data.price}</Text>
      </View>
    </View>
  );
};

export default Detail;
