import { createContext, useState } from "react"

const FormContext = createContext()

export const FormContextProvider = ({children}) => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        comments: ''
    })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comments, setComments] = useState('')

    const deleteFormValues = () => {
        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
        setComments('')
    }


    return (
        <FormContext.Provider value={{
            contact, setContact,
            name, setName,
            email, setEmail,
            phone, setPhone,
            address, setAddress,
            comments, setComments,
            deleteFormValues,
        }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext