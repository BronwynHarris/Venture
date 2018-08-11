import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Cross } from '../icons/cross';

export interface Props {
  onDismissFullscreen: React.MouseEventHandler<HTMLElement>;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    margin: 'auto',
    backgroundColor: 'rgba(0,0,0,0.9)',
    zIndex: 1
  },
  slider: {
    width: '80%',
    height: '100%',
    margin: 'auto',
    display: 'flex'
  },
  imageContainer: {
    height: '100vh',
    display: 'flex !important',
    justifyContent: 'center',
    alignItems: 'center'
  },
  crossContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 20,
    opacity: 0.8
  }
});

export default class Fullscreen extends React.Component<Props> {
  render() {
    const { onDismissFullscreen } = this.props;

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.crossContainer)}><Cross onClick={onDismissFullscreen}/></div>

      </div>
    );
  }
}
