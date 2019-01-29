import React from 'react'

const Searchbar = () => {
  return (
    <input type="text"
      value={this.props.userInput}
      onChange={this.props.onChangeOfInput} />
  )
}

export default Searchbar
