import React, { useState } from 'react';
import './Content.css';
import serena from './assets/primary-imgs/serena.jpeg';
import blair from './assets/primary-imgs/blair.jpg';
import Jenny_Humphrey_Season_3 from './assets/primary-imgs/Jenny_Humphrey_Season_3.jpg';
import dan from './assets/primary-imgs/dan.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Content = () => {
    const contents = [
        { title: 'Spotted: S is back in town!!', image: serena, text: 'After taking a much needed break from the UES, Serena van der Woodsen has returned. We\'ve missed you, S!' },
        { title: "Blair Waldorf's Secret Affair Revealed!",image: blair, text: "Upper East Side's Queen B, Blair Waldorf, caught in a scandalous rendezvous that even Gossip Girl couldn't predict!" },
        { title: "Jenny's Grand Debut: A Night of Secrets Unveiled!",image: Jenny_Humphrey_Season_3, text: "Little J's rise to the top is just beginning. XOXO, Gossip Girl." },
        { title: "Dan Humphrey: The Ultimate Insider?",image: dan, text: "Dan Humphrey, the outsider, is now the ultimate insider. How will this affect his relationship with Serena?" },
    ];

    const [index, setIndex] = useState(0);

    const nextContent = () => {
        setIndex((index + 1) % contents.length);
    };

    const prevContent = () => {
        setIndex((index - 1 + contents.length) % contents.length);
    };
    return (
        <div className="carousel">
            <div className="content-container">
                <button className="arrow arrow-left" onClick={prevContent}><FontAwesomeIcon icon={faChevronLeft} size="2x" /></button
                >
                <h2>{contents[index].title}</h2>
                <img src={contents[index].image} alt="Content" style={{ width: 250, height: 250 }} />
                <p>{contents[index].text}</p>
                <button className="arrow arrow-right" onClick={nextContent}><FontAwesomeIcon icon={faChevronRight} size="2x" /></button>
            </div>
        </div>
    );
};

export default Content;
