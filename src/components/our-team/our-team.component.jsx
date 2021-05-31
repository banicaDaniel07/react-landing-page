import React from 'react';
import Title  from '../title/title.component';
import TeamItem from '../team-item/team-item.component';

import './our-team.styles.scss';

const OurTeam = () => {
    return (
        <div className='team' id='team'>
            <Title>MEET THE TEAM</Title>
            <p className="team__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            <div className="team__container">
                <TeamItem photo='bg-t-01' name='John Doe' position='Director' />
                <TeamItem photo='bg-t-02' name='Mike Doe' position='Senior Designer' />
                <TeamItem photo='bg-t-03' name='Jane Doe' position='Senior Designer' />
                <TeamItem photo='bg-t-04' name='Karen Doe' position='Project Manager' />
            </div>
        </div>
    )
}

export default OurTeam
