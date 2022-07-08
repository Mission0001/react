import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

const mystyle = {

	margin: '300px 300px 700px 600px',
	textShadow: '2px 2px black',
};

const Error = () => {
	return (
		<div style={mystyle}>
			<TypeWriterEffect
				textStyle={{ fontFamily: 'Red Hat Display' }}
				startDelay={100}
				cursorColor='black'
				text='404 - Sorry Page not Found!'
				typeSpeed={100}
			/>
		</div>
	);
};

export default Error;
