import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/actions/auth";
import { ReactComponent as Logo } from "../../assets/img/logoAdmin.svg";
import { ReactComponent as ArrowDown } from "../../assets/img/Vector (1).svg";
import { ReactComponent as SearchIcon } from "../../assets/img/search.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as Announce } from "../../assets/icons/trumpet.svg";
import { ReactComponent as HandsWrite } from "../../assets/icons/handwrite.svg";
import { ReactComponent as Writes } from "../../assets/icons/writes.svg";
import { ReactComponent as MessagesIcon } from "../../assets/icons/msg2.svg";
import { ReactComponent as NotificationIcon } from "../../assets/img/Notification.svg";
import { ReactComponent as SortOut } from "../../assets/icons/sort-out.svg";
import { ReactComponent as HelpIcon } from "../../assets/icons/help.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/Property 1=ci_settings.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/Property 1=ic_baseline-log-out.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/userline.svg";
import { ReactComponent as SwitchIcon } from "../../assets/icons/switchref.svg";
import Notifications from "../notifications/Notifications";
import MobileMenu from "./MobileMenu";
import { WindowSharp } from "@mui/icons-material";

const NavBar = ({ filtersVisibility, filters }) => {
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [service, setService] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdownNote, setDropdownNote] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { loggedInUser, seller_profile } = useSelector((state) => state.user);
  // useEffect(() => {
  //   function handleScroll() {
  //     if (window.pageYOffset > 200) {
  //       setBackgroundColor("#FFF");
  //     } else {
  //       setBackgroundColor("transparent");
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // function filtersVisibility() {
  //   console.log(filters);
  //   // setFilters(!filters);
  // }

  return (
    <div className="nav_cont land_nav">
      <nav className="nav" style={{ backgroundColor: backgroundColor }}>
        <div className="logo" onClick={() => navigate("/")}>
          <Logo />
          {/* <label>MAE</label> */}
        </div>
        {/* <div className="searchland">
          <input type="search" className="search-input" placeholder="Search" />
          <button className="btn_col">
            
          </button>
        </div> */}
        <div
          className={`user_acct ${
            Object.keys(loggedInUser).length > 0 && "loggedInNav"
          }`}
        >
          <SearchIcon className="searchNavIcon" />
          <button className="btn_trans" onClick={() => setService(!service)}>
            Services <ArrowDown />
          </button>
          <Link to="/order-gig">Orders</Link>
          <HeartIcon onClick={() => navigate("/saved-gigs")} />
          {loggedInUser === undefined ||
            (Object.keys(loggedInUser).length === 0 && (
              <button className="btn_col" onClick={() => navigate("/signup")}>
                Login/Register
              </button>
            ))}
        </div>
        {Object.keys(loggedInUser).length > 0 && (
          <div className="rDashTopMenuItems">
            {/* <CartIcon onClick={() => setActiveMenu(5)} /> */}
            <MessagesIcon onClick={() => navigate("/seller-messages")} />
            <NotificationIcon onClick={() => setDropdownNote(!dropdownNote)} />
            {dropdownNote && <Notifications />}
            <button
              className="btn_trans"
              style={{ position: "relative", width: "fit-content", gap: 0 }}
            >
              {" "}
              {seller_profile?.img !== "" ? (
                <img className="" src={seller_profile?.img} />
              ) : (
                <span className="userIni initName initSmall">
                  {loggedInUser?.displayName?.charAt(0)?.toUpperCase()}
                </span>
              )}
              {/* <span className="">{"A"}</span> */}
              <ArrowDown onClick={() => setDropdown(!dropdown)} />
              {dropdown && (
                <div
                  className="mock_modal mock_new"
                  style={{
                    position: "absolute",
                    top: "63px",
                    left: "-114px",
                    width: "174px",
                    height: "260px",
                    borderRadius: "4px",
                  }}
                >
                  <ul
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "0px",
                      textAlign: "left",
                    }}
                  >
                    <li onClick={() => {}}>
                      {/* <img className="userIni" src={seller_profile?.img} /> */}
                      {seller_profile?.img !== "" ? (
                        <img className="" src={seller_profile?.img} />
                      ) : (
                        <span className="userIni initName initSmall">
                          {loggedInUser?.displayName?.charAt(0)?.toUpperCase()}
                        </span>
                      )}
                      <strong>
                        {seller_profile?.firstName +
                          " " +
                          seller_profile?.lastName}
                      </strong>
                    </li>
                    <li onClick={() => navigate("/seller-profile")}>
                      <UserIcon />
                      <span>View Profile</span>
                    </li>
                    <li onClick={() => {}}>
                      <SettingIcon />
                      <span>Account Settings</span>
                    </li>
                    <li
                    // onClick={() => {
                    //   dispatch(
                    //     updateToSeller({
                    //       isSeller: loggedInUser?.isSeller ? "false" : "true",
                    //     })
                    //   );
                    // }}
                    >
                      <SwitchIcon />
                      <span>
                        Switch to {loggedInUser?.isSeller ? "Buyer" : "Seller"}
                      </span>
                    </li>
                    <li onClick={() => {}}>
                      <HelpIcon /> <span>Help</span>
                    </li>
                    <li
                      onClick={() => {
                        dispatch(logOut({ navigate: navigate }));
                      }}
                    >
                      <LogoutIcon />
                      <span>Log out</span>
                    </li>
                  </ul>
                </div>
              )}
            </button>
          </div>
        )}
        {window.innerWidth <= 900 && <MobileMenu />}

        {service && (
          <div className="service_drop">
            <div className="divide">
              <ul>
                <h4 onClick={() => navigate("/gigs")}>
                  <HandsWrite /> Writing and Critiquing
                </h4>
                <li>Proofreading and Editing</li>
                <li>Beta Reading</li>
                <li>Rewriting and Paraphrasing</li>
                <li>Content Writing</li>
                <li>Ghost Writing</li>
              </ul>
              <ul>
                <h4 onClick={() => navigate("/gigs")}>
                  <Writes />
                  Graphics and Layout
                </h4>
                <li>Logo Design</li>
                <li>Book Interior design</li>
                <li>Book Cover Design</li>
                <li>Illustration</li>
                <li>Children’s Book Illustration</li>
                <li>General Design</li>
              </ul>
              <ul>
                <h4 onClick={() => navigate("/gigs")}>
                  <Announce />
                  Marketing and promotional
                </h4>
                <li>Book Promotion</li>
                <li>Book Trailer Videos</li>
              </ul>
            </div>
          </div>
        )}
      </nav>
      {location.pathname === "/gigs" && (
        <div className="subNav">
          <div className="subNav_L">
            <button
              className="btn_trans withBorder"
              onClick={() => filtersVisibility()}
            >
              Filter
            </button>
            <button className="btn_trans">Sort By</button>
            <button className="btn_trans withBorder">Newest</button>
          </div>
          <button className="btn_trans">Proofreading & Editing</button>
          <button className="btn_trans">Writing</button>
          <button className="btn_trans">Critiquing & Reading</button>
          <button className="btn_trans">Layout</button>
          <button className="btn_trans">Citation and references</button>
          <button className="btn_trans ">Book promotion</button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
