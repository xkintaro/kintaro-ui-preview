import { KintaroTextBox3, KintaroTitle2, KintaroButton3 } from 'kintaro-ui/src';

function TextBox3() {
    return (
        <div className="kintaro-ui-item">
            <div className="item-head" style={{ display: 'block' }}>
                <KintaroTitle2 title={"<KintaroTextBox3 />"} />
                <div className="item-prop" style={{ marginTop: '1rem' }}>
                    <KintaroButton3 title={"width"}>width</KintaroButton3>
                    <KintaroButton3 title={"title"}>title</KintaroButton3>
                    <KintaroButton3 title={"disabled"}>disabled</KintaroButton3>
                </div>
            </div>
            <div className="item-main">
                <KintaroTextBox3 title={"Text Here"} />
            </div>
        </div>
    )
}

export default TextBox3