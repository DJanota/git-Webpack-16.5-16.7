import React from 'react';
import style from './Title.css';

const Title = props => {
    return (
        <div className={style.Title}>
            <h1>{props.title}</h1>
            <div>{props.numberOfTasks}</div>
        </div>
    );
}

export default Title;