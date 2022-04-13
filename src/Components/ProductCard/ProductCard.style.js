import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
  },
  body_container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  price: {
    color: 'red',
  },
});
