import { useEffect, useState } from 'react';
import { useCarExterior } from 'modules/firebase/hooks/useCarExterior';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { configuratorAtoms } from '../state';

export function useCarInitialState() {
  const colors = useRecoilValue(configuratorAtoms.carColors);
  const wheels = useRecoilValue(configuratorAtoms.carWheels);
  const interiors = useRecoilValue(configuratorAtoms.carInteriors);
  const setSelectedColor = useSetRecoilState(configuratorAtoms.selectedColor);
  const setSelectedWheels = useSetRecoilState(configuratorAtoms.selectedWheels);
  const setSelectedInterior = useSetRecoilState(
    configuratorAtoms.selectedInterior,
  );
  const { getCarExterior } = useCarExterior();
  const [isLoading, setIsLoading] = useState(true);

  const resetColors = useResetRecoilState(configuratorAtoms.carColors);
  const resetWheels = useResetRecoilState(configuratorAtoms.carWheels);
  const resetInteriors = useResetRecoilState(configuratorAtoms.carWheels);
  const resetExterior = useResetRecoilState(configuratorAtoms.carExterior);

  function setInitialCarState() {
    getCarExterior(colors[0].colorId, wheels[0].wheelsId);
    setSelectedColor(colors[0]);
    setSelectedWheels(wheels[0]);
    setSelectedInterior(interiors[0]);
    setIsLoading(false);
  }

  function resetSelectedCarState() {
    resetColors();
    resetWheels();
    resetInteriors();
    resetExterior();
  }

  useEffect(() => {
    if (colors.length > 0 && wheels.length > 0 && interiors.length > 0) {
      setInitialCarState();
    }
  }, [colors, wheels, interiors]);

  return {
    isLoading,
    resetSelectedCarState,
  };
}
