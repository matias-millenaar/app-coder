import { useState, useImperativeHandle, forwardRef } from 'react'
import { Button } from 'react-bootstrap'

const Togglable = forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none'}

    const toggleVisibility = () => {
        setVisible(!visible)
    } 

    useImperativeHandle(ref, () => {
        return {
            toggleVisibility
        }
    })

    return (
        <div>
            <div style={hideWhenVisible}>
                <Button className='btn btn-warning' onClick={toggleVisibility}>{props.buttonLabelShow}</Button>
            </div>
            <div style={showWhenVisible}>
                <Button className='btn btn-secondary' onClick={toggleVisibility}>{props.buttonLabelHide ? props.buttonLabelHide : 'Cancel'}</Button>
                {props.children}
            </div>
        </div>
    )
})

export default Togglable