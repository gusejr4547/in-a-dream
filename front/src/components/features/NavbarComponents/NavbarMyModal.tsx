import React from "react";
import Box from "../../common/Box";
import { isModalOpen } from "../../../types/index";
import S from "styled-components";
import "./styles/NavbarMyModal.css";
import positive from "../../../assets/coin/positive.png";
import neutral from "../../../assets/coin/neutral.png";
import negative from "../../../assets/coin/negative.png";
// import gotomy from "../../../assets/navbar/gotomy.png";

interface CoinPropsComponent {}

const CoinComponent = S.div<CoinPropsComponent>`
  width:20%;
  height:100%/;
  // background-color:#fff;
  margin-left:1rem;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size:1.2rem
`;

const NavbarMyModal: React.FC<isModalOpen> = ({
  isNavbarModalOpen,
  onClose,
}) => {
  return (
    <Box position="absolute" width={50} height={5} left={3} bottom={1}>
      <div className="coin-box">
        <CoinComponent>
          <img src={positive} alt="positiveCoin" />
          <span>323</span>
        </CoinComponent>
        <CoinComponent>
          <img src={neutral} alt="neutralCoin" />
          <span>423</span>
        </CoinComponent>
        <CoinComponent>
          <img src={negative} alt="negativeCoin" />
          <span>813</span>
        </CoinComponent>
        <CoinComponent>
          <span>바로가기 &gt;&gt;</span>
          {/* <img src={gotomy} alt="gotomy" /> */}
        </CoinComponent>
      </div>
    </Box>
  );
};

export default NavbarMyModal;
