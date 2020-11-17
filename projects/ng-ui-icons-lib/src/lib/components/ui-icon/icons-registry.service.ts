import {Injectable} from '@angular/core';
import { UiIcon } from './icons';

@Injectable({
    providedIn: 'root'
})
export class UiIconsRegistry {

    private registry = new Map<string, string>();

    public registerIcons(icons: UiIcon[]): void {
        icons.forEach((icon: UiIcon) => this.registry.set(icon.name, icon.data));
    }

    public getIcon(iconName: string): string | undefined {
        return this.registry.get(iconName);
    }
}
