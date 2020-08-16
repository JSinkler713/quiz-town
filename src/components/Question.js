import React from 'react';


function Question(props) {
    return (
        <div>
            {props.answer}
            <button onClick={()=> props.checkTrue(props.correct)}>Submit</button>
        </div>
    );
}

export default Question;