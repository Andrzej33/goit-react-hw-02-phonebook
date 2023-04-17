import { Component } from 'react';
import { nanoid } from 'nanoid'

export class ContactForm extends Component {

  nameId = nanoid();
  numberId = nanoid();

  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    // console.log(name);
    // console.log(value);
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>
          Name </label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameId}
          />
        
        <label htmlFor={this.numberId}>
          Number</label>
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberId}
          />
        
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
