import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoViewSize.web.ts
// and on native platforms to ExpoViewSize.ts
import ExpoViewSizeModule from './ExpoViewSizeModule';
import ExpoViewSizeView from './ExpoViewSizeView';
import { ChangeEventPayload, ExpoViewSizeViewProps } from './ExpoViewSize.types';

// Get the native constant value.
export const PI = ExpoViewSizeModule.PI;

export function hello(): string {
  return ExpoViewSizeModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoViewSizeModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoViewSizeModule ?? NativeModulesProxy.ExpoViewSize);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoViewSizeView, ExpoViewSizeViewProps, ChangeEventPayload };
