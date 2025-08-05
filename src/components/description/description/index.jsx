import { KintaroDescription, KintaroTitle2, KintaroButton3 } from 'kintaro-ui/src';

function Description1() {
    return (
        <div className="kintaro-ui-item">
            <div className="item-head" style={{ display: 'block' }}>
                <KintaroTitle2>{"<KintaroDescription />"}</KintaroTitle2>
                <div className="item-prop" style={{ marginTop: '1rem' }}>
                    <KintaroButton3>text</KintaroButton3>
                    <KintaroButton3>maxLength</KintaroButton3>
                    <KintaroButton3>showToggleButton</KintaroButton3>
                    <KintaroButton3>textAlign</KintaroButton3>
                    <KintaroButton3>textAlignMobile</KintaroButton3>
                </div>
            </div>
            <div className="item-main">
                <KintaroDescription
                    text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"}
                    maxLength={"50"}
                    showToggleButton={true} />
            </div>
        </div>
    )
}

export default Description1