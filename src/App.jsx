import 'kintaro-ui/src/root.css';
import {
  KintaroTitle1, KintaroTitle2, KintaroTitle3,
  KintaroTextBox1, KintaroTextBox2, KintaroTextBox3,
  KintaroButton1, KintaroButton2, KintaroButton3, KintaroButton4,
  KintaroButtonClose,
  KintaroDescription, KintaroModal, KintaroFooter,
  KintaroDivider1, KintaroAudioPlayer
} from 'kintaro-ui/src';

import overlay from '/2.png'

import { useState, useEffect } from 'react';

import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import './App.css'

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const [text, setText] = useState("");
  const [textAudioPlayer, setTextAudioPlayer] = useState("");

  useEffect(() => {
    fetch("/kintaro-ui-preview/footer-code.txt")
      .then((res) => res.text())
      .then((data) => setText(data));
  }, []);


  useEffect(() => {
    fetch("/kintaro-ui-preview/audio-player-code.txt")
      .then((res) => res.text())
      .then((data) => setTextAudioPlayer(data));
  }, []);


  return (
    <div className='kintaro-ui-container'>

      <KintaroAudioPlayer

        playerTitle="Kintaro Player"
        audioBasePath="/audio-player/audio/"
        imageBasePath="/audio-player/image/"

        songs={[
          {
            title: "Dont care",
            file: "2.mp3",
            image: "1.jpg",
            artist: "Violent Vira",

          }, {
            title: "Saccharine",
            file: "3.mp4",
            image: "2.jpg",
            artist: "Violent Vira",

          },
          {
            title: "Nanatsu no taizai, ban and elaine perfect theme",
            file: "1.mp3",
            artist: "Unknown",

          }
        ]}
      />


      <div className="kintaro-ui-hero">
        <div className="hero-main">
          <KintaroTitle1 title={"Kintaro UI Components"} />
          <KintaroDescription
            text={"npm install git+https://github.com/xkintaro/kintaro-ui.git"}
          />
          <div className="kwherobtns">
            <KintaroButton1 title={"Discord"}
              onClick={() => window.open("https://discord.com/invite/NSQk27Zdkv", "_blank")}
            />
            <KintaroButton2 title={"GitHub"} borderColor='var(--kintaro-accent-color-1)'
              onClick={() => window.open("https://github.com/xkintaro", "_blank")}
            />
          </div>
        </div>
        <img src={overlay} alt="" className="hero-overlay" />
      </div>

      <KintaroDivider1 />

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
                <KintaroButton3 title={"title"} />
                <KintaroButton3 title={"value"} />
                <KintaroButton3 title={"onChange"} />
                <KintaroButton3 title={"type"} />
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
                <KintaroButton3 title={"title"} />
                <KintaroButton3 title={"value"} />
                <KintaroButton3 title={"onChange"} />
                <KintaroButton3 title={"type"} />
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
                <KintaroButton3 title={"title"} />
                <KintaroButton3 title={"value"} />
                <KintaroButton3 title={"onChange"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroTextBox3 title={"Text Here"} />
            </div>
          </div>
        </div>
      </div>

      <KintaroDivider1 />

      <div className="kw-ui">
        <div className="ui-group-head">
          <KintaroTitle2 title={"Kintaro Button Components"} />
          <KintaroDescription
            text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
          />
        </div>
        <div className="ui-group">
          <div className="kintaro-ui-item">
            <div className="item-head" style={{ display: 'block' }}>
              <KintaroTitle2 title={"<KintaroButton1 />"} />
              <div className="item-prop" style={{ marginTop: '1rem' }}>
                <KintaroButton3 title={"title"} />
                <KintaroButton3 title={"onClick"} />
                <KintaroButton3 title={"color"} />
                <KintaroButton3 title={"width"} />
                <KintaroButton3 title={"bgColor"} />
                <KintaroButton3 title={"hoverColor"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroButton1 title={"Kintaro Button"} />
            </div>
          </div>

          <div className="kintaro-ui-item">
            <div className="item-head" style={{ display: 'block' }}>
              <KintaroTitle2 title={"<KintaroButton2 />"} />
              <div className="item-prop" style={{ marginTop: '1rem' }}>
                <KintaroButton3 title={"title"} />
                <KintaroButton3 title={"onClick"} />
                <KintaroButton3 title={"width"} />
                <KintaroButton3 title={"color"} />
                <KintaroButton3 title={"borderColor"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroButton2 title={"Kintaro Button"} />
            </div>
          </div>

          <div className="kintaro-ui-item">
            <div className="item-head" style={{ display: 'block' }}>
              <KintaroTitle2 title={"<KintaroButton3 />"} />
              <div className="item-prop" style={{ marginTop: '1rem' }}>
                <KintaroButton3 title={"title"} />
                <KintaroButton3 title={"onClick"} />
                <KintaroButton3 title={"width"} />
                <KintaroButton3 title={"color"} />
                <KintaroButton3 title={"bgColor"} />
                <KintaroButton3 title={"hoverColor"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroButton3 title={"Kintaro Button"} />
            </div>
          </div>

          <div className="kintaro-ui-item">
            <div className="item-head" style={{ display: 'block' }}>
              <KintaroTitle2 title={"<KintaroButton4 />"} />
              <div className="item-prop" style={{ marginTop: '1rem' }}>
                <KintaroButton3 title={"title"} />
                <KintaroButton3 title={"onClick"} />
                <KintaroButton3 title={"color"} />
                <KintaroButton3 title={"hoverColor"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroButton4 title={"Kintaro Button"} />
            </div>
          </div>

          <div className="kintaro-ui-item">
            <div className="item-head">
              <KintaroTitle2 title={"<KintaroButtonClose />"} />
              <div className="item-prop">
                <KintaroButton3 title={"title"} />
                <KintaroButton3 title={"onClick"} />
              </div>
            </div>
            <div className="item-main">
              <KintaroButtonClose title={"Kapat"} />
            </div>
          </div>
        </div>
      </div>

      <KintaroDivider1 />

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
                <KintaroButton3 title={"title"} />
                <KintaroButton3 title={"color"} />
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
                <KintaroButton3 title={"text"} />
                <KintaroButton3 title={"maxLength"} />
                <KintaroButton3 title={"showToggleButton"} />
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
                <KintaroButton3 title={"children"} />
                <KintaroButton3 title={"isOpen"} />
                <KintaroButton3 title={"onClose"} />
                <KintaroButton3 title={"title"} />
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

      <KintaroDivider1 />

      <div className="kw-ui">
        <div className="ui-group-head">
          <KintaroTitle2 title={"Kintaro Aesthetic Components"} />
          <KintaroDescription
            text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
          />
        </div>
        <div className="ui-group">
          <div className="kintaro-ui-item w100itemm-ui">
            <div className="item-head">
              <KintaroTitle2 title={"<KintaroDivider1 />"} />
            </div>
            <div className="item-main ffsfdsfs-ui">
              <KintaroDivider1 />
            </div>
          </div>
        </div>
      </div>




      <div className="kw-ui-footer">

        <div className="ui-group-head">
          <KintaroTitle2 title={"Kintaro Audio Player Component Code"} />
          <KintaroDescription
            text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
          />
        </div>

        <div className="footer-code-kw-ui">
          <pre>
            <code>{textAudioPlayer}</code>
          </pre>
        </div>


      </div>


      <div className="kw-ui-footer">

        <div className="ui-group-head">
          <KintaroTitle2 title={"Kintaro Footer Component Code"} />
          <KintaroDescription
            text={"This is a collection of Kintaro UI components. You can use these components in your React applications."}
          />
        </div>

        <div className="footer-code-kw-ui">
          <pre>
            <code>{text}</code>
          </pre>
        </div>

        <KintaroFooter
          title="My Custom Footer"
          description="Explore more about our services, resources, and company."
          copyrightText="© 2025 My Company. All rights reserved."
          sections={[
            {
              title: "Services",
              links: [
                { text: "Web Development", url: "" },
                { text: "Mobile Applications", url: "" },
                { text: "UI/UX Design", url: "" },
                { text: "Cloud Hosting", url: "" }
              ]
            },
            {
              title: "Resources",
              links: [
                { text: "Documentation", url: "" },
                { text: "API Reference", url: "" },
                { text: "Developer Tools", url: "" },
                { text: "Code Samples", url: "" }
              ]
            },
            {
              title: "Company",
              links: [
                { text: "About Us", url: "" },
                { text: "Careers", url: "" },
                { text: "Press & Media", url: "" },
                { text: "Partners", url: "" }
              ]
            },
            {
              title: "Support",
              links: [
                { text: "Help Center", url: "" },
                { text: "Community Forum", url: "" },
                { text: "Status Page", url: "" },
                { text: "Contact Support", url: "" }
              ]
            }
          ]}
          socialIcons={[
            { icon: <FaGithub />, url: "https://github.com" },
            { icon: <FaTwitter />, url: "https://twitter.com" },
            { icon: <FaInstagram />, url: "https://instagram.com" },
            { icon: <IoIosMail />, url: "mailto:contact@example.com" }
          ]}
        />
      </div>
    </div >
  )
}

export default App
