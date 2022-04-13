import {View, SafeAreaView, Text} from 'react-native';
import React from 'react';

import {Formik} from 'formik';

import styles from './Login.style';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import usePost from '../../Hooks/usePost';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();
  const handleLogin = formValues => {
    post('https://fakestoreapi.com/auth/login', formValues);
    navigation.navigate('ProductScreen');
  };

  return (
    <SafeAreaView>
      <View>
        <Text>GresS</Text>
      </View>
      <Formik
        initialValues={{userName: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values}) => (
          <View>
            <Input
              placeholder={'kullanıcı adı'}
              value={values.userName}
              onChangeText={handleChange('userName')}
            />
            <Input
              placeholder={'şifre'}
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button title={'giriş yap'} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
