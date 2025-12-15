src/webparts/mcsAccordionWebpart/McsAccordionWebpart.tsx

import * as React from 'react';
import Accordion from './components/Accordion';
import { IMcsAccordionWebpartProps } from './IMcsAccordionWebpartProps';
import styles from './McsAccordionWebpart.module.scss';

// Bootstrap CSS (loaded once)
import 'bootstrap/dist/css/bootstrap.min.css';

const McsAccordionWebpart: React.FC<IMcsAccordionWebpartProps> = (props) => {
  return (
    <div className={styles.mcsAccordionWebpart}>
      <Accordion
        headerTitle={props.headerTitle}
        showHeaderIcon={props.showHeaderIcon}
        headerIconUrl={props.headerIconUrl}
        iconPosition={props.iconPosition}
        togglePosition={props.togglePosition}
        headerBgColor={props.headerBgColor}
        headerTextColor={props.headerTextColor}
        headerFontSize={props.headerFontSize}
        headerFontFamily={props.headerFontFamily}
        headerPadding={props.headerPadding}
        headerBorder={props.headerBorder}
        headerBorderColor={props.headerBorderColor}
        headerBorderWidth={props.headerBorderWidth}
        headerRounded={props.headerRounded}
        bodyText={props.bodyText}
        bodyImageUrl={props.bodyImageUrl}
        bodyBgColor={props.bodyBgColor}
        bodyTextColor={props.bodyTextColor}
        bodyFontSize={props.bodyFontSize}
        bodyFontFamily={props.bodyFontFamily}
        bodyPadding={props.bodyPadding}
        bodyBorder={props.bodyBorder}
        bodyBorderColor={props.bodyBorderColor}
        bodyBorderWidth={props.bodyBorderWidth}
        bodyRounded={props.bodyRounded}
      />
    </div>
  );
};

export default McsAccordionWebpart;
