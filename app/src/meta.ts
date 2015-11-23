export interface ServiceInfo {
  name:string;
  versions?:string[];
  prefix?:string;
  input?:string;
  output?:string;
}

export interface Descriptor {
  version: string
  metadata: Metadata
  documentation: string
  operations: OperationMap
  shapes: ShapeMap
}

export interface ShapeMap {
  [index: string]: Shape
}

export interface Shape {
  type: string
  pattern?: string
  required?: Array<string>
  members?: MemberMap
  exception?: boolean
  documentation?: string
}

export interface Member {
  shape: string
}

export interface MemberMap {
  [index: string]: Member
}

export interface OperationMap {
  [index: string]: Operation
}

export interface Input {
  shape: string
}

export interface Output {
  shape: string
  documentation: string
}

export interface Error2 {
  httpStatusCode: number
}

export interface Error {
  shape: string
  error: Error2
  exception: boolean
  documentation: string
}

export interface Operation {
  name: string
  http: any
  input: Input
  output: Output
  errors: Error[]
}

export interface Metadata {
  apiVersion: string
  endpointPrefix: string
  serviceAbbreviation: string
  serviceFullName: string
  signatureVersion: string
  protocol: string
}
