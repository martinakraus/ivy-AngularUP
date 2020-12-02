import {
  Component, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-ivy-components',
  templateUrl: './ivy.component.html',
  styleUrls: ['./ivy.component.scss'],
})
export class IvyComponent {
  @ViewChild('lazyCat', {read: ViewContainerRef, static: true})
  vcr: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver,
              private injector: Injector) {
  }

  lazyLoadComponent(): void {
    import('./lazy-cat/lazy-cat.component').then((m) => {
      const cmp = m.LazyCatComponent;
      const factory = this.cfr.resolveComponentFactory(cmp);
      this.vcr.createComponent(factory, null, this.injector);
    });

    // ToDo implement lazy loading component
  }
}
