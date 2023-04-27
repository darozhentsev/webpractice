import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Error = ({ message: error }) => {
	return (
		<Text style={error ? styles.error : ''}>
			{error ? `Ошибка: ${error}` : ''}
		</Text>
	)
}

const styles = StyleSheet.create({
	error: {
		fontSize: 16,
		color: '#e74c3c',
		textAlign: 'center',
		marginBottom: '5%',
	},
})

export default Error
