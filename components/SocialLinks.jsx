import React from "react";

import { Button } from "reactstrap";


import { socialLinks } from "../portfolio";

const SocialLinks = () => {
	return (
		<div className="btn-wrapper text-lg">
			{socialLinks.url && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="white"
					rel="noopener"
					aria-label="URL"
					href={socialLinks.url}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-link" />
					</span>
				</Button>
			)}
			{socialLinks.linkedin && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="twitter"
					rel="noopener"
					aria-label="Linkedin"
					href={socialLinks.linkedin}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-linkedin" />
					</span>
				</Button>
			)}
			{socialLinks.github && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="github"
					href={socialLinks.github}
					rel="noopener"
					aria-label="Github"
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-github" />
					</span>
				</Button>
			)}
			{socialLinks.instagram && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="instagram"
					href={socialLinks.instagram}
					target="_blank"
					rel="noopener"
					aria-label="Instagram"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-instagram" />
					</span>
				</Button>
			)}
			{socialLinks.facebook && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="facebook"
					href={socialLinks.facebook}
					target="_blank"
					rel="noopener"
					aria-label="Facebook"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-facebook-square" />
					</span>
				</Button>
			)}	
			{socialLinks.twitter && (
				<Button
					className="btn-icon-only rounded-circle"
					color="twitter"
					href={socialLinks.twitter}
					target="_blank"
					rel="noopener"
					aria-label="Twitter"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-twitter" />
					</span>
				</Button>
			)}
			{socialLinks.geeksforgeeks && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="success"
					rel="noopener"
					aria-label="GFG"
					href={socialLinks.geeksforgeeks}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-code" />
					</span>
				</Button>
			)}
			
			{socialLinks.npm && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="white"
					rel="noopener"
					aria-label="NPM"
					href={socialLinks.npm}
					target="_blank"
				>
					<span className="btn-inner--icon">
					<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512"><path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"/></svg>
					</span>
				</Button>
			)}
			{socialLinks.medium && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="white"
					rel="noopener"
					aria-label="Leetcode"
					href={socialLinks.medium}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa fa-medium" />
					</span>
				</Button>
			)}
		</div>
	);
};

export default SocialLinks;
