export type StatusName = 'SENT' | 'VIEWED' | 'ACCEPTED' | 'REJECTED';

export interface Status {
  readonly name: StatusName;
}
