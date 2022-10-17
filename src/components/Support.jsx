import React from 'react'

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'

const Support = () => {
    return (
        <div className=' w-full h-screen mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
            </div>
            <div>
                <div className=''>
                    <h2>Support</h2>
                    <h3>Finding the right team</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat aut, repellendus laborum voluptates at iure magnam fuga! Obcaecati dolores natus neque placeat hic, corporis deserunt beatae, alias, cupiditate modi provident.</p>
                </div>

                <div>
                    <div>
                        <div>
                            <PhoneIcon />
                            <h3>Sales</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dolore laboriosam blanditiis quo. Non voluptatum quisquam obcaecati eaque repellendus quod?</p>
                        </div>
                        <div>
                            <p>Contact Us <ArrowSmRightIcon /></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Support