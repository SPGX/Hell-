/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Backbotton from "./Backbotton";
import Nextbottondisable from "./Nextbottondisable";
import { Flex } from "@aws-amplify/ui-react";
export default function Nextactiondisable(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Nextactiondisable")}
    >
      <Backbotton
        width="160px"
        height="52px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "back botton")}
      ></Backbotton>
      <Nextbottondisable
        width="160px"
        height="52px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "next botton_disable")}
      ></Nextbottondisable>
    </Flex>
  );
}
