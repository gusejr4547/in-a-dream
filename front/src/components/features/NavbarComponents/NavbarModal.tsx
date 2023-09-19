import React from "react";
import "./styles/NavbarModal.css";
import Box from "../../common/Box";
import { isModalOpen } from "../../../types/index";
import { SlideSpan } from "../../common/SlideSpan";
import SearchBar from "../SearchBarComponents/SearchBar";
const NavbarModal: React.FC<isModalOpen> = ({ isNavbarModalOpen, onClose }) => {
  return (
    <Box
      position="fixed"
      width={80}
      height={70}
      left={0}
      top={15}
      textWrap="nowrap"
    >
      <div className="navbar-gallery">
        <SlideSpan
          startPosition={-100}
          endPosition={100}
          speed={40}
          width="90%"
        >
          <span className="navbar-font1">GALLERY</span>
          <span>{"   "}</span>
          <span className="navbar-font2">GALLERY</span>
          <span>{"    "}</span>
          <span className="navbar-font2">GALLERY</span>
          <span>{"    "}</span>
          <span className="navbar-font2">GALLERY</span>
          <span>{"    "}</span>
          <span className="navbar-font3">GALLERY</span>
          <span>{"    "}</span>
          <span className="navbar-font1">GALLERY</span>
          <span>{"   "}</span>
          <span className="navbar-font4">GALLERY</span>
          <span>{"    "}</span>
          <span className="navbar-font4">GALLERY</span>
          <span>{"    "}</span>
          <span className="navbar-font5">GALLERY</span>
          <span>{"    "}</span>
          <span className="navbar-font2">GALLERY</span>
          <span>{"    "}</span>
          <span className="navbar-font5">GALLERY</span>
          <span>{"    "}</span>
          <span className="navbar-font5">GALLERY</span>
          <span>{"    "}</span>
        </SlideSpan>
      </div>
      <div className="navbar-shop">
        <SlideSpan
          startPosition={100}
          endPosition={-100}
          speed={38}
          width="90%"
        >
          <span className="navbar-font1">SHOP</span>
          <span>{"   "}</span>
          <span className="navbar-font2">SHOP</span>
          <span>{"    "}</span>
          <span className="navbar-font3">SHOP</span>
          <span>{"    "}</span>
          <span className="navbar-font4">SHOP</span>
          <span>{"    "}</span>
          <span className="navbar-font3">SHOP</span>
          <span>{"    "}</span>
          <span className="navbar-font3">SHOP</span>
          <span>{"    "}</span>
          <span className="navbar-font5">SHOP</span>
          <span>{"    "}</span>
          <span className="navbar-font5">SHOP</span>
          <span>{"    "}</span>
          <span className="navbar-font5">SHOP</span>
          <span>{"    "}</span>
          <span className="navbar-font5">SHOP</span>
          <span>{"    "}</span>
          <span className="navbar-font1">SHOP</span>
          <span>{"   "}</span>
          <span className="navbar-font1">SHOP</span>
          <span>{"   "}</span>
        </SlideSpan>
      </div>
      <div className="navbar-diary">
        <SlideSpan
          startPosition={-100}
          endPosition={100}
          speed={42}
          width="90%"
        >
          <span className="navbar-font5">DIARY</span>
          <span>{"    "}</span>
          <span className="navbar-font3">DIARY</span>
          <span>{"    "}</span>
          <span className="navbar-font5">DIARY</span>
          <span>{"    "}</span>
          <span className="navbar-font1">DIARY</span>
          <span>{"   "}</span>
          <span className="navbar-font2">DIARY</span>
          <span>{"    "}</span>
          <span className="navbar-font3">DIARY</span>
          <span>{"    "}</span>
          <span className="navbar-font1">DIARY</span>
          <span>{"   "}</span>
          <span className="navbar-font5">DIARY</span>
          <span>{"    "}</span>
          <span className="navbar-font2">DIARY</span>
          <span>{"    "}</span>
          <span className="navbar-font3">DIARY</span>
          <span>{"    "}</span>
          <span className="navbar-font4">DIARY</span>
          <span>{"    "}</span>
          <span className="navbar-font5">DIARY</span>
          <span>{"    "}</span>
        </SlideSpan>
      </div>
      <div className="navbar-statistics">
        <SlideSpan
          startPosition={100}
          endPosition={-100}
          speed={39}
          width="90%"
        >
          <span className="navbar-font1">STATISTICS</span>
          <span>{"   "}</span>
          <span className="navbar-font2">STATISTICS</span>
          <span>{"    "}</span>
          <span className="navbar-font4">STATISTICS</span>
          <span>{"    "}</span>
          <span className="navbar-font5">STATISTICS</span>
          <span>{"    "}</span>
          <span className="navbar-font2">STATISTICS</span>
          <span>{"    "}</span>
          <span className="navbar-font1">STATISTICS</span>
          <span>{"   "}</span>
          <span className="navbar-font2">STATISTICS</span>
          <span>{"    "}</span>
          <span className="navbar-font3">STATISTICS</span>
          <span>{"    "}</span>
          <span className="navbar-font4">STATISTICS</span>
          <span>{"    "}</span>
          <span className="navbar-font1">STATISTICS</span>
          <span>{"   "}</span>
          <span className="navbar-font4">STATISTICS</span>
          <span>{"    "}</span>
        </SlideSpan>
      </div>

      <div className="navbar-body-search">
        <SearchBar />
      </div>
    </Box>
  );
};

export default NavbarModal;
