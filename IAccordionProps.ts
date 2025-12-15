src/webparts/mcsAccordionWebpart/components/IAccordionProps.ts

/**
 * Accordion Header Props
 */
export interface IAccordionHeaderProps {
  headerTitle: string;
  showHeaderIcon: boolean;
  headerIconUrl?: string;

  iconPosition: 'left' | 'right';
  togglePosition: 'left' | 'right';

  headerBgColor: string;
  headerTextColor: string;
  headerFontSize: number;
  headerFontFamily: string;
  headerPadding: number;

  headerBorder: boolean;
  headerBorderColor: string;
  headerBorderWidth: number;

  headerRounded: boolean;

  isOpen: boolean;
  onToggle: () => void;
}

/**
 * Accordion Body Props
 */
export interface IAccordionBodyProps {
  bodyText: string;
  bodyImageUrl?: string;

  bodyBgColor: string;
  bodyTextColor: string;
  bodyFontSize: number;
  bodyFontFamily: string;
  bodyPadding: number;

  bodyBorder: boolean;
  bodyBorderColor: string;
  bodyBorderWidth: number;

  bodyRounded: boolean;
}

/**
 * Combined Accordion Props
 * Used by Accordion.tsx
 */
export interface IAccordionProps
  extends Omit<IAccordionHeaderProps, 'isOpen' | 'onToggle'>,
    IAccordionBodyProps {}
