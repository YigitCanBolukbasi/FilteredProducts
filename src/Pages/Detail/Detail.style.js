import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body_container: {
    alignItems: 'flex-end',
    padding: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    fontSize: 16,
    margin: 5,
  },
  category: {
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'red',
  },
});
