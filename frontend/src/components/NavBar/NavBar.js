import React, {useState} from "react";
import "./NavBar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";

const NavBar = () => {
	const [toggle, setToggle] = useState(false);

	const handleOnClick = (e) => {
		e.stopPropagation();
		setToggle((prevState) => !prevState);
	};
	

	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img alt="logo" src={images.logo}></img>
			</div>
			<ul className="app__navbar-links">
				{["Home", "About", "Skills", "Work", "Contact"].map((item) => (
					<li className="app__flex p-text" key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>

			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={handleOnClick} />

				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: "easeOut" }}
					>
						<HiX onClick={handleOnClick} />
						<ul>
							{["Home", "About", "Skills", "Work", "Contact"].map((item) => (
								<li key={item}>
									<a href={`#${item}`} onClick={handleOnClick}>
										{item}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default NavBar;

