// import React from 'react'

// function VideoPage() {
//   return (
//     <>
//     <header className="flex justify-between px-20 py-10 max-[700px]:px-4">
//         <img src="./images/helplogo.svg" alt="logo" />
//         <nav className="flex w-[60%] items-center justify-between max-[700px]:hidden">
//             <div>
//                 <ul className="flex gap-10">
//                     <li><a href="#">Features</a></li>
//                     <li><a href="#">How it Works</a></li>
//                 </ul>
//             </div>
//             <div>
//                 <ul>
//                     <li>
//                         <a href="#" className="text-[#120B48] font-bold">Get Started</a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//         <div className="min-[700px]:hidden">
//             <i className="fas fa-bars"></i>
//         </div>
//     </header>
//     <section className="px-20 py-10 flex gap-12 max-[883px]:flex-col max-[700px]:px-4">
//         <div className="flex flex-col w-[50%] gap-10 max-[883px]:w-full">
//             <h1 className="font-bold text-[42px]">Your video is ready!</h1>
//             <div>
//                 <p>Name</p>
//                 <div className="flex">
//                     <input type="text" className="outline-none w-full" value="Untitled_Video_20232509" id="editInput" disabled />
//                     <img src="./images/edit.svg" alt="edit"  />
//                 </div>
//             </div>
//             <div>
              
//                 <div className="flex bg-[#E7E7ED] rounded-[10px] p-2 justify-between">
//                     <input type="text" className="outline-none w-full bg-transparent" placeholder="Enter email of receiver" />
//                     <img src="./images/Button.svg" alt="edit"  />
//                 </div>
//             </div>
//             <div>
//                 <h2 className="font-bold text-[28px]">Video Url</h2>
//                 <div className="flex justify-between gap-4 bg-[#E7E7ED] rounded-[10px] p-2 items-center text-[#4B4B4B]">
//                     <input type="text" className="outline-none w-full"  value="https://www.helpmeout/Untitled_Video_20232509" id="editInput" disabled />
//                     <img src="./images/copy.svg" alt="edit" />
//                 </div>
//             </div>
//             <div>
//                 <h3 className="font-bold">Share your video</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                     <img src="./images/facebookk.svg" alt="edit" />
//                     <img src="./images/whatsapp.svg" alt="edit" />
//                     <img src="./images/telegram.svg" alt="edit" />
//                 </div>
//             </div>
//         </div>
//         <div className="w-[50%] border border-l-slate-400 p-4 flex flex-col gap-14 max-[883px]:w-full">
//             <div className="rounded-['8px'] border-[2px] rounded-[10px]">
//                 <div className="h-[20em] bg-sky-300">
//                     <video id="videoPlayer" className="w-full h-full object-cover">
                       
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//                 <div className="bg-[#141414] w-[30%] h-[4px]"></div>
//                 <div className="flex justify-between items-center py-4 px-10 max-[400px]:px-2">
//                     <p id="currentTime" className="max-[427px]:text-[12px]">0:00</p>
//                     <div className="flex gap-4 max-[427px]:gap-2">
//                         <div className="flex flex-col justify-center items-center">
//                             <img src="./images/play-circle.svg" alt="" className="w-[2em] h-[2em] max-[427px]:w-[1em]"  />
//                             <p className="max-[427px]:text-[12px]">Play</p>
//                         </div>
//                         <div className="flex flex-col justify-center items-center">
//                             <img src="./images/volume-high.svg" alt="" className="w-[2em] h-[2em] max-[427px]:w-[1em]" />
//                             <p className="max-[427px]:text-[12px]">Volume</p>
//                         </div>
//                         <div className="flex flex-col justify-center items-center">
//                             <img src="./images/setting-2.svg" alt="" className="w-[2em] h-[2em] max-[427px]:w-[1em]" />
//                             <p className="max-[427px]:text-[12px]">Settings</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
                

//             <div>
//                 <h2 className="font-bold text-[24px]">Transcript</h2>
//                 <select name="lang" id="" className="p-2 w-[30%] rounded bg-transparent border">
//                     <option value="English">English</option>
//                     <option value="Spanish">Spanish</option>
//                     <option value="French">French</option>
//                 </select>
//                 <div className="mt-12 max-h-[14em] overflow-auto flex flex-col gap-4">
//                     <div className="flex gap-4">
//                         <p>0.01</p>
//                         <p>
//                             First step. Open Facebook on your desktop or mobile device and
//                             locate "Marketplace" in the left-hand menu or at the top of the
//                         </p>
//                     </div>
//                     <div className="flex gap-4">
//                         <p>0.15</p>
//                         <p>
//                             First step. Open Facebook on your desktop or mobile device and
//                             locate "Marketplace" in the left-hand menu or at the top of the
//                         </p>
//                     </div>
//                     <div className="flex gap-4">
//                         <p>0.30</p>
//                         <p>
//                             First step. Open Facebook on your desktop or mobile device and
//                             locate "Marketplace" in the left-hand menu or at the top of the
//                         </p>
//                     </div>
//                     <div className="flex gap-4">
//                         <p>1.00</p>
//                         <p>
//                             First step. Open Facebook on your desktop or mobile device and
//                             locate "Marketplace" in the left-hand menu or at the top of the
//                         </p>
//                     </div>
//                     <div className="flex gap-4">
//                         <p>0.01</p>
//                         <p>
//                             First step. Open Facebook on your desktop or mobile device and
//                             locate "Marketplace" in the left-hand menu or at the top of the
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//     <section>
//         <div className="margin-center w-[60%] flex flex-col justify-center gap-8 max-[700px]:w-full">
//             <h2 className="text-[32px] font-bold text-center">
//                 To ensure the availability and privacy of your video, we recommend
//                 saving it to your account.
//             </h2>
//             <div>
//                 <img className="margin-center" src="./images/savevid.svg" alt="" />
//             </div>
//             <div>
//                 <p className="text-center text-[#7E7E7E] font-bold text-[24px]">Don’t have an account? <span className="text-[#120B48]"><a href="#" className="underline">Create account</a></span></p>
//             </div>
//         </div>
//     </section>
//     <footer className="bg-[#120B48] p-20 text-[#fff] grid grid-cols-1 sm:grid-cols-2 mt-20 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         <div>
//             <img src="./images/footerlogo.svg" alt="logo" />
//         </div>
//         <div className="flex flex-col gap-6">
//             <h6 className="font-bold">Menu</h6>
//             <ul className="flex flex-col gap-6">
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">Converter</a></li>
//                 <li><a href="#">How it Works</a></li>
//             </ul>
//         </div>
//         <div className="flex flex-col gap-6">
//             <h6 className="font-bold">About us</h6>
//             <ul className="flex flex-col gap-6">
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Contact Us</a></li>
//                 <li><a href="#">Privacy Policy</a></li>
//             </ul>
//         </div>
//         <div className="flex flex-col gap-6">
//             <h6 className="font-bold">Screen Record</h6>
//             <ul className="flex flex-col gap-6">
//                 <li><a href="#">Browser Window</a></li> 
//                 <li><a href="#">Desktop</a></li>
//                 <li><a href="#">Application</a></li>
//             </ul>
//         </div>
//     </footer>
//     </>
//   )
// }

// export default VideoPage

import React from 'react';
import '../styles/styles.scss' 

function VideoPage() {
  return (
    <>
      <header className="custom-header">
        <img src="./images/helplogo.svg" alt="logo" />
        <nav className="custom-nav">
          <div>
            <ul className="custom-ul">
              <li><a href="#">Features</a></li>
              <li><a href="#">How it Works</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="#" className="custom-get-started">Get Started</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="custom-bars">
          <i className="fas fa-bars"></i>
        </div>
      </header>
      <section className="custom-section">
        <div className="custom-left">
          <h1 className="custom-heading">Your video is ready!</h1>
          <div className="custom-input">
            <p>Name</p>
            <div className="custom-input-container">
              <input type="text" className="custom-input-field" value="Untitled_Video_20232509" id="editInput" disabled />
              <img src="./images/edit.svg" alt="edit" onClick={editName} />
            </div>
          </div>
          <div className="custom-input">
            <div className="custom-input-container-bg">
              <input type="text" className="custom-input-field-bg" placeholder="Enter email of receiver" />
              <img src="./images/Button.svg" alt="edit" onClick={sendToMail} />
            </div>
          </div>
          <div className="custom-url">
            <h2 className="custom-url-heading">Video Url</h2>
            <div className="custom-url-container">
              <input type="text" className="custom-url-field" value="https://www.helpmeout/Untitled_Video_20232509" id="editInput" disabled />
              <img src="./images/copy.svg" alt="edit" onClick={copyUrl} />
            </div>
          </div>
          <div className="custom-share">
            <h3 className="custom-share-heading">Share your video</h3>
            <div className="custom-share-icons">
              <img src="./images/facebookk.svg" alt="edit" />
              <img src="./images/whatsapp.svg" alt="edit" />
              <img src="./images/telegram.svg" alt="edit" />
            </div>
          </div>
        </div>
        <div className="custom-right">
          <div className="custom-video">
            <div className="custom-video-container">
              <video id="videoPlayer" className="custom-video-player">
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="custom-progress-bar"></div>
            <div className="custom-controls">
              <p id="currentTime" className="custom-current-time">0:00</p>
              <div className="custom-control-buttons">
                <div className="custom-control-button">
                  <img src="./images/play-circle.svg" alt="" className="custom-control-icon" onClick={togglePlay} />
                  <p className="custom-control-text">Play</p>
                </div>
                <div className="custom-control-button">
                  <img src="./images/volume-high.svg" alt="" className="custom-control-icon" />
                  <p className="custom-control-text">Volume</p>
                </div>
                <div className="custom-control-button">
                  <img src="./images/setting-2.svg" alt="" className="custom-control-icon" />
                  <p className="custom-control-text">Settings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-transcript">
            <h2 className="custom-transcript-heading">Transcript</h2>
            <select name="lang" id="" className="custom-language-select">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
            <div className="custom-transcript-scroll">
              <div className="custom-transcript-item">
                <p>0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of the
                </p>
              </div>
              <div className="custom-transcript-item">
                <p>0.15</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of the
                </p>
              </div>
              <div className="custom-transcript-item">
                <p>0.30</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of the
                </p>
              </div>
              <div className="custom-transcript-item">
                <p>1.00</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of the
                </p>
              </div>
              <div className="custom-transcript-item">
                <p>0.01</p>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of the
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="custom-save">
          <h2 className="custom-save-heading">
            To ensure the availability and privacy of your video, we recommend
            saving it to your account.
          </h2>
          <div className="custom-save-image">
            <img className="custom-save-icon" src="./images/savevid.svg" alt="" />
          </div>
          <div>
            <p className="custom-save-text">Don’t have an account? <span className="custom-save-link"><a href="#" className="underline">Create account</a></span></p>
          </div>
        </div>
      </section>
      <footer className="custom-footer">
        <div className="custom-footer-logo">
          <img src="./images/footerlogo.svg" alt="logo" />
        </div>
        <div className="custom-footer-menu">
          <h6 className="custom-footer-heading">Menu</h6>
          <ul className="custom-footer-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Converter</a></li>
            <li><a href="#">How it Works</a></li>
          </ul>
        </div>
        <div className="custom-footer-about">
          <h6 className="custom-footer-heading">About us</h6>
          <ul className="custom-footer-list">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="custom-footer-screen-record">
          <h6 className="custom-footer-heading">Screen Record</h6>
          <ul className="custom-footer-list">
            <li><a href="#">Browser Window</a></li> 
            <li><a href="#">Desktop</a></li>
            <li><a href="#">Application</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default VideoPage;
