export type Event =
  | {
    type: "LOG_IN";
    payload: {
      userId: string;
    };
  }
  | {
    type: "LOG_OUT";
  };

const sendEvent = (
  eventType: Event["type"],
  payload?: any
) => { };

sendEvent("LOG_IN", {
  userId: "123",
});
