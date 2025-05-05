import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import { Button, Category, Brand } from "../components/componentsindex";
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";

//IMPORT SMART CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
const NFTDetails = () => {
  const { currentAccount, tokens, currentNFT } = useContext(NFTMarketplaceContext);

  const router = useRouter();
  
  return (
    <div>
      <NFTDetailsPage nft={currentNFT} />
      {/* <Category /> */}
      {/* <Brand /> */}
    </div>
  );
};

export default NFTDetails;
