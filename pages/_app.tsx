import "../src/styles/globals.css"
import { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from './../src/redux/app/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App