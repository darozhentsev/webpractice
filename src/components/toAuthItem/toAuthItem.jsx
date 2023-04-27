import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { CheckBox } from 'react-native-elements'

const ToDoItem = ({ _id, idx, name, isChecked, toggleCheckedToDo }) => {
	return (
		<TouchableHighlight
			underlayColor='transparent'
			onPress={() => toggleCheckedToDo(_id, idx)}
		>
			<View style={styles.item}>
				<CheckBox checked={isChecked} />
				<Text style={styles.name}>{name}</Text>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	item: {
		borderRadius: 10,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		padding: 12,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
		width: '90%',
		marginHorizontal: '5%',
		marginBottom: 10,
		flexDirection: 'row',
	},
	name: {
		fontSize: 18,
		marginLeft: 5,
	},
})

export default ToDoItem
