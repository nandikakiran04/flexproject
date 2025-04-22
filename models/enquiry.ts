export class Enquiry {
    constructor(
      public name: string,
      public email: string,
      public phone: string,
      public company?: string,
      public serviceInterestedIn?: string,
      public message?: string,
      public submittedAt: Date = new Date()
    ) {}
  }
  