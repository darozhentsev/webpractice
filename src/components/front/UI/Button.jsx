import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as RNButton } from 'react-native-elements'

const Button = props => {
	return <RNButton style={styles.button} {...props} />
}

const styles = StyleSheet.create({
	button: {
		fontSize: 18,
		width: '70%',
		marginHorizontal: '15%',
	},
})

export default Button
