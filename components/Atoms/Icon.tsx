import { Image, ImageProps, StyleSheet } from 'react-native';

export function Icon({ width, height, ...props }: ImageProps) {
  return <Image {...props} style={[{ width, height }, props.style]} />;
}
