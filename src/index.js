import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.css'

class FastBgImg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
    this._isMounted = false
  }

  render() {
    const { url, thumbUrl, className } = this.props
    const { loaded } = this.state
    const fastBgImgClass = classnames(`fast-bg-img`, className)
    const bgImgClass = classnames(`fbimg__img`, { loaded: loaded })
    const bgThumbImgClass = classnames(`fbimg__thumb-img`, { loaded: loaded })
    return (
      <div className={fastBgImgClass}>
        <div
          className={bgImgClass}
          style={{ backgroundImage: `url(${url})` }}
        />
        <div
          className={bgThumbImgClass}
          style={{ backgroundImage: `url(${thumbUrl})` }}
        />
        {this.props.children}
      </div>
    )
  }

  componentDidMount() {
    this._isMounted = true
    const { url } = this.props
    const bgImg = new Image()
    bgImg.onload = this.handleImageLoaded
    bgImg.src = url
  }

  handleImageLoaded = e => {
    if (this._isMounted) {
      this.setState({
        loaded: true,
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }
}

FastBgImg.propTypes = {
  url: PropTypes.string.isRequired,
  thumbUrl: PropTypes.string.isRequired,
}

export default FastBgImg
