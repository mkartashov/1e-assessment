
import React from "react"

class Header extends React.Component {



  render(props) {
    return (
      <div style={{"width": "100%"}}>{this.props.children}</div>
    )
  }
}

export default Header

