import { KintaroTitle2, KintaroDescription } from 'kintaro-ui/src';

import TextBox1 from './textbox1';
import TextBox2 from './textbox2';
import TextBox3 from './textbox3';

function TextBox() {
    return (
        <div className="kw-ui">
            <div className="ui-group-head">
                <KintaroTitle2>Kintaro TextBox Components</KintaroTitle2>
                <KintaroDescription
                    text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
                />
            </div>
            <div className="ui-group">
                <TextBox1 />
                <TextBox2 />
                <TextBox3 />
            </div>
        </div>
    )
}

export default TextBox