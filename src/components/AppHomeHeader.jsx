import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

export const AppHomeHeader = () => {
  return (
    <>
      <div className="app_home_header container_main">
        <div className="app_home_header_inner">
          <Link className="app_home_header_left" to={"/"}>
            <img src='./logo_icon.svg' alt="logo" />
            <span>HelpMeOut</span>
          </Link>

          <div className="app_home_header_right">
            <div className="app_home_header_right_inner">
              <img src='./placeholder_img.svg' className="user_image"></img>

              <p className="user_name">
                John Mark
                <span>
                  <BsChevronDown />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
