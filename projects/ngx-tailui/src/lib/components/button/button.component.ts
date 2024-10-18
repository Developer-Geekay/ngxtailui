import { ChangeDetectorRef, Component, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';
import {
  className,
  color,
  fullWidth,
  size,
  variant,
  DefaultButton,
  DefaultButtonPropsMapper,
  ButtonVarientMapper,
} from '../../types/componentTypes/button';
import { NgxTheme } from '../../theme/theme-base';
import { buttonTheme } from '../../theme/components/button/button-theme';
import { ConvertToClassName, ObjectToStr } from '../../helpers/string-helper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent extends NgxTheme {
  variant = input<variant>(DefaultButton.variant);
  size = input<size>(DefaultButton.size);
  color = input<color>(DefaultButton.color);
  fullWidth = input<fullWidth>(DefaultButton.fullWidth);
  className = input<className>(DefaultButton.className);
  rounded = input<boolean>(DefaultButton.rounded);
  ripple = input<boolean>(DefaultButton.ripple);

  protected buttonClass!: string;

  ngOnInit(): void {
    this.buttonClass = this.getCompiledClassName();
    this.size;
  }

  override getCompiledClassName(): string {
    var className = '';

    // set initial class
    className += ConvertToClassName(ObjectToStr(buttonTheme['initial']));

    // get size class
    className += ConvertToClassName(DefaultButtonPropsMapper[this.size()]);
    //get variant class
    className += ConvertToClassName(
      ObjectToStr(ButtonVarientMapper[this.variant()][this.color()])
    );

    if (this.className) {
      className += ConvertToClassName(this.className());
    }
    if (this.rounded()) {
      className += ConvertToClassName('rounded-full');
    }
    if (this.fullWidth()) {
      className += ConvertToClassName('!w-full');
    }
    var addedClasses = twMerge(ConvertToClassName(className).split(' '));
    return addedClasses;
  }
}
