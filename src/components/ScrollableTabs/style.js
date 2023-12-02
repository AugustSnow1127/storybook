import styled from "styled-components";
import { Tabs } from "antd";

export const ScrollableTabsTemplate = styled(Tabs)`
  // common.less
  .rc-tabs {
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }
  .rc-tabs-bar, .rc-tabs-nav-container {
    font-size: 14px;
    line-height: 1.5;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    outline: none;
    zoom: 1;
    transition: padding .45s;
  }
  .rc-tabs-ink-bar {
    z-index: 1;
    position: absolute;
    box-sizing: border-box;
    margin-top: -3px;
    background-color: #108ee9;
    transform-origin: 0 0;
    width: 0;
    height: 0;
  }
  .rc-tabs-ink-bar-animated {
    transition: transform .3s cubic-bezier(0.35,0,0.25,1), left .3s cubic-bezier(0.35,0,0.25,1), top .3s cubic-bezier(0.35,0,0.25,1), height .3s cubic-bezier(0.35,0,0.25,1), width .3s cubic-bezier(0.35,0,0.25,1);
  }
  .rc-tabs-tab-prev, .rc-tabs-tab-next {
    user-select: none;
    z-index: 1;
    line-height: 36px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    position: absolute;
  }
  .rc-tabs-tab-prev-icon, .rc-tabs-tab-next-icon {
    position: relative;
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    line-height: inherit;
    vertical-align: baseline;
    text-align: center;
    text-transform: none;
    font-smoothing: antialiased;
    text-stroke-width: 0;
    font-family: sans-serif;
  }
  .rc-tabs-tab-prev-icon:before, .rc-tabs-tab-next-icon:before {
    display: block;
  }
  .rc-tabs-tab-btn-disabled, .rc-tabs-tab-btn-disabled:hover {
    // cursor: no-drop;
    // color: #ccc;
    // background-color: white;
    // border: 1px solid rgb(218,218,224);
  }
  .rc-tabs-nav-wrap {
    overflow: hidden;
  }
  .rc-tabs-nav {
    box-sizing: border-box;
    padding-left: 0;
    position: relative;
    margin: 0;
    float: left;
    list-style: none;
    display: inline-block;
    transform-origin: 0 0;
  }
  .rc-tabs-nav-animated {
    transition: transform 0.5s cubic-bezier(0.35,0,0.25,1);
  }
  .rc-tabs-nav:before, .rc-tabs-nav:after {
    display: table;
    content: " ";
  }
  .rc-tabs-nav:after {
    clear: both;
  }
  .rc-tabs-rtl .rc-tabs-nav {
    float: right;
  }
  .rc-tabs-tab {
    box-sizing: border-box;
    position: relative;
    display: block;
    transition: color .3s cubic-bezier(0.35,0,0.25,1);
    padding: 8px 20px;
    font-weight: 500;
    cursor: pointer;
  }
  .rc-tabs-tab-active, .rc-tabs-tab-active:hover {
    font-weight: 600;
    cursor: default;
    transform: translateZ(0);
  }
  .rc-tabs-tab-disabled {
    cursor: no-drop;
    color: #ccc !important;
    font-weight: 400;
  }
  .rc-tabs-tab-disabled:hover {
    color: #ccc !important;
    font-weight: 400;
  }
  .rc-tabs-tab-btn-disabled {
    cursor: no-drop;
    color: rgba(185,185,185,0.4);
    font-weight: 400;
  }
  .rc-tabs-tab-btn-disabled:hover {
    color: rgba(185,185,185,0.4);
    font-weight: 400;
  }
  .rc-tabs-content {
    zoom: 1;
  }
  .rc-tabs-content .rc-tabs-tabpane {
    overflow: auto;
  }
  .rc-tabs-content-animated {
    transition: transform .3s cubic-bezier(0.35,0,0.25,1), margin-left .3s cubic-bezier(0.35,0,0.25,1), margin-top .3s cubic-bezier(0.35,0,0.25,1);
    display: flex;
    will-change: transform;
  }
  .rc-tabs-content-animated .rc-tabs-tabpane {
    flex-shrink: 0;
  }
  .no-flexbox .rc-tabs-content {
    transform: none !important;
    overflow: auto;
  }
  .no-csstransitions .rc-tabs-tabpane-inactive, .no-flexbox .rc-tabs-tabpane-inactive, .rc-tabs-content-no-animated .rc-tabs-tabpane-inactive {
    display: none;
  }
  .rc-tabs-rtl {
    direction: rtl;
  }

  // top.less
  .rc-tabs-top {
    border-bottom: 2px solid #F5C910;
  }
  .rc-tabs-top .rc-tabs-content {
    width: 100%;
  }
  .rc-tabs-top .rc-tabs-bar {
    border-bottom: 1px solid #f3f3f3;
  }
  .rc-tabs-top .rc-tabs-nav-container-scrolling {
    padding-left: 32px;
    padding-right: 32px;
  }
  .rc-tabs-top .rc-tabs-nav-scroll {
    width: 99999px;
  }
  .rc-tabs-top .rc-tabs-nav-swipe {
    position: relative;
    left: 0;
  }
  .rc-tabs-top .rc-tabs-nav-swipe .rc-tabs-nav {
    display: flex;
    flex: 1;
    width: 100%;
  }
  .rc-tabs-top .rc-tabs-nav-swipe .rc-tabs-nav .rc-tabs-tab {
    display: flex;
    flex-shrink: 0;
    margin-right: 0;
    padding: 8px 0;
    justify-content: center;
  }
  .rc-tabs-top .rc-tabs-nav-wrap {
    // width: 100%;
    // margin-left: 32px;
  }
  .rc-tabs-top .rc-tabs-content-animated {
    flex-direction: row;
  }
  .rc-tabs-top .rc-tabs-content-animated .rc-tabs-tabpane {
    width: 100%;
  }
  .rc-tabs-top .rc-tabs-tab-next {
    // right: 2px;
  }
  .rc-tabs-top .rc-tabs-tab-next-icon:before {
    content: ">";
  }
  .rc-tabs-top.rc-tabs-rtl .rc-tabs-tab-next {
    left: 2px;
    right: auto;
  }
  .rc-tabs-top .rc-tabs-tab-prev {
    left: 0;
  }
  .rc-tabs-top .rc-tabs-tab-prev-icon:before {
    content: "<";
  }
  .rc-tabs-top.rc-tabs-rtl .rc-tabs-tab-prev {
    right: 0;
    left: auto;
  }
  .rc-tabs-top .rc-tabs-tab-prev, .rc-tabs-top .rc-tabs-tab-next {
    margin-right: -2px;
    width: 0;
    height: 0;
    top: 0;
    text-align: center;
    opacity: 0;
    transition: width .3s, height .3s, opacity .3s;
  }
  .rc-tabs-top .rc-tabs-tab-arrow-show {
    opacity: 1;
    width: 32px;
    height: 100%;
    color: #449AFC;
  }
  .rc-tabs-top .rc-tabs-tab-arrow-show:hover:not(.rc-tabs-tab-btn-disabled) {
    border-color: #449AFC;
    background-color: #B4E1FE;
    color: #449AFC;
  }
  .rc-tabs-top .rc-tabs-ink-bar {
    height: 2px;
    bottom: 0;
    left: 0;
  }
  .rc-tabs-top.rc-tabs-rtl .rc-tabs-ink-bar {
    right: 0;
    left: auto;
  }
  .rc-tabs-top .rc-tabs-tab {
    float: left;
    height: 100%;
    background: white;
  }
  .rc-tabs-top.rc-tabs-rtl .rc-tabs-tab {
    float: right;
    margin-left: 30px;
    margin-right: 0;
  }
  .rc-tabs-top .rc-tabs-tabpane-inactive {
    height: 0;
    overflow: visible;
  }
`;


export const ScrollableTabsStyle = styled.div`
  .rc-tabs-top .rc-tabs-nav-wrap {
    width: calc(100% - 50px);
    position: relative;
    left: ${(props) => (props.hasScrollBtn ? "87px" : "0px")};
  }

  .rc-tabs-top .rc-tabs-tab {
    background: white;
    border-color: rgb(218, 218, 224) rgb(218, 218, 224) transparent;
    border-radius: 4px 4px 0px 0px;
    padding: 13px 36px;
    line-height: 21px;
    text-align: center;
    border-width: 1px 1px 2px;
    border-style: solid;
    margin-right: 5px !important;
    min-width: ${(props) => (props.size === "large" ? "270px" : "0px")};
    font-size: 16px;
    color: rgba(0,0,0,0.65);
  }

  .rc-tabs-tab-active, .rc-tabs-tab-active:hover {
    color: black !important;
  }

  .rc-tabs-top .rc-tabs-tab-arrow-show {
    background: white;
    width: 52px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(218, 218, 224);
    // color: rgb(185, 185, 185);
    font-size: 20px;
  }

  .rc-tabs-top .rc-tabs-tab-arrow-show:hover {
    // border-color: #F5C910;
    // background-color: #F5C910;
    // color: #ffffff;
  }

  .rc-tabs-top .rc-tabs-tab-arrow-show:first-child {
    // border: 1px solid red;
  }

  .rc-tabs-top .rc-tabs-tab-arrow-show:nth-child(2) {
    margin-left: 25px;
  }

  .rc-tabs-tab-active, .rc-tabs-tab-active:hover {
    border-bottom: 2px solid #F5C910 !important;
  }

  .rc-tabs-tab-btn-disabled, .rc-tabs-tab-btn-disabled:hover {
    cursor: no-drop;
    color: rgba(185,185,185,0.4) !important;
    font-weight: 400 !important;
    background-color: #FFFFFF !important;
    border-color: rgb(218, 218, 224) !important;
  }
`;

export const ScrollableVersionTabsStyle = styled.div`
  .rc-tabs-top .rc-tabs-nav-wrap {
    width: 100%;
    position: relative;
    left: ${(props) => (props.hasScrollBtn ? "32px" : "0px")};
    background: white;
    border-bottom: 1px solid rgba(185, 185, 185, 0.4);
  }

  .rc-tabs-top {
    border-bottom: none !important;
  }

  .rc-tabs-top .rc-tabs-tab {
    padding: 4px 36px;
    border-bottom: 2px solid white;
    color: rgba(0,0,0,0.65);
    font-weight: 400;
  }

  .rc-tabs-tab-active, .rc-tabs-tab-active:hover {
    color: #F5C910 !important;
    font-weight: 600 !important;
  }

  .rc-tabs-top .rc-tabs-tab-arrow-show {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0 !important;
    // border-right: 1px solid rgb(185, 185, 185) !important;
    border-bottom: 1px solid rgb(185, 185, 185) !important;
    // color: rgb(185, 185, 185);
    font-size: 14px;
  }

  .rc-tabs-top .rc-tabs-tab-arrow-show:hover {
    // border-color: #F5C910;
    // background-color: #F5C910;
    // color: #ffffff;
    border: 0 !important;
    // border-right: 1px solid rgb(185, 185, 185) !important;
    border-bottom: 1px solid rgb(185, 185, 185) !important;
  }

  .rc-tabs-tab-active, .rc-tabs-tab-active:hover {
    border-bottom: 3px solid #F5C910 !important;
  }

  .rc-tabs-tab-btn-disabled, .rc-tabs-tab-btn-disabled:hover {
    cursor: no-drop;
    color: rgba(185,185,185,0.4) !important;
    font-weight: 400 !important;
    background-color: #FFFFFF !important;
    border: 0 !important;
    // border-right: 1px solid rgb(185, 185, 185) !important;
    border-bottom: 1px solid rgb(185, 185, 185) !important;
  }
`;

export const ScrollableSubTabsStyle = styled.div`
  border: 1px solid rgb(185, 185, 185);
  border-bottom-width: 0px;

  .rc-tabs-top .rc-tabs-nav-wrap {
    width: 100%;
    position: relative;
    left: ${(props) => (props.hasScrollBtn ? "32px" : "0px")};
    background: #EBEBEB;
  }

  .rc-tabs-top {
    border-bottom: none !important;
  }

  .rc-tabs-top .rc-tabs-tab {
    padding: 4px 36px;
    color: rgba(0,0,0,0.65);
    font-weight: 400;
  }
  .rc-tabs-top .rc-tabs-tab:not(.rc-tabs-tab-active) {
    background: #EBEBEB;
  }

  .rc-tabs-tab-active, .rc-tabs-tab-active:hover {
    background: #FFFFFF !important;
    font-weight: bold !important;
    color: black !important;
  }

  .rc-tabs-top .rc-tabs-tab-arrow-show {
    background: #EBEBEB;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0 !important;
    border-right: 1px solid rgb(185, 185, 185) !important;
    border-bottom: 1px solid rgb(185, 185, 185) !important;
    // color: rgb(185, 185, 185);
    font-size: 14px;
  }

  .rc-tabs-top .rc-tabs-tab-arrow-show:hover:not(.rc-tabs-tab-btn-disabled) {
    // border-color: #F5C910;
    // background-color: #F5C910 !important;
    // color: #ffffff;
    border: 0 !important;
    border-right: 1px solid rgb(185, 185, 185) !important;
    border-bottom: 1px solid rgb(185, 185, 185) !important;
  }

  .rc-tabs-tab-btn-disabled, .rc-tabs-tab-btn-disabled:hover {
    background-color: #EBEBEB !important;
    border: 0 !important;
    border-right: 1px solid rgb(185, 185, 185) !important;
    border-bottom: 1px solid rgb(185, 185, 185) !important;
    cursor: no-drop;
    color: rgba(185,185,185,0.4) !important;
  }

  // TabPane會用直線分割
  .rc-tabs-tab:not(.rc-tabs-tab-active)::before {
    content: "";
    position: absolute;
    width: 1px;
    background: rgb(185, 185, 185);
    top: 3px;
    height: 24px;
    left: 0px;
  }
  .rc-tabs-tab:first-child::before {
    background: transparent !important;
  }
  .rc-tabs-tab-active + .rc-tabs-tab::before {
    background: transparent !important;
  }
`;

export const ScrollableSubTabsContainer = styled.div`
  border: 1px solid rgb(185, 185, 185);
  border-top-width: 0px;
`;

export const ScrollableStepTabsStyle = styled.div`
  .rc-tabs-top .rc-tabs-nav-wrap {
    width: 100%;
    position: relative;
    left: ${(props) => (props.hasScrollBtn ? "32px" : "0px")};
    background: white;
    border-bottom: 1px solid rgba(185, 185, 185, 0.4);
  }

  .rc-tabs-top {
    border-bottom: none !important;
  }

  .rc-tabs-top .rc-tabs-tab {
    display: flex;
    justify-content: center;
    padding: 4px 12px;
    border: 0;
    border-left: 1px solid rgb(185, 185, 185);
    border-right: 1px solid rgb(185, 185, 185);
    border-bottom: 1px solid rgb(185, 185, 185);
    color: rgba(0,0,0,0.65);
    font-weight: 400;
    img:nth-child(1){
      display: inline;
    }
    img:nth-child(2){
      display: none;
    }
  }

  .rc-tabs-tab-active, .rc-tabs-tab-active:hover {
    color: black !important;
    font-weight: bold !important;
    ${(props) => props.hasicon === "true" && (
    `
        img:nth-child(1){
          display: none !important;
        }
        img:nth-child(2){
          display: inline !important;
        }
      `
  )}
  }

  .rc-tabs-top .rc-tabs-tab-arrow-show {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0 !important;
    border-right: 1px solid rgb(185, 185, 185) !important;
    border-bottom: 1px solid rgb(185, 185, 185) !important;
    // color: rgb(185, 185, 185);
    font-size: 14px;
    height: 97% !important;
  }

  .rc-tabs-top .rc-tabs-tab-arrow-show:hover {
    // border-color: #F5C910;
    // background-color: #F5C910;
    // color: #ffffff;
    border: 0 !important;
    border-right: 1px solid rgb(185, 185, 185) !important;
    border-bottom: 1px solid rgb(185, 185, 185) !important;
    height: 97% !important;
  }

  .rc-tabs-tab-btn-disabled, .rc-tabs-tab-btn-disabled:hover {
    cursor: no-drop;
    color: rgba(185,185,185,0.4) !important;
    font-weight: 400 !important;
    background-color: #FFFFFF !important;
    border: 0 !important;
    border-right: 1px solid rgb(185, 185, 185) !important;
    border-bottom: 1px solid rgb(185, 185, 185) !important;
  }
`;