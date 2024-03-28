import * as React from 'react';

import { ExpoViewSizeViewProps } from './ExpoViewSize.types';

export default function ExpoViewSizeView(props: ExpoViewSizeViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
