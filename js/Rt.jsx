import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'


const mapStateToProps = (state, props) => ({
  color: state.theme.palette.primary.main,
})


const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => { console.log('Fuck you') },
})

function Cnt(props) {
  console.log(props)
  return (
    <div
      onClick={props.onClick}
      style={{
        background: props.color,
        height: '50em',
        width: '50em',
      }}
    >
    </div>
  )
}

const Fuck = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cnt)

const store = createStore(reducer)

function Cmp(props) {
  return (
    <Provider store={store}>
      <Fuck />
    </Provider>
  )
}

export default Cmp
//export default connect(
//mapStateToProps,
//mapDispatchToProps
//)(Cmp)
