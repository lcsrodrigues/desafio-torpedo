import * as React from 'react';
import styles from './GestaoProjetos.module.scss';
import { IGestaoProjetosProps } from './IGestaoProjetosProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Dashboard from './dashboard/index'

export default class GestaoProjetos extends React.Component<IGestaoProjetosProps, {}> {
  public render(): React.ReactElement<IGestaoProjetosProps> {
    return (
      <Dashboard props={this.props} />
    );
  }
}
