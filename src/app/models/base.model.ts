export abstract class BaseModel<M, S> {
  abstract clone(): M;
  abstract serialize(): S;
}

