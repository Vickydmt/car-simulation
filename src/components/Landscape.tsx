import { GroupProps } from "@react-three/fiber";
import { Newground } from "../models";
import { useCompoundBody, Triplet } from "@react-three/cannon";
import { useRef } from "react";
import * as THREE from "three";

export default function Landscape(
  props: GroupProps & { debug: React.RefObject<boolean> }
) {
  const { debug } = props;

  const leftlandArgs0: Triplet = [69, 0.1, 50];
  const leftlandArgs1: Triplet = [60, 0.1, 50];
  const leftlandArgs2: Triplet = [18, 0.1, 50];
  const leftlandArgs3: Triplet = [40, 0.1, 17];
  const leftlandArgs4: Triplet = [70, 0.1, 30];
  const leftlandArgs5: Triplet = [36, 0.1, 50];
  const leftlandArgs6: Triplet = [3.5, 0.1, 5];
  const leftlandArgs7: Triplet = [5.5, 0.1, 25];
  const leftlandArgs8: Triplet = [5.5, 0.1, 20];
  const leftlandArgs9: Triplet = [7.5, 0.1, 30];

  const rightlandArgs0: Triplet = [110, 0.1, 100.5];
  const rightlandArgs1: Triplet = [110, 0.1, 25];
  const rightlandArgs2: Triplet = [11.9, 4, 0.01,];
  const rightlandArgs3: Triplet = [24, 0.1, 48];
  const rightlandArgs4: Triplet = [40, 0.1, 130];
  const rightlandArgs5: Triplet = [40, 0.1, 130];
  const rightlandArgs6: Triplet = [15, 0.1, 15];
  const rightlandArgs7: Triplet = [7, 5, 0.01];
  const rightlandArgs8: Triplet = [12.55, 5, 0.01];
  const rightlandArgs9: Triplet = [5.5, 5, 0.01];
  const rightlandArgs10: Triplet = [9, 5, 0.01];
  const rightlandArgs11: Triplet = [4, 5, 0.01];

  const bridgeArgs3_1_1: Triplet = [11, 1, 2];
  const bridgeArgs3_1_2: Triplet = [4, 0.06, 2];
  const bridgeArgs3_1_3: Triplet = [4, 0.06, 2];
  const bridgeArgs3_1_4: Triplet = [2.1, 0.06, 2];

  const bridgeArgs3_2: Triplet = [20, 0.04, 2];

  const bridgeArgs3_3_1: Triplet = [14, 0.06, 2];
  const bridgeArgs3_3_2: Triplet = [4.5, 0.06, 2];
  const bridgeArgs3_3_3: Triplet = [4, 0.06, 2];
  const bridgeArgs3_3_4: Triplet = [4.5, 0.06, 2];
  const bridgeArgs3_3_5: Triplet = [5, 0.06, 2];

  const leftbridgeArgs4_1_1: Triplet = [15, 1, 2];
  const leftbridgeArgs4_1_2: Triplet = [7.5, 0.06, 2];
  const leftbridgeArgs4_1_3: Triplet = [7, 0.06, 2];

  const seablockArgs0: Triplet = [45, 10, 0.01];
  const seablockArgs1: Triplet = [17, 10, 0.01];
  const seablockArgs2: Triplet = [11.5, 10, 0.01];
  const seablockArgs3: Triplet = [18, 10, 0.01];
  const seablockArgs4: Triplet = [59, 10, 0.01];
  const seablockArgs5: Triplet = [44, 10, 0.01];
  const seablockArgs6: Triplet = [3.2, 10, 0.01];
  const seablockArgs7: Triplet = [11, 10, 0.01];
  const seablockArgs8: Triplet = [11, 10, 0.01];
  const seablockArgs9: Triplet = [17, 2, 0.01];
  const seablockArgs10: Triplet = [17, 2, 0.01];
  const seablockArgs11: Triplet = [14, 10, 0.01];
  const seablockArgs12: Triplet = [14, 10, 0.01];
  const seablockArgs13: Triplet = [45, 10, 0.01];
  const seablockArgs14: Triplet = [5.2, 10, 0.01];
  const seablockArgs15: Triplet = [3.5, 10, 0.01];
  const seablockArgs16: Triplet = [10, 1.5, 0.01];
  const seablockArgs17: Triplet = [7, 10, 0.01];
  const seablockArgs18: Triplet = [9, 10, 0.01];
  const seablockArgs19: Triplet = [16.5, 10, 0.01];
  const seablockArgs20: Triplet = [36, 10, 0.01];
  const seablockArgs21: Triplet = [19, 10, 0.01];
  const seablockArgs22: Triplet = [34, 10, 0.01];
  const seablockArgs23: Triplet = [11.5, 10, 0.01];
  const seablockArgs24: Triplet = [14, 10, 0.01];
  const seablockArgs25: Triplet = [14, 10, 0.01];
  const seablockArgs26: Triplet = [14, 10, 0.01];
  const seablockArgs27: Triplet = [14, 10, 0.01];
  const seablockArgs28: Triplet = [14, 10, 0.01];

  const leftlandPos0: Triplet = [-81, -0.05, 40.2];
  const leftlandPos1: Triplet = [-39, -0.05, 39];
  const leftlandPos2: Triplet = [-15.5, -0.05, 38.2];
  const leftlandPos3: Triplet = [-14, -0.05, 33.2];
  const leftlandPos4: Triplet = [28, -0.05, 50.55];
  const leftlandPos5: Triplet = [47.6, -0.05, 55.8];
  const leftlandPos6: Triplet = [29.9, -0.05, 31.95];
  const leftlandPos7: Triplet = [66, 0.04, 46.6];
  const leftlandPos8: Triplet = [45.25, 0.01, 37.88];
  const leftlandPos9: Triplet = [5, 0.05, 60.5];

  const rightlandPos0: Triplet = [-60, -0.05, -48.4];
  const rightlandPos1: Triplet = [39.75, -0.05, 8.4];
  const rightlandPos2: Triplet = [-66.5, 1, -58];
  const rightlandPos3: Triplet = [5, -0.26, -48];
  const rightlandPos4: Triplet = [43.15, -0.4, -25.45];
  const rightlandPos5: Triplet = [50, -0.45, -36];
  const rightlandPos6: Triplet = [10, -0.29, -36];
  const rightlandPos7: Triplet = [-68.45, 1, -52];
  const rightlandPos8: Triplet = [-78.4, 1, -59.5];
  const rightlandPos9: Triplet = [-70.7, 1, -63.4];
  const rightlandPos10: Triplet = [-76, 1, -53.6];
  const rightlandPos11: Triplet = [-81.5, 1, -55.65];

  const bridgePos3_1_1: Triplet = [37.7, -0.5, 25.3];
  const bridgePos3_1_2: Triplet = [38.65, 0.1, 22.7];
  const bridgePos3_1_3: Triplet = [36.6, 0.1, 28.3];
  const bridgePos3_1_4: Triplet = [37.65, 0.2, 25.42];

  const bridgePos3_2: Triplet = [18.7, -0.02, 20];

  const bridgePos3_3_1: Triplet = [-66.4, -0.5, 9];
  const bridgePos3_3_2: Triplet = [-66.2, 0.02, 12];
  const bridgePos3_3_3: Triplet = [-66.2, 0.065, 8];
  const bridgePos3_3_4: Triplet = [-66.2, 0.02, 4];
  const bridgePos3_3_5: Triplet = [-66.3, 0, 14];

  const leftbridgePos4_1_1: Triplet = [14.8, -1.35, 27];
  const leftbridgePos4_1_2: Triplet = [23.2, -0.52, 30.75];
  const leftbridgePos4_1_3: Triplet = [7.6, -0.45, 23.63];

  const seablockPos0: Triplet = [60.8, -0.5, 30.5];
  const seablockPos1: Triplet = [30.7, -0.5, 17];
  const seablockPos2: Triplet = [15.8, -0.5, 10.88];
  const seablockPos3: Triplet = [2, -0.5, 5.88];
  const seablockPos4: Triplet = [-35.7, -0.5, 1.95];
  const seablockPos5: Triplet = [-92.3, -0.5, 1.25];
  const seablockPos6: Triplet = [-68.8, -0.5, 1.2];
  const seablockPos7: Triplet = [38.3, -0.5, 26.6];
  const seablockPos8: Triplet = [36.4, -0.5, 25.9];
  const seablockPos9: Triplet = [19.4, 1, 20.8];
  const seablockPos10: Triplet = [17.6, 1, 20.15];
  const seablockPos11: Triplet = [-65.25, -0.5, 8.3];
  const seablockPos12: Triplet = [-67.2, -0.5, 8.3];
  const seablockPos13: Triplet = [57.25, -0.5, 40.15];
  const seablockPos14: Triplet = [29.25, -0.5, 30.35];
  const seablockPos15: Triplet = [33.02, -0.5, 29.97];
  const seablockPos16: Triplet = [16, -1, 26.43];
  const seablockPos17: Triplet = [23.65, -0.5, 29.88];
  const seablockPos18: Triplet = [7.5, -0.5, 22.5];
  const seablockPos19: Triplet = [-3.64, -0.5, 16.33];
  const seablockPos20: Triplet = [-28.5, -0.5, 13.4];
  const seablockPos21: Triplet = [-55.78, -0.5, 14.7];
  const seablockPos22: Triplet = [-84.2, -0.5, 15.3];
  const seablockPos23: Triplet = [20.95, -0.5, 30.75];
  const seablockPos24: Triplet = [7.7, -0.5, 24.75];
  const seablockPos25: Triplet = [-67.2, -0.5, 8.3];
  const seablockPos26: Triplet = [-67.2, -0.5, 8.3];
  const seablockPos27: Triplet = [-67.2, -0.5, 8.3];
  const seablockPos28: Triplet = [-67.2, -0.5, 8.3];

  const leftlandRot0: Triplet = [0, (1.28 * Math.PI) / 180, 0];
  const leftlandRot1: Triplet = [0, (4 * Math.PI) / 180, 0];
  const leftlandRot2: Triplet = [0, (-31 * Math.PI) / 180, 0];
  const leftlandRot3: Triplet = [0, (59.5 * Math.PI) / 180, 0];
  const leftlandRot4: Triplet = [0, (-24.74 * Math.PI) / 180, 0];
  const leftlandRot5: Triplet = [0, (67 * Math.PI) / 180, 0];
  const leftlandRot6: Triplet = [0, (108.7 * Math.PI) / 180, 0];
  const leftlandRot7: Triplet = [
    0,
    (67.2 * Math.PI) / 180,
    (1.5 * Math.PI) / 180,
  ];
  const leftlandRot8: Triplet = [
    (-1 * Math.PI) / 180,
    (67.2 * Math.PI) / 180,
    (1.5 * Math.PI) / 180,
  ];
  const leftlandRot9: Triplet = [
    (0 * Math.PI) / 180,
    (65 * Math.PI) / 180,
    (0 * Math.PI) / 180,
  ];

  const rightlandRot0: Triplet = [0, (-1 * Math.PI) / 180, 0];
  const rightlandRot1: Triplet = [0, (-23 * Math.PI) / 180, 0];
  const rightlandRot2: Triplet = [0, (105 * Math.PI) / 180, 0];
  const rightlandRot3: Triplet = [
    (0 * Math.PI) / 180,
    (-1 * Math.PI) / 180,
    (-1.05 * Math.PI) / 180,
  ];
  const rightlandRot4: Triplet = [
    (0 * Math.PI) / 180,
    (-113 * Math.PI) / 180,
    (1.0 * Math.PI) / 180,
  ];
  const rightlandRot5: Triplet = [
    (0 * Math.PI) / 180,
    (-113 * Math.PI) / 180,
    (0.55 * Math.PI) / 180,
  ];
  const rightlandRot6: Triplet = [
    (0 * Math.PI) / 180,
    (-113 * Math.PI) / 180,
    (0.6 * Math.PI) / 180,
  ];
  const rightlandRot7: Triplet = [0, (5 * Math.PI) / 180, 0];
  const rightlandRot8: Triplet = [0, (36 * Math.PI) / 180, 0];
  const rightlandRot9: Triplet = [0, (4 * Math.PI) / 180, 0];
  const rightlandRot10: Triplet = [0, (-25 * Math.PI) / 180, 0];
  const rightlandRot11: Triplet = [0, (-7 * Math.PI) / 180, 0];

  const bridgeRot3_1_1: Triplet = [0, (69.69 * Math.PI) / 180, 0];
  const bridgeRot3_1_2: Triplet = [
    0,
    (69.69 * Math.PI) / 180,
    (-3 * Math.PI) / 180,
  ];
  const bridgeRot3_1_3: Triplet = [
    0,
    (69.69 * Math.PI) / 180,
    (3 * Math.PI) / 180,
  ];
  const bridgeRot3_1_4: Triplet = [0, (69.69 * Math.PI) / 180, 0];

  const bridgeRot3_2: Triplet = [0, (64 * Math.PI) / 180, 0];

  const bridgeRot3_3_1: Triplet = [0, (90 * Math.PI) / 180, 0];
  const bridgeRot3_3_2: Triplet = [
    0,
    (90 * Math.PI) / 180,
    (1.6 * Math.PI) / 180,
  ];
  const bridgeRot3_3_3: Triplet = [0, (90 * Math.PI) / 180, 0];
  const bridgeRot3_3_4: Triplet = [
    0,
    (90 * Math.PI) / 180,
    (-1.6 * Math.PI) / 180,
  ];
  const bridgeRot3_3_5: Triplet = [
    0,
    (90 * Math.PI) / 180,
    (0 * Math.PI) / 180,
  ];

  const bridgeRot4_1: Triplet = [0, (-24.3 * Math.PI) / 180, 0];
  const bridgeRot4_2: Triplet = [
    0,
    (-24.3 * Math.PI) / 180,
    (7.2 * Math.PI) / 180,
  ];
  const bridgeRot4_3: Triplet = [
    0,
    (-24.3 * Math.PI) / 180,
    (-6.5 * Math.PI) / 180,
  ];

  const seablockRot0: Triplet = [0, (-23.3 * Math.PI) / 180, 0];
  const seablockRot1: Triplet = [0, (-26.3 * Math.PI) / 180, 0];
  const seablockRot2: Triplet = [0, (-16.5 * Math.PI) / 180, 0];
  const seablockRot3: Triplet = [0, (-22.4 * Math.PI) / 180, 0];
  const seablockRot4: Triplet = [0, (-1.04 * Math.PI) / 180, 0];
  const seablockRot5: Triplet = [0, (0.7 * Math.PI) / 180, 0];
  const seablockRot6: Triplet = [0, (-7.3 * Math.PI) / 180, 0];
  const seablockRot7: Triplet = [0, (69.69 * Math.PI) / 180, 0];
  const seablockRot8: Triplet = [0, (69.69 * Math.PI) / 180, 0];
  const seablockRot9: Triplet = [0, (64 * Math.PI) / 180, 0];
  const seablockRot10: Triplet = [0, (64 * Math.PI) / 180, 0];
  const seablockRot11: Triplet = [0, (89.7 * Math.PI) / 180, 0];
  const seablockRot12: Triplet = [0, (89.7 * Math.PI) / 180, 0];
  const seablockRot13: Triplet = [0, (-23 * Math.PI) / 180, 0];
  const seablockRot14: Triplet = [0, (19.4 * Math.PI) / 180, 0];
  const seablockRot15: Triplet = [0, (-20 * Math.PI) / 180, 0];
  const seablockRot16: Triplet = [0, (-24.7 * Math.PI) / 180, 0];
  const seablockRot17: Triplet = [0, (-23.5 * Math.PI) / 180, 0];
  const seablockRot18: Triplet = [0, (-24.9 * Math.PI) / 180, 0];
  const seablockRot19: Triplet = [0, (-31.25 * Math.PI) / 180, 0];
  const seablockRot20: Triplet = [0, (4 * Math.PI) / 180, 0];
  const seablockRot21: Triplet = [0, (0.3 * Math.PI) / 180, 0];
  const seablockRot22: Triplet = [0, (1.3 * Math.PI) / 180, 0];
  const seablockRot23: Triplet = [0, (-23.9 * Math.PI) / 180, 0];
  const seablockRot24: Triplet = [0, (-24.75 * Math.PI) / 180, 0];
  const seablockRot25: Triplet = [0, (89.7 * Math.PI) / 180, 0];
  const seablockRot26: Triplet = [0, (89.7 * Math.PI) / 180, 0];
  const seablockRot27: Triplet = [0, (89.7 * Math.PI) / 180, 0];
  const seablockRot28: Triplet = [0, (89.7 * Math.PI) / 180, 0];

  const [ref1] = useCompoundBody<THREE.Mesh>(
    () => ({
      mass: 0,
      shapes: [
        {
          args: rightlandArgs0,
          position: rightlandPos0,
          rotation: rightlandRot0,
          type: "Box",
        },
        {
          args: rightlandArgs1,
          position: rightlandPos1,
          rotation: rightlandRot1,
          type: "Box",
        },
        { args: rightlandArgs2,
          position: rightlandPos2, 
          rotation: rightlandRot2, 
          type: "Box" 
        },
        {
          args: rightlandArgs3,
          position: rightlandPos3,
          rotation: rightlandRot3,
          type: "Box",
        },
        {
          args: rightlandArgs4,
          position: rightlandPos4,
          rotation: rightlandRot4,
          type: "Box",
        },
        {
          args: rightlandArgs5,
          position: rightlandPos5,
          rotation: rightlandRot5,
          type: "Box",
        },
        {
          args: rightlandArgs6,
          position: rightlandPos6,
          rotation: rightlandRot6,
          type: "Box",
        },
        {
          args: rightlandArgs7,
          position: rightlandPos7,
          rotation: rightlandRot7,
          type: "Box",
        },
        {
          args: rightlandArgs8,
          position: rightlandPos8,
          rotation: rightlandRot8,
          type: "Box",
        },
        {
          args: rightlandArgs9,
          position: rightlandPos9,
          rotation: rightlandRot9,
          type: "Box",
        },
        {
          args: rightlandArgs10,
          position: rightlandPos10,
          rotation: rightlandRot10,
          type: "Box",
        },
        {
          args: rightlandArgs11,
          position: rightlandPos11,
          rotation: rightlandRot11,
          type: "Box",
        },

        {
          args: leftlandArgs0,
          position: leftlandPos0,
          rotation: leftlandRot0,
          type: "Box",
        },
        {
          args: leftlandArgs1,
          position: leftlandPos1,
          rotation: leftlandRot1,
          type: "Box",
        },
        {
          args: leftlandArgs2,
          position: leftlandPos2,
          rotation: leftlandRot2,
          type: "Box",
        },
        {
          args: leftlandArgs3,
          position: leftlandPos3,
          rotation: leftlandRot3,
          type: "Box",
        },
        {
          args: leftlandArgs4,
          position: leftlandPos4,
          rotation: leftlandRot4,
          type: "Box",
        },
        {
          args: leftlandArgs5,
          position: leftlandPos5,
          rotation: leftlandRot5,
          type: "Box",
        },
        {
          args: leftlandArgs6,
          position: leftlandPos6,
          rotation: leftlandRot6,
          type: "Box",
        },
        {
          args: leftlandArgs7,
          position: leftlandPos7,
          rotation: leftlandRot7,
          type: "Box",
        },
        {
          args: leftlandArgs8,
          position: leftlandPos8,
          rotation: leftlandRot8,
          type: "Box",
        },
        {
          args: leftlandArgs9,
          position: leftlandPos9,
          rotation: leftlandRot9,
          type: "Box",
        },

        {
          args: bridgeArgs3_1_1,
          position: bridgePos3_1_1,
          rotation: bridgeRot3_1_1,
          type: "Box",
        },
        {
          args: bridgeArgs3_1_2,
          position: bridgePos3_1_2,
          rotation: bridgeRot3_1_2,
          type: "Box",
        },
        {
          args: bridgeArgs3_1_3,
          position: bridgePos3_1_3,
          rotation: bridgeRot3_1_3,
          type: "Box",
        },
        {
          args: bridgeArgs3_1_4,
          position: bridgePos3_1_4,
          rotation: bridgeRot3_1_4,
          type: "Box",
        },

        {
          args: bridgeArgs3_2,
          position: bridgePos3_2,
          rotation: bridgeRot3_2,
          type: "Box",
        },

        {
          args: bridgeArgs3_3_1,
          position: bridgePos3_3_1,
          rotation: bridgeRot3_3_1,
          type: "Box",
        },
        {
          args: bridgeArgs3_3_2,
          position: bridgePos3_3_2,
          rotation: bridgeRot3_3_2,
          type: "Box",
        },
        {
          args: bridgeArgs3_3_3,
          position: bridgePos3_3_3,
          rotation: bridgeRot3_3_3,
          type: "Box",
        },
        {
          args: bridgeArgs3_3_4,
          position: bridgePos3_3_4,
          rotation: bridgeRot3_3_4,
          type: "Box",
        },
        {
          args: bridgeArgs3_3_5,
          position: bridgePos3_3_5,
          rotation: bridgeRot3_3_5,
          type: "Box",
        },

        {
          args: leftbridgeArgs4_1_1,
          position: leftbridgePos4_1_1,
          rotation: bridgeRot4_1,
          type: "Box",
        },
        {
          args: leftbridgeArgs4_1_2,
          position: leftbridgePos4_1_2,
          rotation: bridgeRot4_2,
          type: "Box",
        },
        {
          args: leftbridgeArgs4_1_3,
          position: leftbridgePos4_1_3,
          rotation: bridgeRot4_3,
          type: "Box",
        },

        {
          args: seablockArgs0,
          position: seablockPos0,
          rotation: seablockRot0,
          type: "Box",
        },
        {
          args: seablockArgs1,
          position: seablockPos1,
          rotation: seablockRot1,
          type: "Box",
        },
        {
          args: seablockArgs2,
          position: seablockPos2,
          rotation: seablockRot2,
          type: "Box",
        },
        {
          args: seablockArgs3,
          position: seablockPos3,
          rotation: seablockRot3,
          type: "Box",
        },
        {
          args: seablockArgs4,
          position: seablockPos4,
          rotation: seablockRot4,
          type: "Box",
        },
        {
          args: seablockArgs5,
          position: seablockPos5,
          rotation: seablockRot5,
          type: "Box",
        },
        {
          args: seablockArgs6,
          position: seablockPos6,
          rotation: seablockRot6,
          type: "Box",
        },
        {
          args: seablockArgs7,
          position: seablockPos7,
          rotation: seablockRot7,
          type: "Box",
        },
        {
          args: seablockArgs8,
          position: seablockPos8,
          rotation: seablockRot8,
          type: "Box",
        },
        {
          args: seablockArgs9,
          position: seablockPos9,
          rotation: seablockRot9,
          type: "Box",
        },
        {
          args: seablockArgs10,
          position: seablockPos10,
          rotation: seablockRot10,
          type: "Box",
        },
        {
          args: seablockArgs11,
          position: seablockPos11,
          rotation: seablockRot11,
          type: "Box",
        },
        {
          args: seablockArgs12,
          position: seablockPos12,
          rotation: seablockRot12,
          type: "Box",
        },
        {
        args: seablockArgs13,
        position: seablockPos13,
        rotation: seablockRot13,
        type: "Box",
        },
        {
          args: seablockArgs14,
          position: seablockPos14,
          rotation: seablockRot14,
          type: "Box",
        },
        {
          args: seablockArgs15,
          position: seablockPos15,
          rotation: seablockRot15,
          type: "Box",
        },
        {
          args: seablockArgs16,
          position: seablockPos16,
          rotation: seablockRot16,
          type: "Box",
        },
        {
          args: seablockArgs17,
          position: seablockPos17,
          rotation: seablockRot17,
          type: "Box",
        },
        {
          args: seablockArgs18,
          position: seablockPos18,
          rotation: seablockRot18,
          type: "Box",
        },
        {
          args: seablockArgs19,
          position: seablockPos19,
          rotation: seablockRot19,
          type: "Box",
        },
        {
          args: seablockArgs20,
          position: seablockPos20,
          rotation: seablockRot20,
          type: "Box",
        },
        {
          args: seablockArgs21,
          position: seablockPos21,
          rotation: seablockRot21,
          type: "Box",
        },
        {
          args: seablockArgs22,
          position: seablockPos22,
          rotation: seablockRot22,
          type: "Box",
        },
        {
          args: seablockArgs23,
          position: seablockPos23,
          rotation: seablockRot23,
          type: "Box",
        },
        {
          args: seablockArgs24,
          position: seablockPos24,
          rotation: seablockRot24,
          type: "Box",
        },
        {
          args: seablockArgs25,
          position: seablockPos25,
          rotation: seablockRot25,
          type: "Box",
        },
        {
          args: seablockArgs26,
          position: seablockPos26,
          rotation: seablockRot26,
          type: "Box",
        },
        {
          args: seablockArgs27,
          position: seablockPos27,
          rotation: seablockRot27,
          type: "Box",
        },
        {
          args: seablockArgs28,
          position: seablockPos28,
          rotation: seablockRot28,
          type: "Box",
        },
      ],
      position: [0, 0, 0],
    }),
    useRef(null)
  );
  return (
    <>
      <mesh ref={ref1} castShadow receiveShadow>
        <Newground {...props} />
        <mesh
          visible={debug?.current ?? false}
          position={rightlandPos0}
          rotation={rightlandRot0}
        >
          <boxGeometry args={rightlandArgs0} />
          <meshBasicMaterial transparent={true} opacity={1} color="orange" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={rightlandPos1}
          rotation={rightlandRot1}
        >
          <boxGeometry args={rightlandArgs1} />
          <meshBasicMaterial transparent={true} opacity={1} color="brown" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={rightlandPos3}
          rotation={rightlandRot3}
        >
          <boxGeometry args={rightlandArgs3} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh visible={debug?.current ?? false}
              position={rightlandPos2}
              rotation={rightlandRot2}
        >
          <boxGeometry args={rightlandArgs2} />
          <meshBasicMaterial transparent={true} opacity={1} color="yellow" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={rightlandPos4}
          rotation={rightlandRot4}
        >
          <boxGeometry args={rightlandArgs4} />
          <meshBasicMaterial transparent={true} opacity={1} color="yellow" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={rightlandPos5}
          rotation={rightlandRot5}
        >
          <boxGeometry args={rightlandArgs5} />
          <meshBasicMaterial transparent={true} opacity={1} color="pink" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={rightlandPos7}
          rotation={rightlandRot7}
        >
          <boxGeometry args={rightlandArgs7} />
          <meshBasicMaterial transparent={true} opacity={1} color="brown" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={rightlandPos8}
          rotation={rightlandRot8}
        >
          <boxGeometry args={rightlandArgs8} />
          <meshBasicMaterial transparent={true} opacity={1} color="brown" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={rightlandPos9}
          rotation={rightlandRot9}
        >
          <boxGeometry args={rightlandArgs9} />
          <meshBasicMaterial transparent={true} opacity={1} color="brown" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={rightlandPos10}
          rotation={rightlandRot10}
        >
          <boxGeometry args={rightlandArgs10} />
          <meshBasicMaterial transparent={true} opacity={1} color="brown" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={rightlandPos11}
          rotation={rightlandRot11}
        >
          <boxGeometry args={rightlandArgs11} />
          <meshBasicMaterial transparent={true} opacity={1} color="brown" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={rightlandPos6}
          rotation={rightlandRot6}
        >
          <boxGeometry args={rightlandArgs6} />
          <meshBasicMaterial transparent={true} opacity={1} color="brown" />
        </mesh>

        <mesh
          visible={debug?.current ?? false}
          position={leftlandPos0}
          rotation={leftlandRot0}
        >
          <boxGeometry args={leftlandArgs0} />
          <meshBasicMaterial transparent={true} opacity={1} color="brown" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={leftlandPos1}
          rotation={leftlandRot1}
        >
          <boxGeometry args={leftlandArgs1} />
          <meshBasicMaterial transparent={true} opacity={1} color="cyan" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={leftlandPos2}
          rotation={leftlandRot2}
        >
          <boxGeometry args={leftlandArgs2} />
          <meshBasicMaterial transparent={true} opacity={1} color="green" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={leftlandPos3}
          rotation={leftlandRot3}
        >
          <boxGeometry args={leftlandArgs3} />
          <meshBasicMaterial transparent={true} opacity={1} color="gray" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={leftlandPos4}
          rotation={leftlandRot4}
        >
          <boxGeometry args={leftlandArgs4} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={leftlandPos5}
          rotation={leftlandRot5}
        >
          <boxGeometry args={leftlandArgs5} />
          <meshBasicMaterial transparent={true} opacity={1} color="pink" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={leftlandPos6}
          rotation={leftlandRot6}
        >
          <boxGeometry args={leftlandArgs6} />
          <meshBasicMaterial transparent={true} opacity={1} color="brown" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={leftlandPos7}
          rotation={leftlandRot7}
        >
          <boxGeometry args={leftlandArgs7} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={leftlandPos8}
          rotation={leftlandRot8}
        >
          <boxGeometry args={leftlandArgs8} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={leftlandPos9}
          rotation={leftlandRot9}
        >
          <boxGeometry args={leftlandArgs9} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>

        <mesh
          visible={debug?.current ?? false}
          position={bridgePos3_1_1}
          rotation={bridgeRot3_1_1}
        >
          <boxGeometry args={bridgeArgs3_1_1} />
          <meshBasicMaterial transparent={true} opacity={1} color="gray" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={bridgePos3_1_2}
          rotation={bridgeRot3_1_2}
        >
          <boxGeometry args={bridgeArgs3_1_2} />
          <meshBasicMaterial transparent={true} opacity={1} color="orange" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={bridgePos3_1_3}
          rotation={bridgeRot3_1_3}
        >
          <boxGeometry args={bridgeArgs3_1_3} />
          <meshBasicMaterial transparent={true} opacity={1} color="orange" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={bridgePos3_1_4}
          rotation={bridgeRot3_1_4}
        >
          <boxGeometry args={bridgeArgs3_1_4} />
          <meshBasicMaterial transparent={true} opacity={1} color="orange" />
        </mesh>

        <mesh
          visible={debug?.current ?? false}
          position={bridgePos3_2}
          rotation={bridgeRot3_2}
        >
          <boxGeometry args={bridgeArgs3_2} />
          <meshBasicMaterial transparent={true} opacity={1} color="gray" />
        </mesh>

        <mesh
          visible={debug?.current ?? false}
          position={bridgePos3_3_1}
          rotation={bridgeRot3_3_1}
        >
          <boxGeometry args={bridgeArgs3_3_1} />
          <meshBasicMaterial transparent={true} opacity={1} color="gray" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={bridgePos3_3_2}
          rotation={bridgeRot3_3_2}
        >
          <boxGeometry args={bridgeArgs3_3_2} />
          <meshBasicMaterial transparent={true} opacity={1} color="orange" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={bridgePos3_3_3}
          rotation={bridgeRot3_3_3}
        >
          <boxGeometry args={bridgeArgs3_3_3} />
          <meshBasicMaterial transparent={true} opacity={1} color="orange" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={bridgePos3_3_4}
          rotation={bridgeRot3_3_4}
        >
          <boxGeometry args={bridgeArgs3_3_4} />
          <meshBasicMaterial transparent={true} opacity={1} color="orange" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={bridgePos3_3_5}
          rotation={bridgeRot3_3_5}
        >
          <boxGeometry args={bridgeArgs3_3_5} />
          <meshBasicMaterial transparent={true} opacity={1} color="orange" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={leftbridgePos4_1_1}
          rotation={bridgeRot4_1}
        >
          <boxGeometry args={leftbridgeArgs4_1_1} />
          <meshBasicMaterial transparent={true} opacity={1} color="gray" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={leftbridgePos4_1_2}
          rotation={bridgeRot4_2}
        >
          <boxGeometry args={leftbridgeArgs4_1_2} />
          <meshBasicMaterial transparent={true} opacity={1} color="orange" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={leftbridgePos4_1_3}
          rotation={bridgeRot4_3}
        >
          <boxGeometry args={leftbridgeArgs4_1_3} />
          <meshBasicMaterial transparent={true} opacity={1} color="orange" />
        </mesh>

        <mesh
          visible={debug?.current ?? false}
          position={seablockPos0}
          rotation={seablockRot0}
        >
          <boxGeometry args={seablockArgs0} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos1}
          rotation={seablockRot1}
        >
          <boxGeometry args={seablockArgs1} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos2}
          rotation={seablockRot2}
        >
          <boxGeometry args={seablockArgs2} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos3}
          rotation={seablockRot3}
        >
          <boxGeometry args={seablockArgs3} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos4}
          rotation={seablockRot4}
        >
          <boxGeometry args={seablockArgs4} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos5}
          rotation={seablockRot5}
        >
          <boxGeometry args={seablockArgs5} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos6}
          rotation={seablockRot6}
        >
          <boxGeometry args={seablockArgs6} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos7}
          rotation={seablockRot7}
        >
          <boxGeometry args={seablockArgs7} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos8}
          rotation={seablockRot8}
        >
          <boxGeometry args={seablockArgs8} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos9}
          rotation={seablockRot9}
        >
          <boxGeometry args={seablockArgs9} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos10}
          rotation={seablockRot10}
        >
          <boxGeometry args={seablockArgs10} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos11}
          rotation={seablockRot11}
        >
          <boxGeometry args={seablockArgs11} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos12}
          rotation={seablockRot12}
        >
          <boxGeometry args={seablockArgs12} />
          <meshBasicMaterial transparent={true} opacity={1} color="red" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos13}
          rotation={seablockRot13}
        >
          <boxGeometry args={seablockArgs13} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos14}
          rotation={seablockRot14}
        >
          <boxGeometry args={seablockArgs14} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos15}
          rotation={seablockRot15}
        >
          <boxGeometry args={seablockArgs15} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos16}
          rotation={seablockRot16}
        >
          <boxGeometry args={seablockArgs16} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos17}
          rotation={seablockRot17}
        >
          <boxGeometry args={seablockArgs17} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos18}
          rotation={seablockRot18}
        >
          <boxGeometry args={seablockArgs18} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos19}
          rotation={seablockRot19}
        >
          <boxGeometry args={seablockArgs19} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos20}
          rotation={seablockRot20}
        >
          <boxGeometry args={seablockArgs20} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos21}
          rotation={seablockRot21}
        >
          <boxGeometry args={seablockArgs21} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos22}
          rotation={seablockRot22}
        >
          <boxGeometry args={seablockArgs22} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos23}
          rotation={seablockRot23}
        >
          <boxGeometry args={seablockArgs23} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos24}
          rotation={seablockRot24}
        >
          <boxGeometry args={seablockArgs24} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos25}
          rotation={seablockRot25}
        >
          <boxGeometry args={seablockArgs25} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos26}
          rotation={seablockRot26}
        >
          <boxGeometry args={seablockArgs26} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos27}
          rotation={seablockRot27}
        >
          <boxGeometry args={seablockArgs27} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
        <mesh
          visible={debug?.current ?? false}
          position={seablockPos28}
          rotation={seablockRot28}
        >
          <boxGeometry args={seablockArgs28} />
          <meshBasicMaterial transparent={true} opacity={1} color="blue" />
        </mesh>
      </mesh>
    </>
  );
}
