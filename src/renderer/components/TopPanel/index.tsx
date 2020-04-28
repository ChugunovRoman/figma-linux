import * as E from "electron";
import * as React from "react";
import { observer, inject } from "mobx-react";

import Panel from "./toppanel";
import { Settings } from "Store/Settings";
import "./style.scss";

interface TopPanelProps {
  tabs?: TabsStore;
  settings?: Settings;
}
const remote = require('electron').remote;
const win = remote.getCurrentWindow(); 

@inject("tabs")
@inject("settings")
@observer
class TopPanel extends React.Component<TopPanelProps, {}> {
  props: TopPanelProps;

  constructor(props: TopPanelProps) {
    super(props);

    this.props = props;
  }

  private onMainTab = (e: React.MouseEvent<HTMLDivElement> & Event) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();

    E.ipcRenderer.send("maintab");
    this.props.tabs!.setFocus(1);
  };

  private onOpenSettings = (e: React.MouseEvent<HTMLDivElement> & Event) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();

    E.remote.app.emit("handle-command", "openSettings");
  };

  private onHomeClick = (event: React.MouseEvent<HTMLDivElement> & Event) => {
    E.ipcRenderer.send("toHome");
  };
  private closew =  (event: React.MouseEvent<HTMLDivElement> & Event) => {
    win.close();
  };
  private maxiw =  (event: React.MouseEvent<HTMLDivElement> & Event) => {
    if (win.isMaximized()) {
    win.restore();
    } else {
    win.maximize();
    }
  };
  private miniw =  (event: React.MouseEvent<HTMLDivElement> & Event) => {
    win.minimize();
  };

  private newTab = () => {
    E.ipcRenderer.send("newtab");
  };

  render() { 
    return (
      <Panel
      
        miniw={this.miniw}
        maxiw={this.maxiw}
        closew={this.closew}
        scalePanel={this.props.settings.settings.ui.scalePanel}
        current={this.props.tabs!.current}
        onMainTab={this.onMainTab}
        openSettings={this.onOpenSettings}
        onHomeClick={this.onHomeClick}
        newTab={this.newTab}
        getTab={this.props.tabs!.getTab}
      />
    );
  }
}


export default TopPanel;
