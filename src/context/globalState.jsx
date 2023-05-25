import { useEffect, useState } from "react"
import appContext from "./globalContext"

const ContextState = (props) => {
    const [token, setToken] = useState('')
    const [id, setId] = useState('')
    const [load, setLoad] = useState(false)

    const value = {
        token, setToken,
        id, setId,
        load, setLoad
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            setId(localStorage.getItem('id'))
        }
    }, [])

    return (
        <appContext.Provider value={value}>
            {props.children}
        </appContext.Provider>
    )
}

export default ContextState;