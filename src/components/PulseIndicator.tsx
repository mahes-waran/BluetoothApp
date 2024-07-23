import {
  Canvas,
  Path,
  Skia,
  useClock,
} from '@shopify/react-native-skia';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useDerivedValue } from 'react-native-reanimated';
import { Colors } from '../assets/styles/colors/colors';

const PulseIndicator = () => {
  const path = Skia.Path.Make();
  path.moveTo(0, 80);
  path.lineTo(100, 80);
  path.lineTo(110, 50);
  path.lineTo(125, 155);
  path.lineTo(140, 0);
  path.lineTo(155, 100);
  path.lineTo(165, 80);
  path.lineTo(250, 80);

  const interval = 900;

  const clock = useClock();


  const forwardState = useDerivedValue(() => {
    if (clock.value % (interval * 2) < interval) {
      return 1;
    }
    return (clock.value % interval) / interval;
  }, [clock]);

  const rewindState = useDerivedValue(() => {
    if (clock.value % (interval * 2) < interval) {
      return (clock.value % interval) / interval;
    }
    return 0;
  }, [clock]);

  return (
    <Canvas style={styles.animationContainer}>
      <Path
        path={path}
        color={Colors.primaryColor}
        style="stroke"
        strokeWidth={5}
        strokeCap="round"
        start={rewindState}
        end={forwardState}
      />
    </Canvas>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    width: 250,
    height: 160,
    marginBottom: 30,
  },
});

export default PulseIndicator;
