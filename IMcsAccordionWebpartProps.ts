src/webparts/mcsAccordionWebpart/IMcsAccordionWebpartProps.ts

export interface IMcsAccordionWebpartProps {
  /* ===============================
     Accordion Header Configuration
     =============================== */

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

  /* ===============================
     Accordion Body Configuration
     =============================== */

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
