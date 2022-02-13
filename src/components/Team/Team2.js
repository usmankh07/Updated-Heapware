import React from 'react';
import team_image from '../../images/team_image.png'

function Team2() {
    return <>
        <div className="team1">
            <div className="team_firstpart">
                <h2>Enthusiastic and  Passionate Staff</h2>
                <p>Thank you to our talent, enthusiastic and passionate employees, all goods reach destinations in a fast, safe <br /> and reliable way and satisfy all our customers.</p>
            </div>
                <div className="imageofteam">
                    <img src={team_image} alt=""/>
                </div>

        </div>
    </>;
}

export default Team2;
