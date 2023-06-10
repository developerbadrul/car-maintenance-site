import React from 'react';

import expart1 from '../../images/expart/expert-1.jpg'
import expart2 from '../../images/expart/expert-2.jpg'
import expart3 from '../../images/expart/expert-3.jpg'
import expart4 from '../../images/expart/expert-4.jpg'
import expart5 from '../../images/expart/expert-5.jpg'
import expart6 from '../../images/expart/expert-6.jpg'
import Expert from '../Expart/Expert';

const experts = [
    {id: 1, name: 'Will Smith', img: expart1},
    {id: 2, name: 'Chris Rock', img: expart2},
    {id: 3, name: 'Dwayne Rock', img: expart3},
    {id: 4, name: 'Messy Vai', img: expart4},
    {id: 5, name: 'Ronaldo Bro', img: expart5},
    {id: 6, name: 'Stachy Jhonson', img: expart6},
]

const Exparts = () => {
    return (
        <div>
            <h2 className='text-primary text-center py-3'>Our Exparts</h2>
            <div className='row'>
            {
                experts.map(expert => <Expert
                key={expert.id}
                expert={expert}
                >

                </Expert>)
            }
            </div>
        </div>
    );
};

export default Exparts;