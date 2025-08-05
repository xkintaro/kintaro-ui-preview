import { KintaroButton4, KintaroTitle2, KintaroButton3 } from 'kintaro-ui/src';

function Button4() {
    return (
        <div className="kintaro-ui-item">
            <div className="item-head" style={{ display: 'block' }}>
                <KintaroTitle2>{"<KintaroButton4 />"}</KintaroTitle2>
                <div className="item-prop" style={{ marginTop: '1rem' }}>
                    <KintaroButton3>style</KintaroButton3>
                    <KintaroButton3>disabled</KintaroButton3>
                </div>
            </div>
            <div className="item-main">
                <KintaroButton4>Button</KintaroButton4>
            </div>
        </div>
    )
}

export default Button4