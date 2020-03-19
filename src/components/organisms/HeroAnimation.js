import React, { useEffect } from 'react';
import { TimelineMax, Power1 } from 'gsap';

import doodles from './../../../static/img/homepage-hero/doodles.png';
import pinkBlob from './../../../static/img/homepage-hero/pink_blob.png';
import blueBlob from './../../../static/img/homepage-hero/blue_blob.png';

import matrix from './../../../static/img/homepage-hero/matrix.png';
import greenPaint from './../../../static/img/homepage-hero/green_screenpaint.png';

import pinkElephant from './../../../static/img/homepage-hero/pink_elephant.png';
import orangSicle from './../../../static/img/homepage-hero/orangsicle.png';

const HeroAnimation = () => {
    useEffect(() => {
        const groupThree = document.querySelector('.group-three');
        const groupThreeImgOne = groupThree.querySelector('.-pink-blob');
        const groupThreeImgTwo = groupThree.querySelector('.-blue-blob-two');
        const groupThreeImgThree = groupThree.querySelector('.-doodles');
        // const groupTwo = document.querySelector('.group-two');
        // const groupTwoImgOne = groupTwo.querySelector('.-green-paint');
        // const groupTwoImgTwo = groupTwo.querySelector('.-matrix');
        const groupOne = document.querySelector('.group-one');
        const groupOneImgOne = groupOne.querySelector('.-orangsicle');
        const groupOneImgTwo = groupOne.querySelector('.-pink-elephant');
        const groupOneImgThree = groupOne.querySelector('.-blue-blob');

        const tl = new TimelineMax();

        tl.set(groupOneImgOne, {opacity: 0})
        tl.set(groupOneImgTwo, {opacity: 0})
        tl.set(groupOneImgThree, {opacity: 0})
        // tl.set(groupTwoImgOne, {opacity: 0})
        // tl.set(groupTwoImgTwo, {opacity: 0})
        tl.set(groupThreeImgOne, {opacity: 0})
        tl.set(groupThreeImgTwo, {opacity: 0})
        tl.set(groupThreeImgThree, {opacity: 0})
        tl.to(groupOneImgOne, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 1)
        tl.to(groupOneImgTwo, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 3)
        tl.to(groupOneImgThree, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 5)
        tl.to(groupOneImgOne, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 7)
        tl.to(groupOneImgTwo, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 7)
        tl.to(groupOneImgThree, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 7)
        // tl.to(groupTwoImgOne, 1.5, {
        //     opacity:    1,
        //     ease:       Power1.easeIn
        // }, 9)
        // tl.to(groupTwoImgTwo, 1.5, {
        //     opacity:    1,
        //     ease:       Power1.easeIn
        // }, 11)
        // tl.to(groupTwoImgOne, 1.5, {
        //     opacity:    0,
        //     ease:       Power1.easeOut
        // }, 13)
        // tl.to(groupTwoImgTwo, 1.5, {
        //     opacity:    0,
        //     ease:       Power1.easeOut
        // }, 13)
        tl.to(groupThreeImgOne, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 9)
        tl.to(groupThreeImgTwo, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 11)
        tl.to(groupThreeImgThree, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 13)
    }, []);

    return (
        <div>

            {/* <div className = "o-hero__background-group group-two">
                <img className = "o-hero__background -green-paint" src = { greenPaint } />
                <img className = "o-hero__background -matrix" src = { matrix } />
            </div> */}
            <div className = "o-hero__background-group group-one">
                <img className = "o-hero__background -orangsicle" src = { orangSicle } />
                <img className = "o-hero__background -pink-elephant" src = { pinkElephant } />
                <img className = "o-hero__background -blue-blob" src = { blueBlob } />
            </div>
            <div className = "o-hero__background-group group-three">
                <img className = "o-hero__background -pink-blob" src = { pinkBlob } />
                <img className = "o-hero__background -blue-blob-two" src = { blueBlob } />
                <img className = "o-hero__background -doodles" src = { doodles } />
            </div>
        </div>
    )
}

export default HeroAnimation;