import { KintaroTitle2, KintaroDescription } from 'kintaro-ui/src';

import CheckBox1 from './checkbox';

function CheckBox() {
    return (
        <div className="kw-ui">
            <div className="ui-group-head">
                <KintaroTitle2>Kintaro CheckBox Components</KintaroTitle2>
                <KintaroDescription
                    text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
                />
            </div>
            <div className="ui-group">
                <CheckBox1 />
            </div>
        </div>
    )
}

export default CheckBox