interface IEvent {
    name: string;
    listener: Function;
    priority: number;
    once: boolean;
}

interface IEventDispatcher {
    on(event: string, listener: Function, priority?: number): void;
    once(event: string, listener: Function, priority?: number): void;
    off(event: string, listener: Function): void;
    dispatch(event: string, ...args: any[]): void;
}

interface IEventDispatcherConstructor {
    new (): IEventDispatcher;
}

export { IEvent, IEventDispatcher, IEventDispatcherConstructor};
