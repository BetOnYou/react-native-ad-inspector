import { NativeModules } from 'react-native';

type AdInspectorType = {
  open(): void;
};

const { AdInspector } = NativeModules;

export default AdInspector as AdInspectorType;
