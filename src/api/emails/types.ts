export interface ISendNewsletterSignupEmail {
  emailId: string;
}

export interface Envelope {
  from: string;
  to: string[];
}

export interface SendNewsletterSignupEmailResponse {
  accepted: string[];
  rejected: any[];
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: Envelope;
  messageId: string;
}
