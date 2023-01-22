/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Backbotton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="160px"
      height="52px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Backbotton")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 10")}
      ></View>
      <Text
        fontFamily="Kanit"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="21.15%"
        bottom="21.15%"
        left="26.88%"
        right="27.5%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ย้อนกลับ"
        {...getOverrideProps(
          overrides,
          "\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A"
        )}
      ></Text>
    </View>
  );
}
