import React, { useEffect, useState } from 'react';
import { Collapse } from 'reactstrap';
import Header from './Header/Header';
import About from './About/About';

import { useToggle } from '../hooks/useToggle';


export default function Page(props) {
	const [showAbout, toggleAbout] = useToggle(false);


	return (
		<>
			<Header
				toggleAbout={toggleAbout}
				showAbout={showAbout}
			/>
			<MainContentArea
				showAbout={showAbout}
				toggleAbout={toggleAbout}
			/>
		</>
	);
}

function MainContentArea(props) {
	return (
		<div className='body'>
			<Collapse isOpen={props.showAbout}>
				<About closePage={props.toggleAbout} />
			</Collapse>
			<center> 
				Hey
			</center>
		</div>
	);
}

