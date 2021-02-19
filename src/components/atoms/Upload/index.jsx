import React from 'react'

const Upload = ({ ...rest }) => {
    return (
        <div>
            <input type="file" { ...rest } />
        </div>
    )
}

export default Upload
