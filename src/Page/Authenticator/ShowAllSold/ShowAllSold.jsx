import { useEffect, useState } from "react";
import { getData } from "../../../api/api";
import ComHeader from "../../Components/ComHeader/ComHeader";
import ComFooter from "../../Components/ComFooter/ComFooter";
import ComImage from "../../Components/ComImage/ComImage";
import images from "../../../img";
import { textApp } from "../../../TextContent/textApp";
import ComAllProductsSold from "../../Components/ComAllProductSold/ComAllProductSold";

export default function ShowAll(props) {
  return (
    <>
      <ComHeader />
      
      <ComAllProductsSold
        link={`/product/sold?limit=999`}
        text={textApp.Home.text}
        getAll={"/"}
      />
      <ComFooter />
    </>
  );
}
