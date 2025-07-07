import HeartIcon from "./heart.svg?react";
import TestTubeIcon from "./test-tube.svg?react";
import ScalpelIcon from "./scalpel.svg?react";
import RxCodeIcon from "./rx-code.svg?react";
import NetworkIcon from "./network.svg?react";
import MkgCodeIcon from "./mkg-code.svg?react";
import ExpandViewIcon from "./expand-view.svg?react";
import CxCodeIcon from "./cx-code.svg?react";
import CollapseViewIcon from "./collapse-view.svg?react";
import CalculatorIcon from "./calculator.svg?react";
import ChevronDownCircleIcon from "./chevron-down-circle.svg?react";
import ChevronUpCircleIcon from "./chevron-up-circle.svg?react";
import EyeIcon from "./eye.svg?react";

// Export all icons as a map for dynamic access
// matches the name of the icon from the API (mockData.ts)
export const icons = {
  heart: HeartIcon,
  testTube: TestTubeIcon,
  scalpel: ScalpelIcon,
  rxCode: RxCodeIcon,
  network: NetworkIcon,
  mkgCode: MkgCodeIcon,
  expandView: ExpandViewIcon,
  cxCode: CxCodeIcon,
  collapseView: CollapseViewIcon,
  calculator: CalculatorIcon,
  chevronDownCircle: ChevronDownCircleIcon,
  chevronUpCircle: ChevronUpCircleIcon,
  eye: EyeIcon,
} as const;

// Export individual icons to be used in the app as an component
export {
  HeartIcon,
  TestTubeIcon,
  ScalpelIcon,
  RxCodeIcon,
  NetworkIcon,
  MkgCodeIcon,
  ExpandViewIcon,
  CxCodeIcon,
  CollapseViewIcon,
  CalculatorIcon,
  ChevronDownCircleIcon,
  ChevronUpCircleIcon,
  EyeIcon,
};

// Type for icon names
export type IconName = keyof typeof icons;
