import React from "react"

const Book = ({ img, title, author }) => {
	const clickHandler = () => {
		alert('Hello World')
	}

	const clickHandlerParameter = (author) => {
		alert(author)
	}

	return (
		<article className='book'>
			<img
				src={img}
				alt=''
				onMouseOver={() => {
					alert(title)
				}}
			/>
			<h1>{title}</h1>
			<h4>{author}</h4>
			<button
				type='button'
				onClick={clickHandler}
			>
				Alert without parameter
			</button>
			<button
				type='button'
				onClick={() => clickHandlerParameter(author)}
			>
				Alert with parameter
			</button>
		</article>
	)
}

export default Book