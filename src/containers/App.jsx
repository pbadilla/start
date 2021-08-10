import React from "react"
import { Route, Switch } from "react-router"
import { Helmet } from 'react-helmet'

import Landing from "../pages/Landing"

import ThemeProvider, { GlobalStyle } from '../styles/Theme'

const App = () => {
  return (
    <>
      <Helmet
        titleTemplah1te="%s | Start React"
        defaultTitle="React, Redux, styled-components, etc . | Start"
      >
        <meta
          name="description"
          content="Start coding in minutes with React, styled-components, etc ."
        />
      </Helmet>
      <ThemeProvider>
        <main>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </main>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
