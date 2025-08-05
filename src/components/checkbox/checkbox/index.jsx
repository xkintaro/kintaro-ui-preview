import { KintaroCheckBox, KintaroTitle2, KintaroButton3 } from 'kintaro-ui/src';

import { useState } from 'react';

function CheckBox1() {

    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="kintaro-ui-item">
            <div className="item-head" style={{ display: 'block' }}>
                <KintaroTitle2>{"<KintaroCheckBox />"}</KintaroTitle2>
                <div className="item-prop" style={{ marginTop: '1rem' }}>
                    <KintaroButton3 title={"width"}>width</KintaroButton3>
                    <KintaroButton3 title={"height"}>height</KintaroButton3>
                    <KintaroButton3 title={"placeholder"}>placeholder</KintaroButton3>
                    <KintaroButton3 title={"disabled"}>disabled</KintaroButton3>
                </div>
            </div>
            <div className="item-main" style={{ padding: '2rem' }}>
                <KintaroCheckBox
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                />
            </div>
        </div>
    )
}

export default CheckBox1