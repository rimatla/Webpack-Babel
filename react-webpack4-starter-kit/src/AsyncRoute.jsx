import React from 'react'
import { instanceOf } from 'prop-types'
import Loading from './components/Loading'

class AsyncRoute extends React.Component {
  state = {
    loaded: false
  }
  componentDidMount() {
    this.props.loadingPromise.then(module => {
      this.component = module.default
      this.setState({ loaded: true })
    })
  }
  component = null
  props: {
    props: mixed,
    loadingPromise: { default: React.Component }
  }
  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />
    }
    return <Loading />
  }
}

AsyncRoute.propTypes = {
  loadingPromise: instanceOf(Promise).isRequired
}

export default AsyncRoute
