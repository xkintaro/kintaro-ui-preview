import { KintaroButtonClose, KintaroTitle2, KintaroButton3 } from 'kintaro-ui/src';

function ButtonClose() {
    return (
        <div className="kintaro-ui-item">
            <div className="item-head" style={{ display: 'block' }}>
                <KintaroTitle2>{"<KintaroButtonClose />"}</KintaroTitle2>
                <div className="item-prop" style={{ marginTop: '1rem' }}>
                    <KintaroButton3>size</KintaroButton3>
                    <KintaroButton3>color</KintaroButton3>
                    <KintaroButton3>style</KintaroButton3>
                    <KintaroButton3>title</KintaroButton3>
                </div>
            </div>
            <div className="item-main">
                <KintaroButtonClose title={"Kapat"} />
            </div>
        </div>
    )
}

export default ButtonClose