import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import { useAuth } from '../../utilsAuth/useAuth'
import Button from '../UI/Button'
import Error from '../UI/Error'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Field from '../UI/Field'

const AuthForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const { isAuth, setIsAuth } = useAuth()

	const authHandler = async () => {
		if (email && password) {
			if (email !== 'test@test.ru') {
				return setError('Не верный Email')
			}

			if (password !== '12345') {
				return setError('Не верный пароль')
			}

			await AsyncStorage.setItem('token', 'w23eefq234Ad')
			setIsAuth(false)
		} else {
			setError('Заполните все поля!')
		}
	}

	return (
		<View>
			{/* {error && <Error message={error} />} */}

			<Field value={email} onChangeText={setEmail} placeholder='Email..' />
			<Field
				value={password}
				onChangeText={setPassword}
				placeholder='Password..'
			/>
			<Button onPress={authHandler} title='Войти' />
		</View>
	)
}

export default AuthForm
