import React from 'react'
import Gap from '../Gap'

const Upload = ({img, ...rest }) => {
    return (
        <div>
            <input type="file" { ...rest } />
            <Gap height={20} />
            { img && <img src={ img } alt='img-upload' /> }
        </div>
    )
}

export default Upload
