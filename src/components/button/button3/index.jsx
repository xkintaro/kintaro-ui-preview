import { KintaroTitle2, KintaroButton3 } from 'kintaro-ui/src';

function Button3() {
    return (
        <div className="kintaro-ui-item">
            <div className="item-head" style={{ display: 'block' }}>
                <KintaroTitle2>{"<KintaroButton3 />"}</KintaroTitle2>
                <div className="item-prop" style={{ marginTop: '1rem' }}>
                    <KintaroButton3>width</KintaroButton3>
                    <KintaroButton3>style</KintaroButton3>
                    <KintaroButton3>disabled</KintaroButton3>
                </div>
            </div>
            <div className="item-main">
                <KintaroButton3>Button</KintaroButton3>
            </div>
        </div>
    )
}

export default Button3