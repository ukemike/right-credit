import type { ReactNode } from 'react';

export type ButtonType = {
  text: string;
  icon?: any;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'ghost';
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: any;
  fontSize?: number;
  fontWeight?: number;
  px?: number;
  py?: number;
  color?: string;
  bg?: string;
  bgHover?: string;
  textHover?: string;
  border?: string;
  borderHover?: string;
  bgDisabled?: string;
  textDisabled?: string;
  borderDisabled?: string;
  type?: 'button' | 'submit' | 'reset';
  borderRadius?: number;
  width?: string;
};

export type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
  label?: string;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  bg?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  px?: number;
  py?: number;
  leftIcon?: string;
  rightIcon?: string;
  maxLength?: number;
};

export type ServiceCardType = {
  title: string;
  description: string;
  icon: string;
  id?: number;
};

export type DashboardCardType = {
  stat: number;
  description: string;
  icon?: string;
  id?: number;
  isPrefix?: boolean;
  isPercent?: boolean;
};

export type WorkCardType = {
  title: string;
  description: string;
  id?: number;
};

export type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  body?: ReactNode;
  footer?: ReactNode;
  fontWeight?: number;
  size?: string;
  p?: number;
  fontSize?: number;
  color?: string;
  showCloseButton?: boolean;
};

export type SelectProps = {
  name: string;
  label?: string;
  options: any[];
  placeholder?: string;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  bg?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  px?: number;
  py?: number;
};

export type NairaNumberFormatProps = {
  value: number;
  isBold?: boolean;
  isPrefix?: boolean;
  fontSize?: string;
  fontWeight?: number;
  color?: string;
};
