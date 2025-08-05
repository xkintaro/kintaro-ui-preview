import { KintaroTitle2, KintaroDescription } from 'kintaro-ui/src';

import Title1 from './title1';
import Title2 from './title2';
import Title3 from './title3';

function Title() {
    return (
        <div className="kw-ui">
            <div className="ui-group-head">
                <KintaroTitle2>Kintaro Title Components</KintaroTitle2>
                <KintaroDescription
                    text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
                />
            </div>
            <div className="ui-group">
                <Title1 />
                <Title2 />
                <Title3 />
            </div>
        </div>
    )
}

export default Title