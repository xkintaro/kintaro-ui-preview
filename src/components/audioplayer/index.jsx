import { KintaroTitle2, KintaroDescription } from 'kintaro-ui/src';
import { useState, useEffect } from 'react';

import AudioPlayer1 from './audioplayer';

function AudioPlayer() {

    const [textAudioPlayer, setTextAudioPlayer] = useState("");

    useEffect(() => {
        fetch("/kintaro-ui-preview/audio-player-code.txt")
            .then((res) => res.text())
            .then((data) => setTextAudioPlayer(data));
    }, []);

    return (
        <div className="kw-ui-footer">

            <div className="ui-group-head">
                <KintaroTitle2>{"Kintaro Audio Player Component Code"}</KintaroTitle2>
                <KintaroDescription
                    text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
                />
            </div>

            <div className="footer-code-kw-ui">
                <pre>
                    <code>{textAudioPlayer}</code>
                </pre>
            </div>

            <AudioPlayer1 />
        </div>
    )
}

export default AudioPlayer