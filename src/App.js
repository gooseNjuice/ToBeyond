/* eslint-disable react/jsx-filename-extension */
import './App.scss';
import {Button} from 'primereact/button';
import {Fieldset} from 'primereact/fieldset';
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
                    'gyroControls': true,
                    'minHeight': 200.00,
                    'minWidth': 200.00,
                    'scale': 1.00,
                    'scaleMobile': 1.00,
                    'color': '#2da692',
                    'color2': '#75ffe3',
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
        className="hero "
        id="my-background"
        ref={myRef}>
        <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
        </h1>
        <Button />
    </header>;

};


export default App;
