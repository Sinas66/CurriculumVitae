import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { About, Contacts, Home, Skills, Projects, Blog } from './pages/index';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="contentWrapper">
        <Switch>
          <Route active={false} exact path="/" component={Home} />
          <Route active={false} path="/about" component={About} />
          <Route active={false} path="/skills" component={Skills} />
          <Route active={false} path="/projects" component={Projects} />
          <Route active={false} path="/contacts" component={Contacts} />
          <Route active={false} path="/blog" component={Blog} />
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
