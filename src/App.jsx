import 'kintaro-ui/src/root.css';
import {
  KintaroDivider1
} from 'kintaro-ui/src';

import './App.css'

import Hero from './layout/hero';

import TextBox from './components/textbox';
import Button from './components/button';
import CheckBox from './components/checkbox';
import Title from './components/title';
import Description from './components/description';
import Modal from './components/modal';
import Divider from './components/divider';
import AudioPlayer from './components/audioplayer';
import Footer from './components/footer';

function App() {

  return (
    <div className='kintaro-ui-container'>

      <Hero />

      <KintaroDivider1 />

      <TextBox />

      <KintaroDivider1 />

      <Button />

      <KintaroDivider1 />

      <CheckBox />

      <KintaroDivider1 />

      <Title />

      <KintaroDivider1 />

      <Description />

      <KintaroDivider1 />

      <Modal />

      <KintaroDivider1 />

      <Divider />

      <AudioPlayer />

      <Footer />

    </div >
  )
}

export default App
