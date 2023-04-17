import { Component } from 'react';
import { nanoid } from 'nanoid'

// import { ProfileCard } from './Profile/Profile';
// import user from '../user.json';
// import friends from '../friends.json';
// import data from '../data.json';
// import transactions from '../transactions.json';
// import { Statsics } from './Statstics/Statstics';
// import { FriendList } from './FriendList/FriendList';
// import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactForm } from './PhoneBook/ContactForm';

export class App extends Component {
  state = {
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    contacts: [],
    filter: '',
  };

  // addContacts = text =>{}

  addContact = ({name,number}) => {
const contact ={
  id: nanoid(),
  name,
  number,
}

    this.setState(({contacts}) => ({
      contacts:[...contacts,contact]
    }))
  };

  render() {
    return (
      <Layout>
        <ContactForm onSubmit={this.addContact} />
        {/* <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div> */}
        {/* <ProfileCard description={user} />
      <Statsics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} /> */}
        <GlobalStyle />
      </Layout>
    );
  }
}
