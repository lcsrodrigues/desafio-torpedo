import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'GestaoProjetosWebPartStrings';
import GestaoProjetos from './components/GestaoProjetos';
import { IGestaoProjetosProps } from './components/IGestaoProjetosProps';

export interface IGestaoProjetosWebPartProps {
  title: string;
  active:string;
  relativeUrl:string;
}

export default class GestaoProjetosWebPart extends BaseClientSideWebPart<IGestaoProjetosWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IGestaoProjetosProps> = React.createElement(
      GestaoProjetos,
      {
        title: this.properties.title,
        active:this.properties.active,
        relativeUrl:this.context.pageContext.web.serverRelativeUrl
      }
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
          groups: [
            {
              groupName: "Configuration",
              groupFields: [
                PropertyPaneTextField('title', {
                  label: "Title"
                }),
                PropertyPaneDropdown('active', {
                  label: "Filter",
                  options:[
                    {
                      key:'all',
                      text:'Todos os itens'
                    },
                    {
                      key:'true',
                      text:'Ativos'
                    },
                    {
                      key:'false',
                      text:'Inativos'
                    }
                ]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
