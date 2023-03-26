import React from "react";
import "../styles/topBar.css";

const TopBar = () => {
	return (
		<div className="topBar">
			<div>
				<p className="content">Your Result</p>
				<div className="circle">
					<p className="circle-text">
						<span className="score">76</span> <br />
						of 100
					</p>
				</div>
				<div className="remark">
					<p>
						<span className="great">Great</span> <br />
						You scored higher than 65% of the people who have taken these tests.
					</p>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
