import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import Header from './componentes/Header'
import Main from './componentes/Main'


ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Main />
	</React.StrictMode>,
	document.getElementById('root')
)

