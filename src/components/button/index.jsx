import { KintaroTitle2, KintaroDescription } from 'kintaro-ui/src';

import Button1 from './button1';
import Button2 from './button2';
import Button3 from './button3';
import Button4 from './button4';
import ButtonClose from './buttonClose';

function Button() {
    return (
        <div className="kw-ui">
            <div className="ui-group-head">
                <KintaroTitle2>Kintaro Button Components</KintaroTitle2>
                <KintaroDescription
                    text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
                />
            </div>
            <div className="ui-group">
                <Button1 />
                <Button2 />
                <Button3 />
                <Button4 />
                <ButtonClose />
            </div>
        </div>
    )
}

export default Button