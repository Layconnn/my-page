import { Link } from "react-router-dom";
import { AppHomeHeader } from "./AppHomeHeader";
import { BiSearch } from "react-icons/bi";

export const WebHome = () => {
  return (
    <>
      <div className="home_container ">
        <AppHomeHeader />
        <div className="web_home_main">
          <div className="web_home_main_inner container_main">
            <div className="web_hero">
              <div className="web_hero_inner">
                <div className="web_hero_left">
                  <h3>Hello, John Mark</h3>
                  <p>Here are your recorded videos</p>
                </div>

                <div className="web_hero_right">
                  <div className="web_hero_right_inner">
                    <span>
                      <BiSearch />
                    </span>

                    <input
                      type="text"
                      placeholder="Search for a particular video"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="line_light"></div>
            <div className="recent_files">
              <div className="recent_files_inner">
                <h3>Recent Files</h3>

                <div className="recent_files_flexbox">
                  <div className="recent_files_flexbox_inner">

                    <Link to={"/apphome"}>
                      <div className="file_box">
                        <div className="file_box_inner">
                          <div className="file_box_tp">
                            <img src='./video_frame.jpg' alt="video-image" />
                          </div>

                          <div className="file_box_bottom">
                            <div className="file_box_bottom_inner">
                              <div className="file_box_bottom_left">
                                <h5>How to create Facebook Ad listing</h5>

                                <p>SEPTEMBER 23, 2023</p>
                              </div>

                              <div className="file_box_bottom_right">
                                <img src='./link_icon.svg' alt="icon" />
                                <img src='./more_icon.svg' alt="icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <Link to={"/apphome"}>
                      <div className="file_box">
                        <div className="file_box_inner">
                          <div className="file_box_top">
                            <img src='./video_frame.jpg' alt="video-image" />
                          </div>

                          <div className="file_box_bottom">
                            <div className="file_box_bottom_inner">
                              <div className="file_box_bottom_left">
                                <h5>How to create Facebook Ad listing</h5>

                                <p>SEPTEMBER 23, 2023</p>
                              </div>

                              <div className="file_box_bottom_right">
                                <img src='./link_icon.svg' alt="icon" />
                                <img src='./more_icon.svg' alt="icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to={"/apphome"}>
                      <div className="file_box">
                        <div className="file_box_inner">
                          <div className="file_box_tp">
                            <img src='./video_frame.jpg' alt="video-image" />
                          </div>

                          <div className="file_box_bottom">
                            <div className="file_box_bottom_inner">
                              <div className="file_box_bottom_left">
                                <h5>How to create Facebook Ad listing</h5>

                                <p>SEPTEMBER 23, 2023</p>
                              </div>

                              <div className="file_box_bottom_right">
                                <img src='./link_icon.svg' alt="icon" />
                                <img src='./more_icon.svg' alt="icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <Link to={"/apphome"}>
                      <div className="file_box">
                        <div className="file_box_inner">
                          <div className="file_box_tp">
                            <img src='./video_frame.jpg' alt="video-image" />
                          </div>

                          <div className="file_box_bottom">
                            <div className="file_box_bottom_inner">
                              <div className="file_box_bottom_left">
                                <h5>How to create Facebook Ad listing</h5>

                                <p>SEPTEMBER 23, 2023</p>
                              </div>

                              <div className="file_box_bottom_right">
                                <img src='./link_icon.svg' alt="icon" />
                                <img src='./more_icon.svg' alt="icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
