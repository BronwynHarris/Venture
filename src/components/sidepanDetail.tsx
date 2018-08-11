import * as React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Monument, State as StateRoot } from '../reducers/index';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors } from '../style';
import Back from '../icons/back';

export interface Props {
  monument: Monument;
}

interface State {
}

export interface RouteProps {
  id: string;
}

const styles = StyleSheet.create({
  container: {
    width: 520,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  monumentDetails: {
    padding: '20px 32px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  leading: {
    color: colors.darkBlue,
    margin: '10px 0px'
  },
  title: {
    color: colors.darkBlue,
    fontSize: 24,
    lineHeight: '32px',
    padding: '4px 0px'
  },
  region: {
    color: colors.grey,
    fontWeight: 400
  },
  description: {
    fontSize: 16,
    fontWeight: 300,
    color: colors.darkBlue,
    marginTop: 12,
    lineHeight: '26px',
    overflow: 'auto'
  },
  footer: {
    borderBottom: '1px solid #edeaea',
    height: 56,
    display: 'flex',
    alignItems: 'center'
  },
  allSites: {
    display: 'flex',
    alignItems: 'center',
    width: 56,
    height: '100%',
    justifyContent: 'center',
    fontWeight: 400,
    cursor: 'pointer',
    borderRight: '1px solid #edeaea'
  },
  back: {
    marginRight: 4
  }
});

class SidepanDetail extends React.Component<Props, State> {

  public state = {
  };

  private onGoBack = () => {
    browserHistory.push('/');
  }

  public render() {
    const { monument } = this.props;

    if (!monument) {
      return null;
    }

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.footer)}>
          <div className={css(styles.allSites)} onClick={this.onGoBack}>
            <Back className={css(styles.back)}/>
          </div>
        </div>
        <div>

        </div>
        <div className={css(styles.monumentDetails)}>
          <h1 className={css(styles.title)}>{monument.site}</h1>
          <div className={css(styles.leading)}>{ monument.states }</div>
          <div className={css(styles.description)}>
            { monument.short_description }
          </div>
        </div>
        <div ref='flights'>
          <img src={monument.flights} width="575px"/>
        </div>
      </div>
    );
  }
}

export default connect((state: StateRoot, props: any) => ({
  monument: state.monuments[props.params.id]
}))(SidepanDetail);
