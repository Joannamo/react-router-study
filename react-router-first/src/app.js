// import React from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory, IndexLink, Redirect } from 'react-router';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about" onlyActiveOnIndex activeClassName='active' >About</Link></li>
          <li><Link to="/inbox" onlyActiveOnIndex  activeClassName='active'>Inbox</Link></li>
          <li><Link to="/namedComponent" onlyActiveOnIndex  activeClassName='active'>namedComponent</Link></li>
          <li><Link to="/aboutPage" onlyActiveOnIndex  activeClassName='active'>aboutPage</Link></li>
          <li><IndexLink 
              activeClassName='active' 
              to={{ 
                pathname: '/query', 
                query: { message: 'Hello from Route Query' } 
              }}>Route Query</IndexLink>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return (
      <div>
        <h2>About</h2>
        {this.props.children || "Welcome to your About"}
      </div>
    )
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Dashboard = React.createClass({
  render() {
    return <div>Welcome to the app!</div>
  }
})

const NamedComponents = (props) => (
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>
)

const Title = () => (
  <h1>Hello from Title Component</h1>
)
const SubTitle = () => (
  <h1>Hello from SubTitle Component</h1>
)



const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)


const AboutPage = (props) => (
  <div>
    <h3>Welcome to the AboutPage Page</h3>
    <h2>this aboutPage name is {props.params.name}</h2>
  </div>
)

const Query = (props) => (
  <h2>{props.location.query.message}</h2>
)

/*hashHistory, browserHistory */
ReactDOM.render((
  <Router history={ hashHistory }>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About}>         
      </Route>
       <Route path='query' component={Query} />
      <Route path="inbox" component={Inbox}>

        <Route path="messages/:id" component={Message} />
        <Redirect from="messages/:id" to="/messages/:id" />
      </Route>

      <Route path='/aboutPage/:name' component={AboutPage} />

      <Route path='namedComponent' component={NamedComponents}>
        <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
      </Route>

      

      <Route path='*' component={NotFound} />
    </Route>
  </Router>
), document.getElementById('mohaiyan'));