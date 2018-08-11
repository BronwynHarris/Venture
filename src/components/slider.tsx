import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Right from '../icons/right';
import Left from '../icons/left';
import { colors } from '../style';

export interface Props {
}

export interface State {}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 300,
    overflowY: 'hidden',
    overflowX: 'auto',
    backgroundColor: colors.lightGrey
  },
  slider: {
    height: '100%'
  },
  controls: {
    position: 'absolute',
    display: 'flex',
    right: 10,
    bottom: 10
  },
  icon: {
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d0efeb',
    borderRadius: 5,
    cursor: 'pointer',
    margin: 5,
    paddingTop: 2
  },
  image: {
    width: '100%',
    margin: 'auto',
    display: 'flex'
  }
});


class Slider extends React.Component<Props, State> {
  private slider: any;

  private onPrev = () => {
    this.slider.slickPrev();
  }

  private onNext = () => {
    this.slider.slickNext();
  }

  public render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.controls)}>
          <div className={css(styles.icon)} onClick={this.onPrev}>
            <Left size={20}/>
          </div>
          <div className={css(styles.icon)} onClick={this.onNext}>
            <Right size={20}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
