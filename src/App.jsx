import 'kintaro-ui/src/root.css';
import {
  KintaroTitle1, KintaroTitle2, KintaroTitle3,
  KintaroTextBox1, KintaroTextBox2, KintaroTextBox3,
  KintaroButton1, KintaroButton2, KintaroButton3,
  KintaroButtonAccent1, KintaroButtonAccent2, KintaroButtonAccent3,
  KintaroButtonSuccess1, KintaroButtonSuccess2, KintaroButtonSuccess3,
  KintaroButtonError1, KintaroButtonError2, KintaroButtonError3,
  KintaroButtonClose,
  KintaroDescription, KintaroModal
} from 'kintaro-ui/src';

import overlay from '/2.png'

import { useState } from 'react';

import './App.css'

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className='kintaro-ui-container'>
      <div className="kintaro-ui-hero">
        <div className="hero-main">
          <KintaroTitle1 title={"Kintaro UI Components"} />
          <KintaroDescription
            text={"npm install git+https://github.com/xkintaro/kintaro-ui.git"}
          />
          <div className="kwherobtns">
            <KintaroButton2 title={"Discord"}
              onClick={() => window.open("https://discord.com/invite/NSQk27Zdkv", "_blank")}
            />
            <KintaroButtonAccent2 title={"GitHub"}
              onClick={() => window.open("https://github.com/xkintaro", "_blank")}
            />
          </div>
        </div>
        <img src={overlay} alt="" className="hero-overlay" />
      </div>

      <div class="gothic-divider">
        <div class="side-ornament left">✘ ✘ ✘</div>
        <div class="side-ornament right">✘ ✘ ✘</div>
      </div>

      <div className="kw-ui">
        <div className="ui-group-head">
          <KintaroTitle2 title={"Kintaro TextBox Components"} />
          <KintaroDescription
            text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
          />
        </div>
        <div className="ui-group">
          <div className="kintaro-ui-item">
            <div className="item-head">
              <KintaroTitle2 title={"<KintaroTextBox1 />"} />
              <div className="item-prop">
                <KintaroButton2 title={"title"} />
                <KintaroButton2 title={"value"} />
                <KintaroButton2 title={"onChange"} />
                <KintaroButton2 title={"type"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroTextBox1 title={"Text Here"} />
            </div>
          </div>
          <div className="kintaro-ui-item">
            <div className="item-head">
              <KintaroTitle2 title={"<KintaroTextBox2 />"} />
              <div className="item-prop">
                <KintaroButton2 title={"title"} />
                <KintaroButton2 title={"value"} />
                <KintaroButton2 title={"onChange"} />
                <KintaroButton2 title={"type"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroTextBox2 title={"Text Here"} />
            </div>
          </div>
          <div className="kintaro-ui-item">
            <div className="item-head">
              <KintaroTitle2 title={"<KintaroTextBox3 />"} />
              <div className="item-prop">
                <KintaroButton2 title={"title"} />
                <KintaroButton2 title={"value"} />
                <KintaroButton2 title={"onChange"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroTextBox3 title={"Text Here"} />
            </div>
          </div>
        </div>
      </div>

      <div class="gothic-divider">
        <div class="side-ornament left">✘ ✘ ✘</div>
        <div class="side-ornament right">✘ ✘ ✘</div>
      </div>

      <div className="kw-ui">
        <div className="ui-group-head">
          <KintaroTitle2 title={"Kintaro Button Components"} />
          <KintaroDescription
            text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
          />
        </div>
        <div className="ui-group">
          <div className="kintaro-ui-item">
            <div className="item-head">
              <KintaroTitle2 title={"<KintaroButton1 />"} />
              <div className="item-prop">
                <KintaroButton2 title={"title"} />
                <KintaroButton2 title={"onClick"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroButton1 title={"Kintaro Button"} />
              <KintaroButton2 title={"Kintaro Button"} />
              <KintaroButton3 title={"Kintaro Button"} />
            </div>
          </div>
          <div className="kintaro-ui-item">
            <div className="item-head">
              <KintaroTitle2 title={"<KintaroButtonAccent1 />"} color={'var( --kintaro-accent-color-1)'} />
              <div className="item-prop">
                <KintaroButton2 title={"title"} />
                <KintaroButton2 title={"onClick"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroButtonAccent1 title={"Kintaro Button"} />
              <KintaroButtonAccent2 title={"Kintaro Button"} />
              <KintaroButtonAccent3 title={"Kintaro Button"} />
            </div>
          </div>
          <div className="kintaro-ui-item">
            <div className="item-head">
              <KintaroTitle2 title={"<KintaroButtonSuccess1 />"} color={'var( --kintaro-success-color)'} />
              <div className="item-prop">
                <KintaroButton2 title={"title"} />
                <KintaroButton2 title={"onClick"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroButtonSuccess1 title={"Kintaro Button"} />
              <KintaroButtonSuccess2 title={"Kintaro Button"} />
              <KintaroButtonSuccess3 title={"Kintaro Button"} />
            </div>
          </div>
          <div className="kintaro-ui-item">
            <div className="item-head">
              <KintaroTitle2 title={"<KintaroButtonError1 />"} color={'var( --kintaro-error-color)'} />
              <div className="item-prop">
                <KintaroButton2 title={"title"} />
                <KintaroButton2 title={"onClick"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroButtonError1 title={"Kintaro Button"} />
              <KintaroButtonError2 title={"Kintaro Button"} />
              <KintaroButtonError3 title={"Kintaro Button"} />
            </div>
          </div>
          <div className="kintaro-ui-item">
            <div className="item-head">
              <KintaroTitle2 title={"<KintaroButtonClose />"} />
              <div className="item-prop">
                <KintaroButton2 title={"title"} />
                <KintaroButton2 title={"onClick"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroButtonClose title={"Kapat"} />
            </div>
          </div>
        </div>
      </div>

      <div class="gothic-divider">
        <div class="side-ornament left">✘ ✘ ✘</div>
        <div class="side-ornament right">✘ ✘ ✘</div>
      </div>

      <div className="kw-ui">
        <div className="ui-group-head">
          <KintaroTitle2 title={"Kintaro Other Components"} />
          <KintaroDescription
            text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
          />
        </div>
        <div className="ui-group">
          <div className="kintaro-ui-item">
            <div className="item-head">
              <KintaroTitle2 title={"<KintaroTitle1 />"} />
              <div className="item-prop">
                <KintaroButton2 title={"title"} />
                <KintaroButton2 title={"color"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroTitle1 title={"Kintaro Title 1"} />
              <KintaroTitle2 title={"Kintaro Title 2"} />
              <KintaroTitle3 title={"Kintaro Title 3"} />
            </div>
          </div>
          <div className="kintaro-ui-item">
            <div className="item-head">
              <KintaroTitle2 title={"<KintaroDescription />"} />
              <div className="item-prop">
                <KintaroButton2 title={"text"} />
                <KintaroButton2 title={"maxLength"} />
                <KintaroButton2 title={"showToggleButton"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroDescription
                text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"}
                maxLength={"50"}
                showToggleButton={true} />
            </div>
          </div>
          <div className="kintaro-ui-item">
            <div className="item-head">
              <KintaroTitle2 title={"<KintaroModal />"} />
              <div className="item-prop">
                <KintaroButton2 title={"children"} />
                <KintaroButton2 title={"isOpen"} />
                <KintaroButton2 title={"onClose"} />
                <KintaroButton2 title={"title"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroButton1 title={"Open Modal"} onClick={() => setModalVisible(true)} />
              <KintaroModal
                isOpen={modalVisible}
                onClose={() => setModalVisible(false)}
                title={"Kintaro Modal"}
              >                <KintaroDescription
                  text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
                />
              </KintaroModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
