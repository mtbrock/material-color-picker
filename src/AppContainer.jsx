import { connect, useSelector, useDispatch } from 'react-redux'

import { assignColor } from '@app/actions'
import { useCallback } from 'react'
import App from '@app/App'
import '@app/styles/App.scss'

export default () => {
    const dispatch = useDispatch()
    const onColorChange = useCallback(
        (id, color) => dispatch(assignColor(id, color)),
        [dispatch],
    )
    const props = {
        ...useSelector((state) => state),
        onColorChange,
    }
    return <App {...props} />
}
