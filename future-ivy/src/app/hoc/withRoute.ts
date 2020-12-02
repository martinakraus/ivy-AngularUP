import {
    ChangeDetectionStrategy,
    Injectable,
    OnInit,
    Type,
    ɵComponentDef,
    ɵComponentType,
    ɵɵdefineComponent,
    ɵɵdirectiveInject,
    ɵɵelement,
    ɵɵproperty,
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

export function withRoute(inner: Type<any>) {
    const ngComponent = inner as ɵComponentType<any>;

    const def = ngComponent.ɵcmp as ɵComponentDef<any>;
    const elementName = def.selectors[ 0 ][ 0 ] as string;

    @Injectable()
    class HigherOrderComponent implements OnInit {

        static ɵcmp: ɵComponentDef<HigherOrderComponent>;
        static ɵfac: () => HigherOrderComponent;

        params: any = {};

        constructor(private readonly route: ActivatedRoute) {
        }

        ngOnInit() {
            this.route.params.subscribe(params => {
                this.params = params;
            });
        }
    }

    HigherOrderComponent.ɵfac = () => new HigherOrderComponent(ɵɵdirectiveInject(ActivatedRoute));

    HigherOrderComponent.ɵcmp = ɵɵdefineComponent({
        vars: 1,
        decls: 2,
        consts: [ [ 3, 'catId' ] ],
        directives: [
            inner,
        ],
        changeDetection: ChangeDetectionStrategy.Default,
        selectors: [ [] ],
        template: (rf, ctx) => {

            // tslint:disable-next-line: no-bitwise
            if ( rf & 1 ) {
                ɵɵelement(0, elementName);
            }
            // tslint:disable-next-line:no-bitwise
            if ( rf & 2 ) {

                // tslint:disable-next-line:forin
                for ( const prop in ctx.params ) {
                    const compProp = def.inputs[ prop ];
                    if ( compProp ) {
                        ɵɵproperty(prop, ctx.params[ compProp ]);
                    }
                }
            }
        },
        type: HigherOrderComponent,
    });

    return HigherOrderComponent;
}
