// Type definitions for ThinkJs 3.x
// Project: https://thinkjs.org/
// Definitions by: SijieCai <https://github.com/SijieCai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as _Koa from 'koa';
import * as Helper from 'think-helper';
import * as ThinkCluster from 'think-cluster';
import * as ThinkLogger from 'think-logger';

declare namespace ThinkJs {

  export var think: Think;

  export interface Koa extends _Koa {
    think: Think;
  }

  export interface IController { }
  export interface ILogic { }
  export interface IService { }
  export interface IModel {}
  class Controller implements IController {
    constructor(ctx: Koa);
    ctx: Koa;
    assign?(name: string, value: any): any;
    render?(file: string, config: object): Promise<string>;
    render?(config: object): Promise<string>;
    display?(file: string, config: object): Promise<any>;
    display?(): Promise<any>;
    /**
     * get session
     * @memberOf Controller
     */
    session?(name: string): Promise<string>;
    /**
     * set session
     * @memberOf Controller
     */
    session?(name: string, value: string): Promise<string>;
    session?(name: null): Promise<string>;
  }

  class Logic extends Controller implements ILogic { }

  class Service implements IService { }

  class Model implements IModel {}

  export interface Think extends Helper.Think {
    app: Koa;
    isCli: boolean;
    /**
     * Get thisnk.app.env.
     */
    env: string;
    version: string;
    messenger: ThinkCluster.Messenger;
    Controller: typeof Controller;
    Logic: typeof Logic;
    Service: typeof Service;
    Model: typeof Model;
    ROOT_PATH: string;
    APP_PATH: string;
    logger: ThinkLogger.Logger;

    service(name: string, m: any, ...args: any[]): any;
    beforeStartServer(fn: Function): Promise<any>;
  }
  export class Application {
    constructor(options: {
      ROOT_PATH: string,
      APP_PATH?: string,
      watch?: any,
      transpiler?: any,
      notifier?: Function,
      env?: string
    })
  }
}

export = ThinkJs;
