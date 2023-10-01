import React from 'react'

const Title = (props) => {
    console.log(props)
    return (

        <div className='font-[bankGothic] text-center text-3xl bg-[#266f83] text-white relative bottom-52 z-10'>
            {props.text}
        </div>

    )
}

export default Title