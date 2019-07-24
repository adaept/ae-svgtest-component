import { Component, Prop, h, State, Method } from '@stencil/core';

//import alert from '@iconify/icons-mdi-light/alert';

//import firstPlaceMedal from "@iconify/icons-twemoji/1st-place-medal";
//import airplane from "@iconify/icons-twemoji/airplane";
//import airplaneArrival from "@iconify/icons-twemoji/airplane-arrival";
//import airplaneDeparture from "@iconify/icons-twemoji/airplane-departure";
//import helicopter from "@iconify/icons-twemoji/helicopter";

@Component({
  tag: 'ae-svgtest-component',
  styleUrl: 'ae-svgtest-component.css',
  shadow: true
})
export class AeSvgtestComponent {
  /**
   * Title for the panel
   */
  @Prop() aetitle: string;

  /**
   * SVG content
   */
  @Prop() svgcontent: string;

  /**
   * State of the panel - visible or hidden
   */
  @State() collapsed: boolean;

  /**
   * Show/Hide the panel
   */
  @Method()
  async toggle() {
    this.collapsed = !this.collapsed;

    const svgxmlns = '<svg xmlns="http://www.w3.org/2000/svg" width="135.467" height="135.467" viewBox="0 0 135.467 135.467">'

    const mysvg = svgxmlns + '<path d="M118.439 17.935l17.028-13.817C124.63-7.513 99.863 7.028 68.903 25.936 37.94 44.838 34.843 82.65 44.13 104.464c1.327 3.107 2.728 6.117 4.282 8.954-6.618 4.877-18.504 12.82-27.5 14.314-13.159 2.184-13.935-39.264-9.289-80.713H2.335c-3.096 32.723-4.64 69.08 5.42 82.168 9.248 12.026 24.38 5.607 44.19-10.173 9.777 13.205 26.35 17.95 65.467-6.306l-4.133-5.816c-19.608 12.596-37.146 16.478-48.5-9.698-11.36-26.179-2.057-53.32 14.452-67.862 16.507-14.545 30.947-11.158 39.208-11.397" fill="currentColor" /></svg> ' +
      svgxmlns + '<path d="M121.775 7.981c-23.786-12.097-44.92-10.23-87.799 3.715C-24.17 31.889-.22 62.948 50.44 66.942v34.062l29.272-9.297v-26.08c35.869-4.254 78.083-38.472 42.064-57.646zM101.66 49.854C69.236 69.173-1.898 35.703 41.54 17.983c25.791-17.144 95.095 13.191 60.1 31.89zm-64.013 73.23l34.76 12.344 23.786-15.812-37.908-10.497-20.618 13.964z" fill="currentColor"/></svg>' +
      svgxmlns + '<path d="M104.23 2.129S88.095 14.798 78.171 22.285V.68l-22 12.993v86.433C19.43 131.56 24.896 121.16 16.82 96.926L.039 107.994c1.162 10.097 5.2 33.206 22.571 25.986 12.096-5.03 26.153-16.365 33.581-22.766v24.214l22-11.545V34.4c20.096-24.233 29.848-15.507 38.21 5.753l19.105-14.44c-8.686-19.24-22.572-30.804-31.258-23.584z" fill="currentColor"/></svg>' +
      svgxmlns + '<path d="M13.77 127.408c23.785 12.096 44.92 10.23 87.798-3.715 58.148-20.193 34.198-51.252-16.462-55.246V34.385l-29.273 9.297v26.08c-35.868 4.254-78.083 38.471-42.063 57.646zm20.114-41.873c32.424-19.32 103.559 14.15 60.119 31.871-25.79 17.144-95.094-13.191-60.1-31.89zm64.013-73.23L63.137-.038 39.35 15.773 77.258 26.27l20.618-13.964z" fill="currentColor"/></svg>' +
      svgxmlns + '<path d="M17.067 117.454L.039 131.27c10.836 11.631 35.604-2.91 66.564-21.818 30.962-18.902 34.06-56.715 24.771-78.528-1.327-3.107-2.727-6.117-4.281-8.954 6.618-4.878 18.504-12.821 27.5-14.314 13.158-2.184 13.934 39.264 9.288 80.712h9.29c3.095-32.722 4.64-69.08-5.42-82.167-9.248-12.026-24.38-5.607-44.19 10.173-9.778-13.206-26.35-17.95-65.467 6.306l4.133 5.816c19.608-12.597 37.145-16.478 48.5 9.698 11.359 26.179 2.057 53.32-14.452 67.862-16.507 14.545-30.947 11.158-39.208 11.397" fill="currentColor"/></svg>';
    this.svgcontent = mysvg;

  }

  render() {
    return (
      <div>
        <div id="aeheader" onClick={this.toggle.bind(this)}>
          <span>{this.aetitle}</span>
        </div>
        <div id="aecontent" hidden={this.collapsed}>
          <slot name="aepanel-header" />
          <div innerHTML={this.svgcontent}></div>
          <slot name="aepanel-footer" />
          {/*
          <p>Red home icon: <span class="iconify" data-icon="mdi:home"></span></p>
          <p class="light-blue-block">
            All content inside this div is light blue,
            including umbrella icon:
    <span class="iconify" data-icon="fa-umbrella"></span>
            and horizontally flipped attachment icon:
    <span class="iconify" data-icon="entypo-attachment" data-flip="horizontal"></span>
          </p>
          */}
        </div>
      </div >
    );
  }
}
