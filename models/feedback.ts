// feedback.model.ts
export class Feedback {
  constructor(
    public name: string,
    public email: string,
    public message: string,
    public rating?: number, // Optional rating
  ) {}
}
