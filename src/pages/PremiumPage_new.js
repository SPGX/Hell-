/*Version 0.1*/
/*
import React from 'react';
import logo from '../logo.svg';
import '../App.css';
//Device Detection
import { CustomView, isMobile, deviceType, mobileVendor, mobileModel, osName, osVersion, browserName ,fullBrowserVersion } from 'react-device-detect';
//Social Login
import { Authenticator, withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Auth from "aws-amplify"; 
import aws_exports from "../aws-exports";
Auth.configure(aws_exports);

//function App() {
const PremiumPage = () => {
  //const {signOut} = useAuthenticator();
  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello from alRIGHTs</h1>
          <h3>Ver 0.1</h3>
          <h4>You are connecting from: { deviceType }</h4>          
            <CustomView condition={isMobile == 1}>
              <div>{mobileVendor + ' ' + mobileModel}</div>
            </CustomView>
            <div>{browserName + ' ' + fullBrowserVersion}</div>
            <div>{osName + osVersion}</div>
            <button onClick={signOut}>Log Out</button>
        </header>
        </div>
      )}
    </Authenticator>
  );
};
//}

export default PremiumPage;
//export default withAuthenticator(PremiumPage);
*/


import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
//Device Detection
import { CustomView, isMobile, deviceType, mobileVendor, mobileModel, osName, osVersion, browserName ,fullBrowserVersion } from 'react-device-detect';
//API Form
import { API } from 'aws-amplify';
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from '../graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from '../graphql/mutations';
//Payment
import { Component } from "react";
import axios from "axios";
import ChekoutCreditCard from "../components/checkoutForm/omise-prebuilt-form/CheckoutCreditCard";
import CheckoutInternetBanking from "../components/checkoutForm/omise-prebuilt-form/CheckoutInternetBanking";
import "./CheckoutPage.css";
//Social Login
import { Authenticator, withAuthenticator, useAuthenticator, components } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Auth from "aws-amplify"; 
import aws_exports from "../aws-exports";
Auth.configure(aws_exports);


const initialFormState = { name: '', description: '' }

//Payment
export class CartCheckoutPage extends Component {
  state = {
    charge: undefined
  };

  createCreditCardCharge = async (email, name, amount, token) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:80/checkout-creditCard",
        data: { email, name, amount, token },
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (res.data) {
        this.setState({ charge: res.data});
        this.props.clearCart()
      }
    } catch (err) {
      console.log(err);
    }
  };

  createInternetBankingCharge = async (email, name, amount, token) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:80/checkout-internetBanking",
        data: { email, name, amount, token },
        headers: {
          "Content-Type": "application/json"
        }
      });

      const { authorizeUri } = res.data;
      if (authorizeUri) {
        window.location.href = authorizeUri;
      }
    } catch (err) {
      console.log(err);
    }
  };

  
const PremiumPage = () => {
      
  //const {signOut} = useAuthenticator();
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    setNotes(apiData.data.listNotes.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
  }

  return (
    <Authenticator>
      {({ signOut }) => (
        <div className="App">
        <h1>My Notes App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Note description"
        value={formData.description}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <button onClick={() => deleteNote(note)}>Delete note</button>
            </div>
          ))
        }
      </div>
      <button onClick={signOut}>Log Out</button>
        </div>
      )}
    </Authenticator>
  );
};
//}

export default PremiumPage;
//export default withAuthenticator(PremiumPage);



//===============================================

