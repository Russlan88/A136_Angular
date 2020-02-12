import { BaseModel } from './base.model';

export interface IModelGalleryResource {
  readonly image: string;
  readonly text: string;
  readonly date: string;
  readonly type: string;
}
export class ModelGalleryResource extends BaseModel<ModelGalleryResource, IModelGalleryResource> {
  readonly image: string;
  readonly text: string;
  readonly date: string;
  readonly type: string;
  constructor({
    image = '',
    text = '',
    date = '',
    type = ''
  }: Partial<IModelGalleryResource> = {}) {
    super();
    this.image = image;
    this.text = text;
    this.date = date;
    this.type = type;
  }
  clone(): ModelGalleryResource {
    return new ModelGalleryResource(this.serialize());
  }
  serialize(): IModelGalleryResource {
    return {
      image: this.image,
      text: this.text,
      date: this.date,
      type: this.type,
    };
  }
}
