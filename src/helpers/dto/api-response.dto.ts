export class MessageType {
  property: string;
  message: string;
}

export class APIResponseDto<T> {
  statusCode: number;
  messages: MessageType[] | [];
  data: T;
}
