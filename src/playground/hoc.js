//Higher Order COmponent (HOC) - a component that renders another component
//for reusing code
//Render hijacking
//Prop manipulation
//abstract state
import React from 'react';
import ReactDOM from 'react-dom';

//another component
const Info = (props) =>(
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

//HOC
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private Info Please dont share</p>}
    <WrappedComponent {...props}/>
    </div>
  )
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
      <WrappedComponent {...props}/>
    ):(
      <p>Please login to view info </p>
    )}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info="these are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the details"/>, document.getElementById('app'));
