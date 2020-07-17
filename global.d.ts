declare module 'remark-html' {
  const html: any;
  export default html;
}

export interface PokeType {
  name: string;
  img: string;
}

export interface PreLoadData {
  name: string;
  sprites: { front_default: string };
}

export type AnyData = Record<string, unknown> | { example: string };

export type Language = 'eng' | 'spa';
