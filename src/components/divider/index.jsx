import { KintaroTitle2, KintaroDescription } from 'kintaro-ui/src';

import Divider1 from './divider1';

function Divider() {
    return (
        <div className="kw-ui">
            <div className="ui-group-head">
                <KintaroTitle2>Kintaro Divider Components</KintaroTitle2>
                <KintaroDescription
                    text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
                />
            </div>
            <div className="ui-group">
                <Divider1 />
            </div>
        </div>
    )
}

export default Divider