import React from 'react';
import { useNavigate } from 'react-router-dom';


const mystyle = {
	fontSize: '30px',
	textAlign: 'justify',
	margin: '0px 700px 0px 100px',
	padding: '80px'
};

const About = () => {
	let navigate = useNavigate();
	return (
		<div className='bg12'>
				<div>
					<div style={mystyle}>
						Founded in 2022, in Cabadbaran, the first Burger N' Bite opened with
						one single notion in mind; to serve a better burger and, in the
						process, helped create a new category. The every bite a better
						burger experience is known for their namesake smashing technique –
						smashing a fresh, never frozen, 100% Certified Angus Beef
						hand-packed ball of meat on a hot seasoned grill – delivering an
						elevated burger experience, where every bite is made to savor.
						<br />
						<br />
						<button
							type='button'
							className='bt1'
							onClick={() => {
								navigate('/');
							}}
						>
							Back to Homepage
						</button>
					</div>
				</div>
		</div>
	);
};
export default About;
