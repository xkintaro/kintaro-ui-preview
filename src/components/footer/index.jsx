import { KintaroTitle2, KintaroDescription } from 'kintaro-ui/src';
import { useState, useEffect } from 'react';

import Footer1 from './footer';

function Footer() {

    const [text, setText] = useState("");

    useEffect(() => {
        fetch("/kintaro-ui-preview/footer-code.txt")
            .then((res) => res.text())
            .then((data) => setText(data));
    }, []);

    return (
        <div className="kw-ui-footer">

            <div className="ui-group-head">
                <KintaroTitle2>{"Kintaro Footer Component Code"}</KintaroTitle2>
                <KintaroDescription
                    text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
                />
            </div>

            <div className="footer-code-kw-ui">
                <pre>
                    <code>{text}</code>
                </pre>
            </div>

            <Footer1 />

        </div>
    )
}

export default Footer