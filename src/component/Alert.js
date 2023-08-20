import React from 'react'

function Alert(prop) {
    const convertLetter = (word) => {
        let letter = word.toLowerCase();
        return letter.charAt(0).toUpperCase() + letter.slice(1)

    }
    return (
        prop.alert && <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{convertLetter(prop.alert.type)}</strong>: {prop.alert.message}
        </div>
    )
}

export default Alert
