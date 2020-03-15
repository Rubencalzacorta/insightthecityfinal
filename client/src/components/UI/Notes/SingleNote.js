import React from 'react'

const SingleNote = (props) => {

    return (

        props ?

            <article style={{ paddingLeft: 5, paddingRight: 1 }}>

                {/* <h6 className="note-creator">{props.eachNote.creator}</h6> */}
                <p className="note-text">{props.eachNote.text}</p>
                <hr />

            </article>


            : "loading"

    )

}

export default SingleNote