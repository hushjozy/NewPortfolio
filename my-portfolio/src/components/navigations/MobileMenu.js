import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/Property 1=close.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/Property 1=ci_settings.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/Property 1=ic_baseline-log-out.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/userline.svg";
import { ReactComponent as SwitchIcon } from "../../assets/icons/switchref.svg";
import { useNavigate } from "react-router-dom";

const MobileMenu = () => {
  const [menu, showMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="mobileMenu_cont">
      {/* <button
        className="update_btn"
        style={{ float: "left", marginRight: "20px", fontWeight: "700" }}
        onClick={() => navigate("/create-gigs")}
      >
        Create Gig
      </button> */}

      {!menu ? (
        <MenuIcon
          className="mob_menuicon"
          onClick={() => {
            showMenu(!menu);
          }}
        />
      ) : (
        <CloseIcon
          className="mob_menuicon"
          onClick={() => {
            showMenu(!menu);
          }}
        />
      )}
      <div className={`mob_menurow_bg acumindash ${menu && "slideIn"}`}>
        <div className="mob_menurow">
          {/*  for User Menu */}
          {
            <ul class="mobmenu_list">
              <li
                className="userMobDeta"
                onClick={() => {
                  showMenu(!menu);
                  navigate("/seller-profile");
                }}
                style={{ marginTop: "6px", paddingLeft: 0, paddingBottom: 0 }}
              >
                <div className="create_gig_avatar">
                  <img
                    className="gigProfileImg"
                    src={require(`../../assets/img/Rectangle 1468.png`)}
                  />
                </div>
              </li>

              {/* <li
                onClick={() => {
                  showMenu(!menu);
                  navigate("/sellers-dashboard");
                }}
              >
                Dashboard
              </li> */}
              <li
                onClick={() => {
                  showMenu(!menu);
                  navigate("/order-gig");
                }}
              >
                Orders
              </li>
              <li
                onClick={() => {
                  showMenu(!menu);
                  navigate("/saved-gigs");
                }}
              >
                Saved Gigs
              </li>

              <li
                onClick={() => {
                  showMenu(!menu);
                  navigate("/seller-messages");
                }}
              >
                Messages
              </li>
              <li>Notifications</li>

              <li className="userMobDeta">
                <span>
                  <SettingIcon />
                </span>
                <span>Account Settings</span>
              </li>
              <li className="userMobDeta">
                <span>
                  <SwitchIcon />
                </span>
                <span>Switch to Seller</span>
              </li>
              <li className="userMobDeta">
                <span>
                  <LogoutIcon />
                </span>
                <span>Log out</span>
              </li>
            </ul>
          }
          {/*  for Seller Menu */}
          {/* {
            <ul class="mobmenu_list">
              <li
                className="userMobDeta"
                onClick={() => {
                  showMenu(!menu);
                  navigate("/seller-profile");
                }}
                style={{ marginTop: "6px", paddingLeft: 0, paddingBottom: 0 }}
              >
                <div className="create_gig_avatar">
                  <img
                    className="gigProfileImg"
                    src={require(`../../assets/img/Rectangle 1468.png`)}
                  />
                </div>
              </li>

              <li>
                <strong>Main</strong>
              </li>
              <li
                onClick={() => {
                  showMenu(!menu);
                  navigate("/sellers-dashboard");
                }}
              >
                Dashboard
              </li>
              <li
                onClick={() => {
                  showMenu(!menu);
                  navigate("/seller-orders");
                }}
              >
                Orders
              </li>
              <li
                onClick={() => {
                  showMenu(!menu);
                  navigate("/seller-gigs");
                }}
              >
                Gigs
              </li>
              <li>
                <strong>Communication</strong>
              </li>
              <li
                onClick={() => {
                  showMenu(!menu);
                  navigate("/seller-messages");
                }}
              >
                Messages
              </li>
              <li>Notifications</li>
              <li>
                <strong>Reports</strong>
              </li>
              <li>Earnings</li>
              <li>Activities</li>

              <li className="userMobDeta">
                <span>
                  <SettingIcon />
                </span>
                <span>Account Settings</span>
              </li>
              <li className="userMobDeta">
                <span>
                  <SwitchIcon />
                </span>
                <span>Switch to Buyer</span>
              </li>
              <li className="userMobDeta">
                <span>
                  <LogoutIcon />
                </span>
                <span>Log out</span>
              </li>
            </ul>
          } */}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
