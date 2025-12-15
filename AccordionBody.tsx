src/webparts/mcsAccordionWebpart/components/AccordionBody.tsx

import * as React from 'react';
import { IAccordionBodyProps } from './AccordionTypes';

const AccordionBody: React.FC<IAccordionBodyProps> = ({
  bodyText,
  bodyImageUrl,
  bodyBgColor,
  bodyTextColor,
  bodyFontSize,
  bodyFontFamily,
  bodyPadding,
  bodyBorder,
  bodyBorderColor,
  bodyBorderWidth,
  bodyRounded
}) => {
  return (
    <div
      className="accordion-body"
      style={{
        backgroundColor: bodyBgColor,
        color: bodyTextColor,
        fontSize: bodyFontSize,
        fontFamily: bodyFontFamily,
        padding: bodyPadding,
        border: bodyBorder
          ? `${bodyBorderWidth}px solid ${bodyBorderColor}`
          : 'none',
        borderRadius: bodyRounded ? 12 : 0
      }}
    >
      {/* Text Content */}
      {bodyText && (
        <div
          style={{
            lineHeight: 1.6
          }}
          dangerouslySetInnerHTML={{ __html: bodyText }}
        />
      )}

      {/* Image Content */}
      {bodyImageUrl && (
        <div className="mt-3">
          <img
            src={bodyImageUrl}
            alt="Accordion content"
            className="img-fluid"
          />
        </div>
      )}
    </div>
  );
};

export default AccordionBody;
