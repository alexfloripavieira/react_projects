import React, { Children } from 'react'
import ReactDOM from 'react-dom'


import './index.css'

const books = [
	{
		id: 1,
		img: 'https://images-na.ssl-images-amazon.com/images/I/41P6+EzjzsL._AC_SX184_.jpg',
		title: 'O Poder do Agora: Um guia para a iluminação espiritual',
		author: 'Eckhart Tolle',
	},
	{
		id: 2,
		img: 'https://images-na.ssl-images-amazon.com/images/I/51Hg0c-RYsL._AC_SX184_.jpg',
		title: 'Breves respostas para grandes questões',
		author: 'Stephen Hawking',
	},
	{
		id: 3,
		img: 'https://images-na.ssl-images-amazon.com/images/I/41TsvI70n9L._AC_SX184_.jpg',
		title: 'Do Mil ao Milhão. Sem Cortar o Cafezinho.',
		author: 'Tiago Nigro',
	},
	{
		id: 4,
		img: 'https://images-na.ssl-images-amazon.com/images/I/51iCUqdSD3L._AC_SX184_.jpg',
		title: 'O efeito he-man',
		author: 'Box Brown',
	},
]

function BookList() {
	return (
		<section className='booklist'>{books.map((book) => {
			return <Book key={book.id} {...book}></Book>
		})}</section>
	)
}



const Book = (props) => {
	const { img, title, author, children } = props

	return (
		<article className='book'>
			<img
				src={img}
				alt=''
			/>
			<h1>{title}</h1>
			<h4>{author}</h4>
			{children}

		</article>
	)
}

ReactDOM.render(<BookList />, document.getElementById('root'))
