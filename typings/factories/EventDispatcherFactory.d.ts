import { IEventDispatcher } from "../services";

export interface IEventDispatcherFactory {}

export interface IEventDispatcherFactoryConstructor {
  create(): IEventDispatcher;
}
