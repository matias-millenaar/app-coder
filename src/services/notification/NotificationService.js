import { createContext, useContext, useState } from "react"
import { ToastContainer, Toast } from "react-bootstrap"

const Notification = ({message, severity}) => {
    if (message === "") {
        return null
    }

    return (
        <div aria-live="polite" aria-atomic="true" className="bg-dark sticky-top">
            <ToastContainer position="top-end" className="p-3">
                <Toast>
                    <Toast.Body className={`fs-5 text-white bg-${severity}`}>{message}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationServiceProvider = ({children}) => {
    const [message, setMessage] = useState("")
    const [severity, setSeverity] = useState("")

    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage("")
        }, 5000)
    }

    return (
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} severity={severity} />
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationService = () => {
    return useContext(NotificationContext)
}