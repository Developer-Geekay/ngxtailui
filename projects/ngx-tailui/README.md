Here’s an updated `README.md` with the Angular version and Node.js version included:

---

# ngx-tailui

**ngx-tailui** is an Angular library built using **Angular 18** and **Node.js 20** that provides a collection of UI components styled with Tailwind CSS. The library is designed to integrate the power of Angular's component-based architecture with the utility-first approach of Tailwind CSS, making it easier to create modern, responsive UIs.

## Features

- **Built with Angular 18**: Leverage the latest Angular features for a seamless development experience.
- **Tailwind CSS Integration**: Pre-designed, customizable components with utility-first CSS.
- **Lightweight and Performant**: Minimal CSS bundle size, ensuring optimized performance.
- **Responsive Components**: Ready-to-use components that are responsive by default.
- **Simple Setup**: Quick and easy to integrate with any Angular project.

## Requirements

- **Node.js 20+**
- **Angular 18+**
- **Tailwind CSS**

## Installation

### Step 1: Install Tailwind CSS

Ensure you have **Tailwind CSS** installed in your Angular project. If not, follow these steps:

1. Install **Tailwind CSS**, **PostCSS**, and **Autoprefixer**:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. Create the Tailwind configuration file:

   ```bash
   npx tailwindcss init
   ```

3. Update your `tailwind.config.js` to include Angular files:

   ```javascript
   module.exports = {
     content: [
       './src/**/*.{html,ts}',
       './projects/**/*.{html,ts}'
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

4. Import Tailwind styles into your global `styles.scss` or `styles.css`:

   ```scss
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Step 2: Install ngx-tailui

After setting up Tailwind CSS, you can install **ngx-tailui**:

```bash
npm install ngx-tailui
```

## Usage

To use the library, import the `NgxTailuiModule` in your Angular module:

```typescript
import { NgxTailuiModule } from 'ngx-tailui';

@NgModule({
  imports: [NgxTailuiModule, ...],
  declarations: [...],
  bootstrap: [...]
})
export class AppModule {}
```

Now you can start using ngx-tailui components in your templates. For example:

```html
<ngx-tailui-button type="primary" size="large">
  Click Me!
</ngx-tailui-button>
```

## Development

The library is built using:

- **Angular 18** for a robust and modern front-end framework.
- **Node.js 20** for efficient server-side development and build processes.

## Contribution

Contributions are welcome! If you want to contribute, please fork the repository and submit a pull request. Ensure you adhere to our coding standards and guidelines.

## License

**ngx-tailui** is open-source and licensed under the [MIT License](LICENSE).

---
