import { RcSesButtonDirective } from "./button";
import { ElementRef } from "@angular/core";

describe("RcSesButtonDirective", () => {
  it("removes mat-ripple attributes on init", () => {
    const buttonEl = document.createElement("button");
    buttonEl.setAttribute("mat-ripple-loader-class-name", "loader");
    buttonEl.setAttribute("mat-ripple-loader-uninitialized", "true");

    const renderer = {
      removeAttribute: (el: HTMLElement, name: string) => el.removeAttribute(name),
    } as any;

    const directive = new RcSesButtonDirective(
      document,
      new ElementRef(buttonEl),
      renderer,
    );

    directive.ngOnInit();

    expect(buttonEl.hasAttribute("mat-ripple-loader-class-name")).toBeFalse();
    expect(buttonEl.hasAttribute("mat-ripple-loader-uninitialized")).toBeFalse();
  });

  it("toggles initialized flag on lifecycle", () => {
    const buttonEl = document.createElement("button");
    const renderer = {
      removeAttribute: (el: HTMLElement, name: string) => el.removeAttribute(name),
    } as any;

    const directive = new RcSesButtonDirective(
      document,
      new ElementRef(buttonEl),
      renderer,
    );

    expect(directive.initialized).toBeUndefined();

    directive.ngAfterViewInit();
    expect(directive.initialized).toBeTrue();

    directive.ngOnDestroy();
    expect(directive.initialized).toBeFalse();
  });
});
