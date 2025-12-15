import * as React from 'react';
import { IAccordionHeaderProps } from './AccordionTypes';

const AccordionHeader: React.FC<IAccordionHeaderProps> = ({
  headerTitle,
  showHeaderIcon,
  headerIconUrl,
  iconPosition,
  togglePosition,
  headerBgColor,
  headerTextColor,
  headerFontSize,
  headerFontFamily,
  headerPadding,
  headerBorder,
  headerBorderColor,
  headerBorderWidth,
  headerRounded,
  isOpen,
  onToggle
}) => {
  const renderIcon = () => {
    if (!showHeaderIcon || !headerIconUrl) return null;

    return (
      <img
        src={headerIconUrl}
        alt="Accordion icon"
        className="me-2"
        style={{ width: 20, height: 20 }}
      />
    );
  };

  const renderToggle = () => (
    <span
      style={{
        fontSize: headerFontSize + 4,
        fontWeight: 600
      }}
    >
      {isOpen ? '−' : '+'}
    </span>
  );

  return (
    <div
      className="d-flex align-items-center"
      style={{
        backgroundColor: headerBgColor,
        color: headerTextColor,
        fontSize: headerFontSize,
        fontFamily: headerFontFamily,
        padding: headerPadding,
        cursor: 'pointer',
        border: headerBorder
          ? `${headerBorderWidth}px solid ${headerBorderColor}`
          : 'none',
        borderRadius: headerRounded ? 12 : 0
      }}
      onClick={onToggle}
      role="button"
      aria-expanded={isOpen}
    >
      {/* Toggle (Left) */}
      {togglePosition === 'left' && (
        <div className="me-2 d-flex align-items-center">
          {renderToggle()}
        </div>
      )}

      {/* Icon + Title */}
      <div className="d-flex align-items-center flex-grow-1">
        {iconPosition === 'left' && renderIcon()}
        <span className="fw-semibold">{headerTitle}</span>
        {iconPosition === 'right' && renderIcon()}
      </div>

      {/* Toggle (Right) */}
      {togglePosition === 'right' && (
        <div className="ms-auto d-flex align-items-center">
          {renderToggle()}
        </div>
      )}
    </div>
  );
};

export default AccordionHeader;
