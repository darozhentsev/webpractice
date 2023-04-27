import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AuthContext } from './../utilsAuth/authContex'
import AuthForm from './../front/elements/AuthForm'
import Main from './../front/elements/Main'

export default function App() {
	const [isAuth, setIsAuth] = useState(false)

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			<View style={styles.container}>
				<Text style={styles.heading}>Auuu</Text>

				{!isAuth ? <AuthForm /> : <Main styles={styles} />}
			</View>
		</AuthContext.Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: '13%',
		backgroundColor: '#e9eaee',
		color: '#222',
		height: '100%',
	},
	heading: {
		fontSize: 30,
		textAlign: 'center',
		fontWeight: '700',
		marginBottom: '10%',
	},
})
