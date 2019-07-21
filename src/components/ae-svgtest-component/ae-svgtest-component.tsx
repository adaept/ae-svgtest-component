import { Component, Prop, h, State, Method } from '@stencil/core';

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
   * State of the panel - visible or hidden
   */
  @State() collapsed: boolean;

  /**
   * Show/Hide the panel
   */
  @Method()
  async toggle() {
    this.collapsed = !this.collapsed;
  }

  render() {
    return (
      <div>
        <div id="aeheader" onClick={this.toggle.bind(this)}>
          <span>{this.aetitle}</span>
        </div>
        <div id="aecontent" hidden={this.collapsed}>
          <slot />
        </div>
      </div>
    );
  }
}
