import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api'

import ToDoItem from '../../toAuthItem/toAuthItem'
import Field from '../UI/Field'
import Button from '../UI/Button'
import Error from '../UI/Error'

const Main = ({ styles }) => {
	const [error, setError] = useState('')
	const [name, setName] = useState('')
	const [todos, setTodos] = useState([])
	const [fetch, setFetch] = useState(false)

	useEffect(() => {
		let clean = false

		const fetchTodos = async () => {
			try {
				setError('')
				const { data } = await axios.get('/todos')

				setTodos(data)
			} catch (error) {
				setError(
					error.response && error.response.data.message
						? error.response.data.message
						: error.message
				)
			}
		}

		fetchTodos()

		return () => {
			clean = true
		}
	}, [fetch])

	const onPressNameHandler = async () => {
		try {
			setError('')
			const { data } = await axios.post('/todos', { name })

			if (data)
				setTodos(prev => [
					...prev,
					{ _id: todos.length, name, isChecked: false },
				])

			setName('')
			setFetch(true)
		} catch (error) {
			setError(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
			)
		}
	}

	const toggleCheckedToDo = async (id, idx) => {
		try {
			setError('')
			const { data } = await axios.put(`/todos/${id}`, {
				isChecked: !todos[idx].isChecked,
			})

			if (data) {
				const newArray = [].concat(todos)
				newArray[idx].isChecked = !newArray[idx].isChecked

				setTodos(newArray)
				setFetch(true)
			}
		} catch (error) {
			setError(
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
			)
		}
	}

	return (
		<>
			{/* {error && <Error message={error} />} */}

			{todos &&
				todos.map((todo, idx) => (
					<ToDoItem
						key={`_todo_${todo._id}`}
						_id={todo._id}
						idx={idx}
						name={todo.name}
						isChecked={todo.isChecked}
						toggleCheckedToDo={toggleCheckedToDo}
					/>
				))}

			<View style={styles.actions}>
				<Field value={name} onChangeText={setName} placeholder='Название..' />
				<Button onPress={onPressNameHandler} title='Добавить' />
			</View>
		</>
	)
}

export default Main
