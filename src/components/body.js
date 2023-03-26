import React from "react";
import "../styles/body.css";

const Body = () => {
	const data = [
		{
			category: "Reaction",
			score: 80,
			icon: "./assets/images/icon-reaction.svg",
		},
		{
			category: "Memory",
			score: 92,
			icon: "./assets/images/icon-memory.svg",
		},
		{
			category: "Verbal",
			score: 61,
			icon: "./assets/images/icon-verbal.svg",
		},
		{
			category: "Visual",
			score: 72,
			icon: "./assets/images/icon-visual.svg",
		},
	];
	return (
		<div className="body">
			<div>
				<h4>Summary </h4>
				{data.map((dat) => (
					<div
						className="list"
						style={
							dat.category === "Verbal"
								? {
										background: "hsla(166, 100%, 37%, 0.05)",
										color: "hsl(166, 100%, 37%)",
								  }
								: { background: null } && dat.category === "Memory"
								? {
										background: "hsla(39, 100%, 56%, 0.05)",
										color: "hsl(39, 100%, 56%)",
								  }
								: { background: null } && dat.category === "Visual"
								? {
										background: "hsla(234, 85%, 45%, 0.05)",
										color: "hsl(234, 85%, 45%)",
								  }
								: { background: null } && dat.category === "Reaction"
								? {
										background: "hsla(0, 100%, 67%, 0.05)",
										color: "hsl(0, 100%, 67%)",
								  }
								: { background: null }
						}
					>
						<div className="cat">
							<img src={dat.icon} alt="" />
							<p>{dat.category}</p>
						</div>
						<div style={{ color: "black" }}>
							<span style={{ fontWeight: "bold" }}>{dat.score}</span> / 100
						</div>
					</div>
				))}
				<button className="button">Continue</button>
			</div>
		</div>
	);
};

export default Body;
