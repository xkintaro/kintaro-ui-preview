import { KintaroTitle2, KintaroDescription, KintaroModal } from 'kintaro-ui/src';

import Modal1 from './modal';

function Modal() {
    return (
        <div className="kw-ui">
            <div className="ui-group-head">
                <KintaroTitle2>Kintaro Modal Components</KintaroTitle2>
                <KintaroDescription
                    text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
                />
            </div>
            <div className="ui-group">
                <Modal1 />
            </div>
        </div>
    )
}

export default Modal