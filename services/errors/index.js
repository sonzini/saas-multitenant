export default class CustomError extends Error {
  constructor(message, code, data) {
    super(message);
    this.code = code;
    this.data = data;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export class Error401Unauthorized extends CustomError {
  constructor(message, data) {
    super(message, 401, data);

    Object.setPrototypeOf(this, Error401Unauthorized.prototype);
  }
}

export class Error404NotFound extends CustomError {
  constructor(message, data) {
    super(message, 404, data);

    Object.setPrototypeOf(this, Error404NotFound.prototype);
  }
}

export class Error400BadRequest extends CustomError {
  constructor(message, data) {
    super(message, 400, data);

    Object.setPrototypeOf(this, Error400BadRequest.prototype);
  }
}

export class Error501NotImplemented extends CustomError {
  constructor(message, data) {
    super(message, 501, data);

    Object.setPrototypeOf(this, Error501NotImplemented.prototype);
  }
}
