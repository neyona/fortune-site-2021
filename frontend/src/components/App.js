// frontend/src/components/App.js
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import CustomFooter from './navigation/CustomFooter'
import CustomNavbar from './navigation/CustomNavbar'
import {
  ThemeDyslexiaProvider,
  useDyslexiaTheme,
} from './buttons/useDyslexiaTheme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import HomePage from './pages/HomePage'
import FortunePage from './pages/FortunePage'
import WebAccessPage from './pages/WebAccessPage'
import AboutPage from './pages/AboutPage'
import MerchPage from './pages/MerchPage'
import ContactPage from './pages/ContactPage'
import ConfirmContactPage from './pages/ConfirmContactPage'
import ErrorPage from './pages/ErrorPage'

// The following allows these three libraries of icons to work all over the site frontend
library.add(fab, fas, far)

// Setting refetchOnWindowFocus to false stops the fortunes from reloading anytime
// a user goes to another tab then back again.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeDyslexiaProvider>
          <Provider store={store}>
            <CustomNavbar />
            <Router>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/fortune" component={FortunePage} />
                <Route exact path="/webaccess" component={WebAccessPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/merch" component={MerchPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/confirmation" component={ConfirmContactPage} />
                <Route component={ErrorPage} />
              </Switch>
            </Router>
            <CustomFooter />
          </Provider>
        </ThemeDyslexiaProvider>
      </QueryClientProvider>
    </>
  )
}

export default App

