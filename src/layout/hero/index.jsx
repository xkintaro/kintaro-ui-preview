import {
    KintaroTitle1,
    KintaroButton1,
    KintaroButton2,
    KintaroDescription,
} from 'kintaro-ui/src';

import overlay from '/2.png'

function Hero() {
    return (
        <div className="kintaro-ui-hero">
            <div className="hero-main">
                <KintaroTitle1>Kintaro UI Components</KintaroTitle1>
                <KintaroDescription
                    text={"npm install git+https://github.com/xkintaro/kintaro-ui.git"}
                />
                <div className="kwherobtns">
                    <KintaroButton1
                        title={"Discord"}
                        onClick={() => window.open("https://discord.com/invite/NSQk27Zdkv", "_blank")}
                    >Discord</KintaroButton1>
                    <KintaroButton2 title={"GitHub"}
                        style={{ border: '1px solid var(--kintaro-accent-color-1)' }}
                        onClick={() => window.open("https://github.com/xkintaro", "_blank")}
                    >Github</KintaroButton2>
                </div>
            </div>
            <img src={overlay} alt="hero" className="hero-overlay" />
        </div>
    )
}

export default Hero