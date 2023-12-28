import React, { Children } from 'react'
import ReactDOM from 'react-dom'


import './index.css'
const firstBook = {
	img: 'https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL._AC_UL200_SR200,200_.jpg',
	title: 'I Love You to the Moon and Back',
	author: 'Amelia Hepworth',
}
const secondBook = {
	img: 'https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg',
	title: 'Our Class is a Family',
	author: 'Shannon Olsen',
}

function BookList() {
	return (
		<section className='booklist'>
			<Book
				title={firstBook.title}
				author={firstBook.author}
				img={firstBook.img}
			>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
					quidem, quibusdam, quia, laboriosam quae voluptatum voluptate
					aspernatur voluptatem quos voluptates quod? Quia, voluptatibus
					aspernatur. Quisquam, voluptatum? Quasi, quidem. Quisquam, voluptatum
					quasi.
				</p>
			</Book>
			<Book
				title={secondBook.title}
				author={secondBook.author}
				img={secondBook.img}
			/>
		</section>
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
