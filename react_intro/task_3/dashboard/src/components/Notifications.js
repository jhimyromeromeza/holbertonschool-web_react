import React from 'react'
import '../Notifications.css'
import close from './close-icon.png'
import { getLatestNotification } from './utils';

export const Close = () => {
    return console.log('Close button has been clicked');
}

export const Notifications = () => {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
            <button style={{position: 'absolute', top: '30px', right: '30px', backgroundColor: 'transparent', border: 'none'}} aria-label="Close" onClick={Close}>
                <img src={close} alt="close" style={{height: '15px'}}></img>
            </button>
        </div>
    )
}