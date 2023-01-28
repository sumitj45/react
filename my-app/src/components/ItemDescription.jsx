// import React from 'react'

// function ItemDescription({name,description}) {
//   return (
//       <>
//       <h3>{name}</h3>
//       <p1><i>{description}</i></p1>
//       </>
//   )
// }

// export default ItemDescription
import React, { Component } from 'react'

export default class ItemDescription extends Component {
  render() {
    return (
      <>
     <h3>{this.props.name}</h3>
     <p1><i>{this.props.description}</i></p1>
      </>
    )
  }
}
