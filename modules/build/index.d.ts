/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface Env {
  buildDir?: string
  currentDir: string
  flags: Array<string>
  home: string
  tmpDir: string
  vsixPath: string
}
/** Main Component. */
export declare class Main {
  constructor(env: Env)
  init(): void
}
