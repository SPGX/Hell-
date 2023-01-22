/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Radiobotton(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="32px"
      height="32px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 32, height: 32 }}
      paths={[
        {
          d: "M31 16C31 24.2843 24.2843 31 16 31L16 33C25.3888 33 33 25.3888 33 16L31 16ZM16 31C7.71573 31 1 24.2843 1 16L-1 16C-1 25.3888 6.61116 33 16 33L16 31ZM1 16C1 7.71573 7.71573 1 16 1L16 -1C6.61116 -1 -1 6.61116 -1 16L1 16ZM16 1C24.2843 1 31 7.71573 31 16L33 16C33 6.61116 25.3888 -1 16 -1L16 1Z",
          stroke: "rgba(217,217,217,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Radiobotton")}
    ></Icon>
  );
}
