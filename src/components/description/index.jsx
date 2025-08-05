import { KintaroTitle2, KintaroDescription } from 'kintaro-ui/src';

import Description1 from './description';

function Description() {
    return (
        <div className="kw-ui">
            <div className="ui-group-head">
                <KintaroTitle2>Kintaro Description Components</KintaroTitle2>
                <KintaroDescription
                    text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
                />
            </div>
            <div className="ui-group">
                <Description1 />
            </div>
        </div>
    )
}

export default Description