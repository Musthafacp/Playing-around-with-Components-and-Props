import './App.css';
import GallaryFooter from './components/GallaryFooter';
import {Body} from './components/GalleryBody';
import {Header} from './components/GalleryHeader';

import { imageData } from './components/ImageData';



function App() {
  return (
    <>
      <Header/>
      <Body props= {imageData}/>
      <GallaryFooter/> 
    </>
  )
}

export default App;
