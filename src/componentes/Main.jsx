import './Main.css'
export default Main

function Main(){
	return(
		<div className='main'>
			<section className='tionH'>
		
				<div className='blocks dv1'>
					<img src='./icons/kid.png' alt='kid'/>				
				</div>

				<div className='blocks dv2'>
					<div className='dh2'><h2>programming course aimed at children to become a front-end or back-end or fullstack beginner</h2></div>
					<div className='dbt'><button>register</button></div>	
				</div>	

			</section>
		
			<section className='tionM'>
				<div className='infor'>
					
					<div className='borda'>
						<div className='quadro'>
							<img className='iconsImgs' src='./icons/security.png' />
						</div>
						<div className='diparagrafo'>
							<p>Within our website we offer total protection to our students' data</p>
						</div>
					</div>
				
					<div className='borda'>
						<div className='quadro'>
							<img className='iconsImgs' src='./icons/education.png' />
						</div>
						<div className='diparagrafo'>
							<p>Our programming school is entirely online, we do not have a physical school</p>
						</div>
					</div>
					
					<div className='borda'>
						<div className='quadro'>
							<img className='iconsImgs' src='./icons/hat.png' />
						</div>
						<div className='diparagrafo'>
							<p>The student starts in beginner mode and progresses through the modules</p>
						</div>
					</div>
				
					<div className='borda'>
						<div className='quadro'>
							<img className='iconsImgs' src='./icons/school.png' />
						</div>
						<div className='1'>
							<p>Within the website, students began classes via online video</p>
						</div>
					</div>
				</div>
				
				<div className='retratoCertificado'>
					<img src='./icons/certificado.png' />
				</div>
			
			</section>
			<section className='meio'>
				<div>
					<div className='campo'>
						<p>Upon completion of this course, your child will receive a certificate of completion for
						completing all course modules.</p>
					</div>
					<div className='src'>
						<img src='./icons/cer.png'/>
					</div>
				</div>

				<div>
					<div className='src'>
						<img src='./icons/chat.png'/>
					</div>
					<div className='campo'>
						<p>You will learn how to use chatgpt to help you with your front-end or back-end projects</p>
					</div>
				</div>
			</section>
			<section className='apresentacaoSkills'>
					<div>Everything the student will learn in this course</div>				
			</section>
			<section className='categorias'>
					<div className='line'>
						<div className='montagem'><img className='subicons' src='./icons/html.png'/></div>	
						<div className='montagem'><img className='subicons' src='./icons/css.png'/></div>	
						<div className='montagem'><img className='subicons' src='./icons/js.png'/></div>	
						<div className='montagem'><img className='subicons' src='./icons/angula.png'/></div>	
						<div className='montagem'><img className='subicons' src='./icons/type.png'/></div>	
					</div>	

					<div className='line'>
						<div className='montagem'><img className='subicons' src='./icons/react.png'/></div>	
						<div className='montagem'><img className='subicons' src='./icons/vue.png'/></div>	
						<div className='montagem'><img className='subicons' src='./icons/java.png'/></div>	
						<div className='montagem'><img className='subicons' src='./icons/python.png'/></div>	
						<div className='montagem'><img className='subicons' src='./icons/php.png'/></div>	
					</div>	
					<footer>
						<div className='footerbar'>
							<div className='dis'>	
								<h2>Still need help?</h2>
								<p>Need help determining what course is right for your child?</p>
							</div>
							<div className='help'>
								<button>Help-me</button>
							</div>
						</div>
						<div className='creditos'>
							<div className='copy'>
								<p>© 2024 powered by Naelsls</p>
							</div>
							<div className='social'>
								<img src='./icons/github.png'/>
							</div>
						</div>
					</footer>
			</section>
		</div>
	)
}
