export interface ISendNewsletterSignupEmail {
  emailId: string;
}

export interface Envelope {
  from: string;
  to: string[];
}

export interface SendEmailResponse {
  accepted: string[];
  rejected: any[];
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: Envelope;
  messageId: string;
}

export interface ISendPasswordResetEmail {
  emailId: string;
}
