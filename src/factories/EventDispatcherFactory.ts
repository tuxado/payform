import {
  IEventDispatcher,
  IEventDispatcherFactory,
  IEventDispatcherFactoryConstructor,
} from "../../typings";
import { EventDispatcher } from "../services/EventDispatcher";

export function createEventDispatcher (): IEventDispatcher  {
  const dispatcher = new EventDispatcher();
  return dispatcher;
};
