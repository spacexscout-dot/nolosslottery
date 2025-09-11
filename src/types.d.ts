// Global type declarations

// For JSX elements that don't have explicit types
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// For Figma asset imports
declare module 'figma:asset/*' {
  const content: string;
  export default content;
}

// For image files
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}