import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: "318543373917-ofofuo7ug03os6hgv2boaahsa1cshmao.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
