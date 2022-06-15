import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";

import { images } from "../../../constants";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

const Header = () => {
	return (
		<div className="app__header app__flex">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="app__header-info"
			>
				<div className="app__header-bridge">
					<div className="badge-cmp app__flex">
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">Hello, I'm</p>
							<h1 className="head-text">Esdras</h1>
						</div>
					</div>
					<div className="tag-cmp app__flex">
						<p className="p-text">Web Developer</p>
						<p className="p-text"></p>
					</div>
				</div>
			</motion.div>
			{/* Picture of self */}
			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__header-img"
			>
				<img src={images.self} alt="Esdras" />
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					className="overlay_circle"
					src={images.circle}
					alt="Esdras"
				/>
			</motion.div>
			<motion.div
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				children="app_header-circles"
			>
        {[[images.react, images.redux, images.node, images.mongodb].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))]}
			</motion.div>
		</div>
	);
};

export default Header;
