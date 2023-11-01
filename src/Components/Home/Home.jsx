import React from 'react';

import CarouselImg from './CarouselImg';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
          <Marquee behavior="pusheOnClick" className='text-blue-500' speed="50" direction="left">
            <Link>
            <h1>Rpid News</h1>
            </Link>
          </Marquee>
            <h1>This is Home</h1>
            <CarouselImg></CarouselImg>

            <div className='bg-blue-300 p-5 my-8 w-1/2 justify-center mx-auto'>
                <h1>Sharjah Indian School is a Senior
                     Secondary School, Owned and Managed
                      by Indian Association Sharjah. Established
                       in 1979 with 280 pupils and 13 teachers, 
                       the school stands as a landmark in the
                        annals of the Indo- UAE friendship. 
                        Today after 43 years, the school has a 
                        strength of 13,937 students and 588 teachers
                         with 8300 Students and 349 Teachers at 
                         Ghubaiba Branch . The school is approved and
                          licensed by the Sharjah Private Education 
                          Authority , UAE and is affiliated to Central 
                          Board of Secondary Education, New Delhi ,
                           India. The school which stands on a plot of 
                           land most graciously donated by H.H Sheikh
                            Sultan Bin Mohammed Al Qassimi, Member of
                             the Supreme Council and Ruler of Sharjah,
                              has a purpose built and magnificent 
                              infrastructure.</h1>
            </div>
        </div>
    );
};

export default Home;