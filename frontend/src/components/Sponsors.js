import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./Sponsors.css";

const SponsorsFull = () => {

    const urlsInit = [
        "https://assets-global.website-files.com/5eee4eb84206dd808f65453b/5f03382db8b6e43bad99fc80_Lyft_logo.svg.png",
        "https://assets-global.website-files.com/5eee4eb84206dd808f65453b/5f03382ebcb09a5bf60b60bb_cropped-play-octopus-logo-white-edge.png",
        "https://assets-global.website-files.com/5eee4eb84206dd808f65453b/5f03382dda40c71bc0fe8d44_1600px-Uber_logo_2018.svg.png",
    ];

    const urlsFin = [...urlsInit, ...urlsInit, ...urlsInit];

    const images = urlsFin.map((url, ind) => {
        return (
            <div key={ind} className="flex-horizontal">
                <div className="icon-container-alt">
                    <img
                        src={url}
                        alt=""
                        className="icon"
                    />
                </div>
                <div className="spacer-30 _25-xsvp"></div>
                <div> <img className="sponsor-img" src="sponsors1.svg" alt="" /></div>
                <div className="spacer-30 _25-xsvp"></div>
            </div>
        )
    });

    const fadeImages = urlsFin.map((url, ind) => {
        return (
            <div key={ind} className="flex-horizontal">
                <div>
                    <div className="icon-container-alt">
                        <img
                            src={url}
                            alt=""
                            className="icon"
                        />
                    </div>
                </div>
                <div className="spacer-30 _25-xsvp"></div>
                <div> <img className="sponsor-img" src="sponsors1.svg" alt="" /></div>
                <div className="spacer-30 _25-xsvp"></div>
                <div>
                    <div className="icon-container-alt">
                        <img
                            src={url}
                            alt=""
                            className="icon"
                        />
                    </div>
                </div>
            </div>
        )
    });

    const properties = {
        arrows: false,
    }

    return (
        <>
            <div>
                <Fade {...properties}>
                    {fadeImages}
                </Fade>
            </div>
            <div className="spacer-50"></div>
            <div className="container flex-vertical">
                <div className="marquee-vertical-css w-embed">
                </div>
                <div className="flex-horizontal flip-svp">
                    <div className="flex-vertical">
                        <div className="marquee-horizontal-large">
                            <div className="marquee-cover-horizontal"></div>
                            <div className="track-horizontal">
                                <div className="flex-horizontal">
                                    {images}
                                </div>
                            </div>
                        </div>
                        <div className="text">PATRONS</div>
                        <div className="marquee-horizontal-large">
                            <div className="marquee-cover-horizontal"></div>
                            <div className="track-horizontal-alt">
                                <div className="flex-horizontal">
                                    {images}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer-50"></div>
            <div>
                <Fade {...properties}>
                    {fadeImages}
                </Fade>
            </div>
        </>
    );
};

export default SponsorsFull;

