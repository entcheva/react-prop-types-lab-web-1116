const React = require('react')

class Product extends React.Component {
  render () {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,

  weight: function(props, propName) {
    const weighttt = props[propName]

    if (weighttt < 80 || weighttt > 300) {
      return new Error('Must be btwn 80 & 300')
    }

    if (weighttt === undefined) {
      return new Error('Can\'t be blank')
    }

    if (isNaN(weighttt)) {
      return new Error('Must be a number')
    }
    
  } // end customProp
}

module.exports = Product
