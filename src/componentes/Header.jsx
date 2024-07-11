import './Header.css'
export default Header

function Header(){
	return(
		<div className='header'>
			<div className='logo'>
				<h2>courssins</h2>
			</div>
			<nav>
				<ul>
					<li><a href=''>Home</a></li>
					<li><a href=''>News</a></li>
					<li><a href=''>About-us</a></li>
					<li><a href=''>Contact</a></li>
				</ul>
			</nav>
   		<div className='btn'>
				<button>Log-in</button>
			</div>
		</div>
	)
}
