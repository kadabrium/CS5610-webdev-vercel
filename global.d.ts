

/// <reference types="nativewind/types" />


import "tailwindcss-react-native/types.d";


declare module "*.svg" {
  import type * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}