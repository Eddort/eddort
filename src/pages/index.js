import React from "react";
import theme from "theme";
import { Theme, Box, Text } from "@quarkly/widgets";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Section background="--color-darkL2 url(https://images.unsplash.com/photo-1565130159846-0e771351fd68?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) 0% 0%/cover" padding="64px 0" sm-padding="40px 0" height="100vh">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						margin-right="-20%"
						padding-bottom="120%"
						lg-margin-right="0"
						lg-padding-bottom="80%"
						sm-background="--color-darkL2 url(https://uploads.quarkly.io/eddort/2019-05-16%2014.06.36.jpg) 50% 60%/cover"
						background="url(https://uploads.quarkly.io/eddort/2019-05-16_14.06.36-removebg-preview.png) 50% 96%/cover"
						md-background="--color-darkL2 url(https://uploads.quarkly.io/eddort/2019-05-16%2014.06.36.jpg) 50% 64%/cover"
					/>
					<Box width="100%" />
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="98px 64px"
						margin-left="-20%"
						margin-top="36px"
						background="--color-orange"
						color="--light"
						mix-blend-mode="color-burn"
						lg-margin-left="0"
						lg-margin-top="0"
						flex-direction="column"
					/>
					<Text
						as="h4"
						margin="0"
						font="--base"
						letter-spacing="1px"
						text-transform="uppercase"
						color="--dark"
					>
						About me
					</Text>
					<Text
						as="h1"
						margin="0 0 16px 0"
						font="--headline1"
						lg-font="--headline2"
						color="--dark"
					>
						Hey I’m Alex
					</Text>
					<Text
						as="p"
						margin="16px 0"
						font="--lead"
						max-width="400px"
						color="--dark"
					>
						Web developer/ CTO/ Co-founder
					</Text>
					<Text
						as="p"
						margin="16px 0"
						font="--lead"
						max-width="400px"
						color="--dark"
					>
						test123
					</Text>
				</StackItem>
			</Stack>
		</Section>
	</Theme>;
});