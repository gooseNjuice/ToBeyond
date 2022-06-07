/* eslint-disable react/jsx-filename-extension */
import './App.scss';
import {useEffect, useRef, useState} from 'react';
import GLOBE from 'vanta/dist/vanta.globe.min';
import PrimeReact from 'primereact/api';

PrimeReact.ripple = true;
// eslint-disable-next-line react/jsx-filename-extension
const App = () => {

    const [
            vantaEffect,
            setVantaEffect
        ] = useState(),
        myRef = useRef(null);
    useEffect(
        () => {

            if (!vantaEffect) {

                // eslint-disable-next-line new-cap
                setVantaEffect(GLOBE({
                    'el': myRef.current,
                    'mouseControls': true,
                    'touchControls': true,
                    'gyroControls': false,
                    'minHeight': 200.00,
                    'minWidth': 200.00,
                    'scale': 1.00,
                    'scaleMobile': 1.00,
                    'color': '#604593',
                    'color2': '#4b3b6b',
                    'backgroundColor': '#17151f'
                }));

            }
            return () => {

                if (vantaEffect) {

                    vantaEffect.destroy();

                }

            };

        },
        [vantaEffect]
    );
    return <header
        className="hero"
        id="my-background"
        ref={myRef}>

        <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
        </h1>
    </header>;

};


export default App;
