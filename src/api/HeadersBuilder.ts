export default class HeadersBuilder {
  headers: Headers = new Headers();

  append(headers: Headers): this {
    Array.from(headers.entries()).forEach(pair =>
      this.headers.append(pair[0], pair[1])
    );
    return this;
  }

  build(): Headers {
    return this.headers;
  }
}
