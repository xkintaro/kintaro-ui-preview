import { KintaroTitle2, KintaroButton3 } from 'kintaro-ui/src';

function Title2() {
    return (
        <div className="kintaro-ui-item">
            <div className="item-head" style={{ display: 'block' }}>
                <KintaroTitle2>{"<KintaroTitle2 />"}</KintaroTitle2>
                <div className="item-prop" style={{ marginTop: '1rem' }}>
                    <KintaroButton3>color</KintaroButton3>
                    <KintaroButton3>width</KintaroButton3>
                    <KintaroButton3>textAlign</KintaroButton3>
                    <KintaroButton3>textAlignMobile</KintaroButton3>
                </div>
            </div>
            <div className="item-main">
                <KintaroTitle2>Title</KintaroTitle2>
            </div>
        </div>
    )
}

export default Title2