src/webparts/mcsAccordionWebpart/McsAccordionWebpartWebPart.ts

import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle,
  PropertyPaneDropdown,
  PropertyPaneSlider,
  PropertyPaneColorPicker
} from '@microsoft/sp-webpart-base';

import * as React from 'react';
import * as ReactDom from 'react-dom';
import McsAccordionWebpart from './McsAccordionWebpart';
import { IMcsAccordionWebpartProps } from './IMcsAccordionWebpartProps';

export interface IMcsAccordionWebPartProps extends IMcsAccordionWebpartProps {}

export default class McsAccordionWebpartWebPart extends BaseClientSideWebPart<IMcsAccordionWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMcsAccordionWebpartProps> = React.createElement(
      McsAccordionWebpart,
      { ...this.properties }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: { description: 'Accordion Configuration' },
          groups: [
            {
              groupName: 'Header Options',
              groupFields: [
                PropertyPaneTextField('headerTitle', { label: 'Header Title' }),
                PropertyPaneToggle('showHeaderIcon', { label: 'Show Header Icon' }),
                PropertyPaneTextField('headerIconUrl', { label: 'Header Icon URL' }),
                PropertyPaneDropdown('iconPosition', {
                  label: 'Icon Position',
                  options: [
                    { key: 'left', text: 'Left' },
                    { key: 'right', text: 'Right' }
                  ]
                }),
                PropertyPaneDropdown('togglePosition', {
                  label: 'Toggle Position',
                  options: [
                    { key: 'left', text: 'Left' },
                    { key: 'right', text: 'Right' }
                  ]
                }),
                PropertyPaneColorPicker('headerBgColor', { label: 'Header Background Color' }),
                PropertyPaneColorPicker('headerTextColor', { label: 'Header Text Color' }),
                PropertyPaneSlider('headerFontSize', { label: 'Header Font Size', min: 8, max: 36, step: 1 }),
                PropertyPaneTextField('headerFontFamily', { label: 'Header Font Family' }),
                PropertyPaneSlider('headerPadding', { label: 'Header Padding', min: 0, max: 50, step: 1 }),
                PropertyPaneToggle('headerBorder', { label: 'Header Border' }),
                PropertyPaneColorPicker('headerBorderColor', { label: 'Header Border Color' }),
                PropertyPaneSlider('headerBorderWidth', { label: 'Header Border Width', min: 0, max: 10, step: 1 }),
                PropertyPaneToggle('headerRounded', { label: 'Header Rounded Corners' })
              ]
            },
            {
              groupName: 'Body Options',
              groupFields: [
                PropertyPaneTextField('bodyText', { label: 'Body Text', multiline: true }),
                PropertyPaneTextField('bodyImageUrl', { label: 'Body Image URL' }),
                PropertyPaneColorPicker('bodyBgColor', { label: 'Body Background Color' }),
                PropertyPaneColorPicker('bodyTextColor', { label: 'Body Text Color' }),
                PropertyPaneSlider('bodyFontSize', { label: 'Body Font Size', min: 8, max: 36, step: 1 }),
                PropertyPaneTextField('bodyFontFamily', { label: 'Body Font Family' }),
                PropertyPaneSlider('bodyPadding', { label: 'Body Padding', min: 0, max: 50, step: 1 }),
                PropertyPaneToggle('bodyBorder', { label: 'Body Border' }),
                PropertyPaneColorPicker('bodyBorderColor', { label: 'Body Border Color' }),
                PropertyPaneSlider('bodyBorderWidth', { label: 'Body Border Width', min: 0, max: 10, step: 1 }),
                PropertyPaneToggle('bodyRounded', { label: 'Body Rounded Corners' })
              ]
            }
          ]
        }
      ]
    };
  }
}
