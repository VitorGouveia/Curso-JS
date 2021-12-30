import { ChakraProvider } from "@chakra-ui/react";

import { Provider, createClient } from "urql";
import theme from "../theme";
import { AppProps } from "next/app";

const client = createClient({ url: "http://localhost:4000/graphql" });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider value={client}>
			<ChakraProvider resetCSS theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</Provider>
	);
}
