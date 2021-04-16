import React from 'react';

function Student(props) {
    
    return (
        <div>
            <h1>
                Student {(props.stdNo)} name is {props.firstStudentName}
            </h1>
            <p>
                {props.firstStudentName} is {props.age} year old.
            </p>
            <p>
                {props.firstStudentName} likes {props.dish}.
            </p>
        </div>
    );
}
export default Student;