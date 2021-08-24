import React from 'react'

export default function Contact() {
    return (
        <div>
            Thanks for Contacting...
            <HOC comp={Simple}/>
        </div>
    )


    function HOC(props){
const X=props.comp
        return <X/>
    }

    function Simple(){

        return "Hello from HOc"
    }
}
