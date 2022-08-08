import { useEffect, useState } from 'react';
import { useCarExterior } from 'modules/firebase/hooks/useCarExterior';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { configuratorAtoms } from '../state';

export function useCarInitialState() {
  const { getCarExterior } = useCarExterior();
  const [isLoading, setIsLoading] = useState(true);

  const colors = useRecoilValue(configuratorAtoms.carColors);
  const wheels = useRecoilValue(configuratorAtoms.carWheels);
  const interiors = useRecoilValue(configuratorAtoms.carInteriors);
  const [selectedColor, setSelectedColor] = useRecoilState(
    configuratorAtoms.selectedColor,
  );
  const [selectedWheels, setSelectedWheels] = useRecoilState(
    configuratorAtoms.selectedWheels,
  );
  const [selectedInterior, setSelectedInterior] = useRecoilState(
    configuratorAtoms.selectedInterior,
  );

  const resetColors = useResetRecoilState(configuratorAtoms.carColors);
  const resetWheels = useResetRecoilState(configuratorAtoms.carWheels);
  const resetInteriors = useResetRecoilState(configuratorAtoms.carInteriors);
  const resetSelectedColors = useResetRecoilState(
    configuratorAtoms.selectedColor,
  );
  const resetSelectedWheels = useResetRecoilState(
    configuratorAtoms.selectedWheels,
  );
  const resetSelectedInteriors = useResetRecoilState(
    configuratorAtoms.selectedInterior,
  );
  const resetExterior = useResetRecoilState(configuratorAtoms.carExterior);

  function setInitialCarState() {
    if (
      !selectedColor.colorId &&
      !selectedInterior.interiorId &&
      !selectedWheels.wheelsId
    ) {
      setSelectedColor(colors[0]);
      setSelectedWheels(wheels[0]);
      setSelectedInterior(interiors[0]);
      getCarExterior(colors[0].colorId, wheels[0].wheelsId);
    }
    setIsLoading(false);
  }

  function resetSelectedCarState() {
    resetColors();
    resetWheels();
    resetInteriors();
    resetExterior();
    resetSelectedColors();
    resetSelectedWheels();
    resetSelectedInteriors();
  }

  useEffect(() => {
    if (colors.length !== 0 && wheels.length !== 0 && interiors.length !== 0) {
      setInitialCarState();
    }
  }, [colors, wheels, interiors]);

  return {
    isLoading,
    resetSelectedCarState,
    setInitialCarState,
  };
}
