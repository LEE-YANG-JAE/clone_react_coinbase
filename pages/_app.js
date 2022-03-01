import '../styles/globals.css'
import { ThirdwebProvider } from "@3rdweb/react";

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
  <ThirdwebProvider 
      connectors={connectors} 
      supportedChainIds={supportedChainIds}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
