import React, { Component } from 'react';

import { Button } from '@material-ui/core';
import styles from '../styles/pages/index.module.css';
import Prism from 'prismjs';

class IndexPage extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <div>
        <div className="col center-xs" style={{ marginTop: 40 }}>
          <h1 className={styles.title}>Material Bread</h1>
          <h4 className={styles.subtitle}>
            React Native Material Design Components
          </h4>
        </div>
        <div className="row center-xs" style={{ marginTop: 40 }}>
          <pre
            style={{
              display: 'inline-block',
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 8,
              paddingBottom: 8,
            }}>
            <code
              className="language-javascript"
              style={{
                width: 'auto',
                fontSize: 14,
              }}>{`npm i material-bread`}</code>
          </pre>
        </div>
        <div className="row center-xs" style={{ marginTop: 40 }}>
          <Button variant="outlined" color="primary">
            React Native
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            style={{ marginLeft: 16, marginRight: 16 }}>
            React
          </Button>

          <Button variant="outlined" color="default">
            Playground
          </Button>
        </div>
      </div>
    );
  }
}

export default IndexPage;