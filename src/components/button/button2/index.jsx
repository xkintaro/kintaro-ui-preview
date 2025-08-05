import { KintaroButton2, KintaroTitle2, KintaroButton3 } from 'kintaro-ui/src';

function Button2() {
    return (
        <div className="kintaro-ui-item">
            <div className="item-head" style={{ display: 'block' }}>
                <KintaroTitle2>{"<KintaroButton2 />"}</KintaroTitle2>
                <div className="item-prop" style={{ marginTop: '1rem' }}>
                    <KintaroButton3>width</KintaroButton3>
                    <KintaroButton3>style</KintaroButton3>
                    <KintaroButton3>disabled</KintaroButton3>
                </div>
            </div>
            <div className="item-main">
                <KintaroButton2>Button</KintaroButton2>
            </div>
        </div>
    )
}

export default Button2