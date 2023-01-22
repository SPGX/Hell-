/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Backbotton from "./Backbotton";
import Nextbottonenable from "./Nextbottonenable";
import { Flex } from "@aws-amplify/ui-react";
export default function Nextactionenable(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Nextactionenable")}
    >
      <Backbotton
        width="160px"
        height="52px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "back botton")}
      ></Backbotton>
      <Nextbottonenable
        width="160px"
        height="52px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "next botton_enable")}
      ></Nextbottonenable>
    </Flex>
  );
}
