import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Color, Interior, Wheels } from 'types';
import { configuratorAtoms } from '../state';

export function useCarInitialState() {
  const [isStateSet, setIsStateSet] = useState(false);
  const colors = useRecoilValue(configuratorAtoms.carColors);
  const wheels = useRecoilValue(configuratorAtoms.carWheels);
  const interiors = useRecoilValue(configuratorAtoms.carInteriors);

  const [initialColor, setInitialColor] = useState<Color>({
    colorId: '',
    colorName: '',
    colorPrice: 0,
    iconUrl: '',
  });
  const [initialWheels, setIntialWheels] = useState<Wheels>({
    wheelsId: '',
    wheelsModel: '',
    wheelsPrice: 0,
    iconUrl: '',
  });
  const [initialInterior, setInitialInterior] = useState<Interior>({
    interiorId: '',
    interiorName: '',
    interiorPrice: 0,
    iconUrl: '',
    imgUrl: [],
  });

  function setInitialCarState() {
    setInitialColor(colors[0]);
    setIntialWheels(wheels[0]);
    setInitialInterior(interiors[0]);
    setIsStateSet(true);
  }

  useEffect(() => {
    if (colors.length !== 0 && wheels.length !== 0 && interiors.length !== 0) {
      setInitialCarState();
    }
  }, [colors, wheels, interiors]);

  return {
    isStateSet,
    setInitialCarState,
    initialColor,
    initialWheels,
    initialInterior,
  };
}
