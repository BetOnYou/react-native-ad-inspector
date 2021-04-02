import { NativeModules } from 'react-native';

type AdInspectorType = {
  multiply(a: number, b: number): Promise<number>;
};

const { AdInspector } = NativeModules;

export default AdInspector as AdInspectorType;
