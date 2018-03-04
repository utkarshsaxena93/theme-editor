import * as React from 'react';

import { PreviewIframe } from './Styles';

export type Props = any;

class Preview extends React.Component<Props, never> {
  private iframeNode: HTMLIFrameElement;
  
  constructor(props: Props) {
    super(props);
    this.setIframeNode = this.setIframeNode.bind(this);
  }

  componentDidMount() {
    this.iframeNode.onload = () => {
      window.frames[0].postMessage(['a'], '*');
    };
  }

  shouldComponentUpdate() {
    return false;
  }
  
  render() {
    return (
      <iframe style={PreviewIframe} src="http://localhost:3001/" ref={this.setIframeNode}/>
    );
  }
  
  private setIframeNode(node: HTMLIFrameElement) {
    if (node == null) {
      return;
    }

    this.iframeNode = node;
  }
}

export default Preview;
