import { IPropsMapper } from '../../../types/generic';

export const SliderTheme: IPropsMapper<object> = {
  container: {
    position: 'relative',
    width: 'w-full',
    minWidth: 'min-w-[200px]',
  },
  slider: {
    width: 'w-full',
    position: 'absolute',
    inset: 'inset-0',
    backgroundColor: 'bg-transparent',
    cursor: 'cursor-pointer',
    outline: 'focus:outline-none focus:outline-0',
    appearance: 'appearance-none [-webkit-appearance:none]',
  },
  track: {
    height:
      '[&::-webkit-slider-runnable-track]:h-full [&::-moz-range-track]:h-full',
    borderRadius:
      '[&::-webkit-slider-runnable-track]:rounded-full [&::-moz-range-track]:rounded-full',
    backgroundColor:
      '[&::-webkit-slider-runnable-track]:bg-blue-gray-100 [&::-moz-range-track]:bg-blue-gray-100',
  },
  thumb: {
    appearance:
      '[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:[-webkit-appearance:none] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:[-webkit-appearance:none]',
    borderRadius:
      '[&::-moz-range-thumb]:rounded-full [&::-webkit-slider-thumb]:rounded-full',
    border: '[&::-moz-range-thumb]:border-0 [&::-webkit-slider-thumb]:border-0',
    ringWidth: '[&::-moz-range-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-2',
    ringColor:
      '[&::-moz-range-thumb]:ring-current [&::-webkit-slider-thumb]:ring-current',
    backgroundColor:
      '[&::-moz-range-thumb]:bg-white [&::-webkit-slider-thumb]:bg-white',
    position:
      '[&::-moz-range-thumb]:relative [&::-webkit-slider-thumb]:relative',
    zIndex: '[&::-moz-range-thumb]:z-20 [&::-webkit-slider-thumb]:z-20',
  },
  bar: {
    position: 'absolute',
    inset: 'inset-0',
    zIndex: 'z-10',
    borderRadius: 'rounded-l-full',
    height: 'h-full',
    pointerEvents: 'pointer-events-none',
    backgroundColor: 'bg-current',
  },
  sm: {
    container: {
      height: 'h-1',
    },
    thumb: {
      width: '[&::-moz-range-thumb]:w-2.5 [&::-webkit-slider-thumb]:w-2.5',
      height: '[&::-moz-range-thumb]:h-2.5 [&::-webkit-slider-thumb]:h-2.5',
      marginTop:
        '[&::-moz-range-thumb]:-mt-[3px] [&::-webkit-slider-thumb]:-mt-[3px]',
    },
    slider: {},
    track: {},
    bar: {},
  },
  md: {
    container: {
      height: 'h-2',
    },
    thumb: {
      width: '[&::-moz-range-thumb]:w-3.5 [&::-webkit-slider-thumb]:w-3.5',
      height: '[&::-moz-range-thumb]:h-3.5 [&::-webkit-slider-thumb]:h-3.5',
      marginTop:
        '[&::-moz-range-thumb]:-mt-[3px] [&::-webkit-slider-thumb]:-mt-[3px]',
    },
    slider: {},
    track: {},
    bar: {},
  },
  lg: {
    container: {
      height: 'h-3',
    },
    thumb: {
      width: '[&::-moz-range-thumb]:w-5 [&::-webkit-slider-thumb]:w-5',
      height: '[&::-moz-range-thumb]:h-5 [&::-webkit-slider-thumb]:h-5',
      marginTop: '[&::-moz-range-thumb]:-mt-1 [&::-webkit-slider-thumb]:-mt-1',
    },
    slider: {},
    track: {},
    bar: {},
  },
};
