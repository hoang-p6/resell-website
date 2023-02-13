import { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
  const initialState = {
    seller: '',
    email: '',
    item: '',
    image: '',
    description: '',
    price: 0,
    sold: false
  }

  const [formState, setFormState] = useState(initialState)
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    await axios.post('http://localhost:3001/listings', formState)
    setFormState(initialState)
    props.getListings()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="seller">Seller:</label>
      <input
        id="seller"
        type="text"
        onChange={handleChange}
        value={formState.seller}
      ></input>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        onChange={handleChange}
        value={formState.email}
      ></input>
      <label htmlFor="item">Item:</label>
      <input
        id="item"
        type="text"
        onChange={handleChange}
        value={formState.item}
      ></input>
      <label htmlFor="image">Image:</label>
      <input
        id="image"
        type="text"
        onChange={handleChange}
        value={formState.image}
      ></input>
      <label htmlFor="description">Description:</label>
      <input
        id="description"
        type="text"
        onChange={handleChange}
        value={formState.description}
      ></input>
      <label htmlFor="price">Price:</label>
      <input
        id="price"
        type="number"
        onChange={handleChange}
        value={formState.price}
      ></input>
      {/* <label htmlFor="sold">Sold:</label>
      <input
        id="sold"
        type="boolean"
        onChange={handleChange}
        value={formState.sold}
      ></input> */}
      <button type="submit">Add</button>
    </form>
  )
}

export default Form
