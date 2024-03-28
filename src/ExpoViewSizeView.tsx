import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";

import { ExpoViewSizeViewProps } from "./ExpoViewSize.types";

const NativeView: React.ComponentType<ExpoViewSizeViewProps> =
  requireNativeViewManager("ExpoViewSizeModule");

export default function ExpoViewSizeView(props: ExpoViewSizeViewProps) {
  return <NativeView {...props} />;
}
