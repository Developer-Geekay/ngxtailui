import { IPropsMapper } from '../../../types/generic';

export const CheckBoxTheme: IPropsMapper<object> = {
  input: {
    peer: 'peer',
    position: 'relative',
    appearance: 'appearance-none',
    width: 'w-5',
    height: 'h-5',
    borderWidth: 'border',
    borderRadius: 'rounded-md',
    borderColor: 'border-blue-gray-200',
    cursor: 'cursor-pointer',
    transition: 'transition-all',
    before: {
      content: "before:content['']",
      display: 'before:block',
      bg: 'before:bg-blue-gray-500',
      width: 'before:w-12',
      height: 'before:h-12',
      borderRadius: 'before:rounded-full',
      position: 'before:absolute',
      top: 'before:top-2/4',
      left: 'before:left-2/4',
      transform: 'before:-translate-y-2/4 before:-translate-x-2/4',
      opacity: 'before:opacity-0 hover:before:opacity-10',
      transition: 'before:transition-opacity',
    },
  },
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'items-center',
    cursor: 'cursor-pointer',
    p: 'p-3',
    borderRadius: 'rounded-full',
  },
  icon: {
    color: 'text-white',
    position: 'absolute',
    top: 'top-2/4',
    left: 'left-2/4',
    translate: '-translate-y-2/4 -translate-x-2/4',
    pointerEvents: 'pointer-events-none',
    opacity: 'opacity-0 peer-checked:opacity-100',
    transition: 'transition-opacity',
  },
  disabled: {
    opacity: 'opacity-50',
    pointerEvents: 'pointer-events-none',
    cursor : 'cursor-not-allowed'
  },
  label: {
    color: 'text-gray-700',
    fontWeight: 'font-light',
    userSelect: 'select-none',
    cursor: 'cursor-pointer',
  },
};
