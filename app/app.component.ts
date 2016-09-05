import {Component} from 'angular2/core';
import {BootstrapPanel} from './bs-panel.component'

@Component({
    selector: 'my-app',    
    template: `                        
            <bs-panel>
                <div class='heading'>Cultscultscults</div>
                <div class='body'>High Road</div>
                <div class='body'>I Can Hardly Make You Mine</div>
            </bs-panel>
        `,    
    directives: [BootstrapPanel]
})
export class AppComponent {
    
}