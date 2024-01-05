import React,{forwardRef} from 'react'
import Fade from 'react-reveal/Fade'

import Button from 'elements/Button'

import imageHero from "assets/images/img-hero.jpg";
import imageHero_ from "assets/images/img-hero-frame.jpg";
import iconCities from "assets/images/icons/icon-cities.svg";
import iconCitiesLight from "assets/images/icons/icon-cities-light.svg";
import iconTraveler from "assets/images/icons/icon-traveler.svg";
import iconTravelerLight from "assets/images/icons/icon-traveler-light.svg";
import iconTreasure from "assets/images/icons/icon-treasure.svg";
import iconTreasureLight from "assets/images/icons/icon-treasure-light.svg";

import { hero } from 'models/landingPage/hero';
import formatNumber from "utils/formatNumber";
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import Skeleton from 'react-loading-skeleton';

// const Hero =forwardRef((hero:any,test:string) => {
const Hero =forwardRef(({hero, isLoading}: {hero?: hero, isLoading?: boolean}, ref: any) => {
   const checkTheme = useSelector((state:RootState) => state.toggleTheme.isDark)
   
   function showMostPicked():void {
      window.scrollTo({
         top: ref.current.offsetTop - 30,
         behavior: "smooth",
      });
   }
   
   return (
      <section className="container" data-name="hero">
         {
            hero && !isLoading ? (
               <div className="row">
                  <div className="col-lg-6 col-12">
                     <p className={`hero-title${checkTheme ? '-light' : ''}`}>Forget Busy Work,<br/>Start Next Vacation</p>
                     <p className='hero-title-content'>We provide what you need to enjoy your<br/>holiday with family. Time to make another<br/>memorable moments.</p>
                     <Button
                        type='button'
                        className='btn px-5'
                        hasShadow
                        isPrimary
                        onClick={showMostPicked}
                     >
                        Show Me Now
                     </Button>
                     <div className='row hero-icon'>
                        <div className='col-4 col-lg-auto'>
                           <img
                              width='36'
                              height='36'
                              src={checkTheme ? iconTravelerLight : iconTraveler}
                              alt={`${hero.travelers} travelers`}
                           />
                           <h6 className='mt-6 text-hero-icon'>
                              {formatNumber(hero.travelers)}{" "}
                              <span>
                                 Traverlers
                              </span>
                           </h6>
                        </div>
                        <div className='col-4 col-lg-auto'>
                           <img
                              width='36'
                              height='36'
                              src={checkTheme ? iconTreasureLight : iconTreasure}
                              alt={`${hero.treasures} treasures`}
                           />
                           <h6 className='mt-6 text-hero-icon'>
                              {formatNumber(hero.treasures)}{" "}
                              <span>
                                 Treasures
                              </span>
                           </h6>
                        </div>
                        <div className='col-4 col-lg-auto'>
                           <img
                              width='36'
                              height='36'
                              src={checkTheme ? iconCitiesLight : iconCities}
                              alt={`${hero.cities} cities`}
                           />
                           <h6 className='mt-6 text-hero-icon'>
                              {formatNumber(hero.cities)}{" "}
                              <span>Cities</span>
                           </h6>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-12">
                     <div className="hero-image-placeholder position-relative">
                        <img
                           src={imageHero}
                           alt='Room with couches'
                           className='img-fluid position-absolute'
                        />
                        <img
                           src={imageHero_}
                           alt='Room with couches frame'
                           className={`img-fluid position-absolute ${checkTheme ? 'd-none' : ''}`}
                        />
                     </div>
                  </div>
               </div>
            ): isLoading && (
               <div className="row">
                  <Skeleton className="w-[200px]"/>
                  <div className="col-lg-6 col-12">
                     <div className="hero-image-placeholder position-relative">
                        <img
                           src={imageHero}
                           alt='Room with couches'
                           className='img-fluid position-absolute'
                        />
                        <img
                           src={imageHero_}
                           alt='Room with couches frame'
                           className={`img-fluid position-absolute ${checkTheme ? 'd-none' : ''}`}
                        />
                     </div>
                  </div>
               </div>
            )
         }
      </section>
   )
}) 

export default Hero
