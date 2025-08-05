import { KintaroTextBox1, KintaroTitle2, KintaroButton3 } from 'kintaro-ui/src';

function TextBox1() {
    return (
        <div className="kintaro-ui-item">
            <div className="item-head" style={{ display: 'block' }}>
                <KintaroTitle2 title={"<KintaroTextBox1 />"} />
                <div className="item-prop" style={{ marginTop: '1rem' }}>
                    <KintaroButton3 title={"width"}>width</KintaroButton3>
                    <KintaroButton3 title={"height"}>height</KintaroButton3>
                    <KintaroButton3 title={"placeholder"}>placeholder</KintaroButton3>
                    <KintaroButton3 title={"disabled"}>disabled</KintaroButton3>
                </div>
            </div>
            <div className="item-main">
                <KintaroTextBox1 placeholder={"Text Here"} />
            </div>
        </div>
    )
}

export default TextBox1