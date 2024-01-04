import React from 'react'
import { Link } from "react-router-dom";

import {button} from 'models/elements/button'

import './index.scss'

export default function index(props: button) {
   const className = [props.className];
	if (props.isPrimary) className.push("btn-primary");
	if (props.isLarge) className.push("btn-lg");
	if (props.isSmall) className.push("btn-sm");
	if (props.isBlock) className.push("btn-block");
	if (props.hasShadow) className.push("btn-shadow");

	const onClick = () => {
		if (props.onClick) props.onClick();
	};

	if (props.isDisabled || props.isLoading) {
		if (props.isDisabled) className.push("disabled");
		return (
			<span className={className.join(" ")}>
				{props.isLoading ? (
					<>
						<span className='spinner-border spinner-border-sm mx-5'></span>
						<span className='sr-only'>Loading...</span>
					</>
				) : (
					props.children
				)}
			</span>
		);
	}
	if (props.type === "link") {
		if (props.isExternal) {
			return (
				<a
					href={props.href}
					className={className.join(" ")}
					target={props.target === "_blank" ? "_blank" : undefined}
					rel={props.target === "_blank" ? "noopener noreferrer" : undefined}>
					{props.children}
				</a>
			);
		} else {
			return (
				<Link
					// to={props.href}
               to={{
                  pathname:props.href,
               }}
					className={className.join(" ")}
					onClick={onClick}
				>
					{props.children}
				</Link>
			);
		}
	}
  return (
   <button
      className={className.join(" ")}
      onClick={onClick}>
      {props.children}
   </button>
  )
}
