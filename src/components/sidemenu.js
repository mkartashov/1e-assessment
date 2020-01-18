import React from "react"




class SideMenu extends React.Component {

  render(props) {
    return (
      <div style={{"width": "200px", "backgroundColor": "green"}}>{this.props.children}</div>
    )
  }
}

export default SideMenu

