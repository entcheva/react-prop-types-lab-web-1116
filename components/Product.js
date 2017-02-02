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
    const weight = props[propName]

    if (isNaN(weight)) {
      return new Error('Must be a number')
    }

    // if (typeof(weight) !== 'number') {
    //   return new Error('Must be a number')
    // }

    if (weight < 80 || weight > 300) {
      return new Error('Must be btwn 80 & 300')
    }

    if (weight === undefined) {
      return new Error('Can\'t be blank')
    }
  } // end customProp
}

module.exports = Product
