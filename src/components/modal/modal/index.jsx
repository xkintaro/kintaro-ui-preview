import { KintaroModal, KintaroTitle2, KintaroButton3, KintaroDescription, KintaroButton1 } from 'kintaro-ui/src';
import { useState } from 'react';

function Modal1() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div className="kintaro-ui-item">
            <div className="item-head" style={{ display: 'block' }}>
                <KintaroTitle2>{"<KintaroModal />"}</KintaroTitle2>
                <div className="item-prop" style={{ marginTop: '1rem' }}>
                    <KintaroButton3>isOpen</KintaroButton3>
                    <KintaroButton3>onClose</KintaroButton3>
                    <KintaroButton3>title</KintaroButton3>
                    <KintaroButton3>width</KintaroButton3>
                </div>
            </div>
            <div className="item-main">
                <KintaroButton1 onClick={() => setModalVisible(true)} >Open Modal</KintaroButton1>
                <KintaroModal
                    isOpen={modalVisible}
                    onClose={() => setModalVisible(false)}
                    title={"Kintaro Modal"}
                >
                    <KintaroDescription
                        text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
                    />
                </KintaroModal>
            </div>
        </div>
    )
}

export default Modal1