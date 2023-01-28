import React from 'react';
import {
	DropdownItem,
	Dropdown,
	DropdownMenu,
	DropdownToggle,
} from 'reactstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaHome, FaPlus, FaTrashAlt, FaFolderOpen } from 'react-icons/fa';
import { BsFillPeopleFill, BsHddNetworkFill } from 'react-icons/bs';
import { DEFAULT_STARTING_POSITION } from '../../utils/constants';
import { useToggle } from '../../hooks/useToggle';

export default function Menu(props) {
	const [menuOpen, toggleMenu] = useToggle(false);
	const menuButtons = buildMenuButtons(props);

	return (
		<Dropdown isOpen={menuOpen} toggle={toggleMenu}>
			<DropdownToggle color='primary' data-testid='menu-toggle'>
				<GiHamburgerMenu size={32} />
			</DropdownToggle>
			<DropdownMenu data-testid='menu-button-container' right>
				<MenuItems menuButtons={menuButtons} />
			</DropdownMenu>
		</Dropdown>
	);
}

function MenuItems(props) {
	return (
		<>
			{props.menuButtons.map((menuButtonProps) => (
				<MenuButton key={menuButtonProps.dataTestId} {...menuButtonProps} />
			))}
		</>
	);
}

class MenuButtonProps {
	constructor(
		dataTestId,
		buttonAction,
		buttonIcon,
		buttonText,
		disabled = false
	) {
		this.dataTestId = dataTestId;
		this.buttonAction = buttonAction;
		this.buttonIcon = buttonIcon;
		this.buttonText = buttonText;
		this.disabled = disabled;
	}
}

function buildMenuButtons(props) {
	return [
		new MenuButtonProps('about-button', props.toggleAbout, <BsFillPeopleFill />, 'About'),
	];
}

function MenuButton({
	dataTestId,
	buttonAction,
	buttonIcon,
	buttonText,
	disabled,
}) {
	return (
		<DropdownItem
			data-testid={dataTestId}
			disabled={disabled}
			onClick={() => buttonAction()}
		>
			<div className='menu-item'>
				{buttonIcon}
				&nbsp;&nbsp; {buttonText}
			</div>
		</DropdownItem>
	);
}
