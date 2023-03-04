import React from 'react';
import {useRouteError} from "react-router-dom";
import s from './error.module.scss';

const Error = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page" className={s.error}>
            <div className={s.errorText}>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default Error;