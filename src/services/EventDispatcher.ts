import {
  // DispatchFunction,
  IEvent,
  IEventDispatcher,
  IEventDispatcherConstructor,
} from "../../typings";

export const EventDispatcher: IEventDispatcherConstructor = class EventDispatcher
  implements IEventDispatcher
{
  private events: { [event: string]: IEvent[] } = {};

  private static instance: IEventDispatcher;

  public on(event: string, listener: Function, priority: number = 0): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push({
      name: event,
      listener: listener,
      priority: priority,
      once: false,
    });
    this.events[event].sort((a, b) => b.priority - a.priority);
  }
  /*

  public static getInstance(): IEventDispatcher {
    if (!EventDispatcher.instance) {
      EventDispatcher.instance = new EventDispatcher();
    }
    return EventDispatcher.instance;
  }
  */

  public once(event: string, listener: Function, priority: number = 0): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push({
      name: event,
      listener: listener,
      priority: priority,
      once: true,
    });
    this.events[event].sort((a, b) => b.priority - a.priority);
  }

  public off(event: string, listener: Function): void {
    if (!this.events[event]) {
      return;
    }
    const index = this.events[event].findIndex((e) => e.listener === listener);
    if (index > -1) {
      this.events[event].splice(index, 1);
    }
  }

  public dispatch(event: string, ...args: any[]): void {
    if (!this.events[event]) {
      return;
    }
    for (let i = 0; i < this.events[event].length; i++) {
      let e = this.events[event][i];
      e.listener(...args);
      if (e.once) {
        this.events[event].splice(i, 1);
        i--;
      }
    }
  }
};
interface IDispatcherFunction {
  instance: IEventDispatcher;
  registerListener: (
    event: string,
    listener: Function,
    priority?: number
  ) => void;
  registerOneTimeListener: (
    event: string,
    listener: Function,
    priority?: number
  ) => void;
  removeListener: (event: string, listener: Function) => void;
}
/*
const dispatcher = (() => {
  const instance = EventDispatcher.getInstance();
  // Shortcut function to register a listener for an event
  return {
    registerListener: (
      event: string,
      listener: Function,
      priority?: number
    ): void => {
      instance.on(event, listener, priority);
    },

    // Shortcut function to register a listener for an event that will be removed after being triggered once
    registerOneTimeListener: (
      event: string,
      listener: Function,
      priority?: number
    ): void => {
      instance.once(event, listener, priority);
    },

    // Shortcut function to remove a listener for an event
    removeListener: (event: string, listener: Function): void => {
      instance.off(event, listener);
    },
  };
})();

const dispatch: DispatchFunction = (event: string, ...args: any[]) => {
  const instance = EventDispatcher.getInstance();
  instance.dispatch(event, ...args);
};
*/

//  export { dispatch, dispatcher };
