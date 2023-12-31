import { Fragment } from "react";
import Headroom from "react-headroom";
import { Helmet } from "react-helmet";
import Icon from "@mdi/react";
import { mdiArrowRightThin } from "@mdi/js";
import Footer from "../components/Footer";
import Header from "./Header";

export default function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>HelpMeOut - Home</title>
      </Helmet>

      <div className={`font-sora `}>
        <Headroom>
          <Header />
        </Headroom>

        <main className="">
          <div className="md:px-[80px] px-16 border-b-[30px] py-[70px] md:pt-[130px] flex flex-col md:flex-row md:justify-between items-center">
            <div className="max-w-[35rem] w-[100%]">
              <h1 className="font-bold text-[40px] md:text-[4rem] leading-tight font-[Sora] text-center m-auto md:text-left w-[100%] ">
                Show Them Don&apos;t just tell{" "}
              </h1>
              <p className="text-[1.2rem] text-[ rgba(0, 0, 0, 0.75)] md:text-left w-full py-6 leading-8 ">
                Help your friends and loved ones by creating and sending videos
                on how to get things done on a website.
              </p>
              <button className="text-[14px] flex items-center m-auto md:m-0 text-white bg-[#120b48] hover:bg-[#605c84] hover:shadow-xl hover:duration-700 py-[1.38rem] px-6 rounded-[0.5rem] ">
                <a
                  href="https://drive.google.com/drive/folders/1SCjSqhZXxS-QnEzO7vnXyOCRd7hfJTQp"
                  className="font-['Work_Sans'] text-[1.125rem]"
                  target="_blank" rel="noreferrer"
                >
                  Install HelpMeOut
                </a>
                <Icon
                  path={mdiArrowRightThin}
                  size={2}
                  className="inline pl-4"
                />
              </button>
            </div>

            <div className="mt-[100px] md:mt-0 ">
              <div className="grid grid-cols-2">
                <div className="pr-2">
                  <img src='./grandma.webp' alt="Grandma" className="pb-6 pl-10  " />
                  <div className="relative">
                    <img src='./belowdots.svg' alt="Below Dots" className="" />
                    <img
                      src='./kidandfather.webp'
                      alt="Kid and Father"
                      className="absolute inset-y-0 pl-8 "
                    />
                  </div>
                </div>
                <div className="relative mt-[-57px]">
                  <img
                    src='./updots.svg'
                    alt="Up dots"
                    className="md:ml-16 sm:ml-8 "
                  />
                  <img
                    src='./prettylady.webp'
                    alt="Pretty Lady"
                    className="absolute inset-y-0 pt-20 pr-10 "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:px-[80px] px-16 pt-20 pb-[70px]border-b-[30px]">
            <div className="text-center">
              <p
                id="features"
                className="text-[#141414] sm:text-4xl text-2xl pb-8 font-bold "
              >
                Features
              </p>
              <p className="text-[#535353] pb-20 ">
                Key Highlights of Our Extension
              </p>
            </div>
            <div className=" md:flex md:justify-between">
              <div className="md:pt-[70px]">
                <div className="flex flex-col justify-center items-center text-center md:items-start md:justify-start md:text-justify md:flex-row">
                  <div>
                    <img src='./circle.jpg' alt="Circle Icon" />
                  </div>
                  <div className="pt-5 md:pl-6 sm:pt-3 ">
                    <h2 className="font-bold text-xl md:text-2xl text-[#1B233D] pb-3 ">
                      Simple Screen Recording
                    </h2>
                    <p className="text-[#535353] w-[275px] md:w-[300px] text-sm md:text-[13px] leading-8 ">
                      Effortless screen recording for everyone. Record with
                      ease, no tech expertise required.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center md:items-start md:justify-start md:text-justify md:flex-row my-8 md:my-10">
                  <div>
                    <img src='./share.jpg' alt="Share Icon" />
                  </div>
                  <div className="pt-5 md:pl-6 md:pt-3 ">
                    <h2 className="font-bold text-xl md:text-2xl text-[#1B233D] pb-3 ">
                      Easy-to-Share URL
                    </h2>
                    <p className="text-[#535353] w-[275px] md:w-[300px] text-sm md:text-[13px] leading-8  ">
                      Share your recordings instantly with a single link. No
                      attachments, no downloads.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center md:items-start md:justify-start md:text-justify md:flex-row">
                  <div>
                    <img src='./visit.jpg' alt="Visit Icon" />
                  </div>
                  <div className="pt-5 md:pl-6 md:pt-3">
                    <h2 className="font-bold text-xl md:text-2xl text-[#1B233D] pb-3 ">
                      Revisit Recordings
                    </h2>
                    <p className="text-[#535353] w-[275px] md:w-[300px] text-sm md:text-[13px] leading-8 ">
                      Access and review your past content effortlessly. Your
                      recordings, always at your fingertips.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-20 md:mt-0">
                <img src='./videodemo.svg' alt="Video Demo" />
              </div>
            </div>
          </div>

          <div className="md:px-[80px] px-16 py-[70px]">
            <h3
              id="work"
              className="text-[#120b48] text-2xl sm:text-3xl text-center pb-[50px] font-bold"
            >
              How It Works
            </h3>
            <div className="md:grid md:grid-cols-3 md:gap-10">
              <div className="flex flex-col justify-center items-center text-center">
                <img src='./one.jpg' alt="Icon one" className="" />
                <h5 className="text-xl font-bold py-6 text-[#120b48]">
                  Record Screen
                </h5>
                <p className="text-[#535353] pb-8 w-[225px]">
                  Click the &quot;Start Recording&quot; button in our extension.
                  choose which part of your screen to capture and who you want
                  to send it to.
                </p>
                <img src='./rec.jpg' alt="Rec Image" />
              </div>
              <div className="flex flex-col justify-center items-center text-center py-10 md:py-0 ">
                <img src='./two.jpg' alt="Icon one" />
                <h5 className="text-xl font-bold py-6 text-[#120b48]">
                  Share Your Recording
                </h5>
                <p className="text-[#535353] w-[225px] pb-8">
                  We generate a shareable link for your video. Simply send it to
                  your audience via email or copy the link to send via any
                  platform.
                </p>
                <img src='./rec.jpg' alt="Rec Image" />
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <img src='./three.jpg' alt="Icon one" />
                <h5 className="text-xl font-bold py-6 text-[#120b48]">
                  Learn Effortlessly
                </h5>
                <p className="text-[#535353] w-[225px] pb-8">
                  Recipients can access your video effortlessly through the
                  provided link, with our user-friendly interface suitable for
                  everyone.
                </p>
                <img src='./rec.jpg' alt="Rec Image" />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
}
