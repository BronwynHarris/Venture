import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  sidepan: {
    zIndex: 10,
    backgroundColor: "#d0efeb",
    top: 0,
    borderRight: '1px solid rgb(80%, 80%, 80%)',
    width: '575px'
  }
});

export interface Props {
  children?: JSX.Element;
}

const SidepanContainer: React.StatelessComponent<Props> = ({ children }) => (
  <div className={css(styles.sidepan)}>
    { children }
  </div>
);

export default SidepanContainer;
