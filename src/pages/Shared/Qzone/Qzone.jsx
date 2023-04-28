import React from 'react';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const Qzone = () => {
    return (
        <div className='bg-light text-center my-3'>
            <h4 className='text-start py-3 px-3'>Q-zone</h4>
            <div className='py-3'>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;