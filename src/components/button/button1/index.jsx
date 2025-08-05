import { KintaroButton1, KintaroTitle2, KintaroButton3 } from 'kintaro-ui/src';

function Button1() {
    return (
        <div className="kintaro-ui-item">
            <div className="item-head" style={{ display: 'block' }}>
                <KintaroTitle2>{"<KintaroButton1 />"}</KintaroTitle2>
                <div className="item-prop" style={{ marginTop: '1rem' }}>
                    <KintaroButton3>width</KintaroButton3>
                    <KintaroButton3>style</KintaroButton3>
                    <KintaroButton3>disabled</KintaroButton3>
                </div>
            </div>
            <div className="item-main">
                <KintaroButton1>Button</KintaroButton1>
            </div>
        </div>
    )
}

export default Button1