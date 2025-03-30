import { useState, useCallback, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './TestApp.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = (props) => {

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    const getSomeImage = useCallback(() => {
        console.log('fetching');
        return [
            "https://img.freepik.com/free-photo/light-trails-buildings_1359-714.jpg?t=st=1743347577~exp=1743351177~hmac=46dd1d0e87ca516a4f7b32f0834dba8a4ce456c336ab04960a89c4acef32e10a&w=900",
            "https://img.freepik.com/free-photo/glowing-futuristic-digital-design-network-server-generated-by-ai_188544-27277.jpg?t=st=1743347172~exp=1743350772~hmac=87590a49f6e19add466e988b665de2a5de10c25633b7d6bdd121d01ffe1e36ad&w=1060"
        ]
    }, [])

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                {/* {
                    getSomeImage().map((url, i) => {
                        return (
                            <img key={i} className="d-block w-100" src={url} alt="slide" />
                        )
                    })
                } */}

                <Slide getSomeImage={getSomeImage} />

                <div className="text-center mt-5">Active slide {slide} <br />
                    {autoplay ? 'auto' : null}
                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


const Slide = ({ getSomeImage }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getSomeImage())
    }, [getSomeImage])

    return (
        <>
            {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide" />)}
        </>
    )
}


function TestApp() {
    const [slider, setSlider] = useState(true);
    return (
        <>
            <button onClick={() => setSlider(false)}>Click</button>
            {slider ? <Slider /> : null}
        </>
    );
}

export default TestApp;
