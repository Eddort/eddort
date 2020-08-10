import React from "react";
import theme from "theme";
import { Theme, Box, Text } from "@quarkly/widgets";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						margin-right="-20%"
						padding-bottom="120%"
						lg-margin-right="0"
						lg-padding-bottom="80%"
						sm-background="--color-darkL2 url(https://uploads.quarkly.io/eddort/2019-05-16%2014.06.36.jpg) 50% 60%/cover"
						background="--color-darkL2 url(https://uploads.quarkly.io/eddort/2019-05-16%2014.06.36.jpg) 50% 96%/cover"
						filter="saturate(153%)"
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
						background="#3f7a00"
						color="--light"
						mix-blend-mode="lighten"
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
					>
						About me
					</Text>
					<Text as="h1" margin="0 0 16px 0" font="--headline1" lg-font="--headline2">
						Hey I’m Alex
					</Text>
					<Text as="p" margin="16px 0" font="--base" max-width="400px">
						My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards.
					</Text>
				</StackItem>
			</Stack>
		</Section>
	</Theme>;
});