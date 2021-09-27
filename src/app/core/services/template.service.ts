import { Injectable, TemplateRef } from '@angular/core';

@Injectable({providedIn: 'root'})
export default class TemplateService {
    get templates(): {[key: string]: TemplateRef<any> | undefined} {
        return this._templates;
    }
    set templates(templates: {[key: string]: TemplateRef<any> | undefined}) {
        this._templates = templates;
    }
    private _templates: {[key: string]: any} = {}

    get(token: string): TemplateRef<any> | undefined {
        return this._templates[token];
    }

    register(token: string, tpl?: TemplateRef<any> | undefined): void {
        this._templates[token] = tpl;
    }
}
