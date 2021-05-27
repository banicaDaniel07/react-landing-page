import React from 'react';

import './team-item.styles.scss';

const TeamItem = ({photo, name, position}) => {
    return (
        <div className='team-item'>
            <div className={`team-item__photo ${photo}`}></div>
            <h3 className="team-item__name">{name}</h3>
            <p className="team-item__position">{position}</p>
        </div>
    )
}

export default TeamItem
