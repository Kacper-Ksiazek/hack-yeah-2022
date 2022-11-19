// Tools
import "@/general.css";
// Types
import type { AppProps } from "next/app";
// Styled components
import Layout from "@/layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
