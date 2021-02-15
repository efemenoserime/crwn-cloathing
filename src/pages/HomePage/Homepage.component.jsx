import React from "react";
import styled from "styled-components";
import Directory from "../../components/directory/directory.component";

const HomePage = () => {
	return (
		<HomepageContainer>
			<Directory />
		</HomepageContainer>
	);
};

const HomepageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 80px;
`;

export default HomePage;
