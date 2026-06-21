import { Post } from '../../domain/entities/Post';

export class PostModel implements Post {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly body: string,
  ) {}

  static fromJson(json: any): PostModel {
    return new PostModel(
      json.id,
      json.title,
      json.body,
    );
  }

  toJson() {
    return {
      id: this.id,
      title: this.title,
      body: this.body,
    };
  }
}