// Type definitions for aws-sdk - AWS Lambda
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2015-03-31
   * endpointPrefix: lambda
   * serviceAbbreviation: 
   * signatureVersion: v4
   * protocol: rest-json
   *
   * AWS LambdaOverview

This is the AWS Lambda API Reference . The AWS Lambda Developer Guide provides
additional information. For the service overview, go to What is AWS Lambda
[http://docs.aws.amazon.com/lambda/latest/dg/welcome.html] , and for information
about how the service works, go to AWS Lambda: How it Works
[http://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction.html] in the 
AWS Lambda Developer Guide .
   *
   */
  export class Lambda extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * Adds a permission to the resource policy associated with the specified AWS
Lambda function. You use resource policies to grant permissions to event sources
that use push model. In a push model, event sources (such as Amazon S3 and
custom applications) invoke your Lambda function. Each permission you add to the
resource policy allows an event source, permission to invoke the Lambda
function.

For information about the push model, see AWS Lambda: How it Works
[http://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction.html] .

If you are using versioning, the permissions you add are specific to the Lambda
function version or alias you specify in the AddPermission request via the 
Qualifier parameter. For more information about versioning, see AWS Lambda
Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .

This operation requires permission for the lambda:AddPermission action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error ResourceConflictException   
     * @error InvalidParameterValueException   
     * @error PolicyLengthExceededException   
     * @error TooManyRequestsException   
     */
    addPermission(params: Lambda.AddPermissionRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.ResourceConflictException|Lambda.InvalidParameterValueException|Lambda.PolicyLengthExceededException|Lambda.TooManyRequestsException|any, data: Lambda.AddPermissionResponse|any) => void): Request<Lambda.AddPermissionResponse|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.ResourceConflictException|Lambda.InvalidParameterValueException|Lambda.PolicyLengthExceededException|Lambda.TooManyRequestsException|any>;
    /**
     * Creates an alias that points to the specified Lambda function version. For more
information, see Introduction to AWS Lambda Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html] .

Alias names are unique for a given function. This requires permission for the
lambda:CreateAlias action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error ResourceConflictException   
     * @error InvalidParameterValueException   
     * @error TooManyRequestsException   
     */
    createAlias(params: Lambda.CreateAliasRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.ResourceConflictException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.AliasConfiguration|any) => void): Request<Lambda.AliasConfiguration|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.ResourceConflictException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any>;
    /**
     * Identifies a stream as an event source for a Lambda function. It can be either
an Amazon Kinesis stream or an Amazon DynamoDB stream. AWS Lambda invokes the
specified function when records are posted to the stream.

This association between a stream source and a Lambda function is called the
event source mapping.

This event source mapping is relevant only in the AWS Lambda pull model, where
AWS Lambda invokes the function. For more information, go to AWS Lambda: How it
Works [http://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction.html] in
the AWS Lambda Developer Guide .

You provide mapping information (for example, which stream to read from and
which Lambda function to invoke) in the request body.

Each event source, such as an Amazon Kinesis or a DynamoDB stream, can be
associated with multiple AWS Lambda function. A given Lambda function can be
associated with multiple AWS event sources.

If you are using versioning, you can specify a specific function version or an
alias via the function name parameter. For more information about versioning,
see AWS Lambda Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .

This operation requires permission for the lambda:CreateEventSourceMapping 
action.
     *
     * @error ServiceException   
     * @error InvalidParameterValueException   
     * @error ResourceConflictException   
     * @error TooManyRequestsException   
     * @error ResourceNotFoundException   
     */
    createEventSourceMapping(params: Lambda.CreateEventSourceMappingRequest, callback?: (err: Lambda.ServiceException|Lambda.InvalidParameterValueException|Lambda.ResourceConflictException|Lambda.TooManyRequestsException|Lambda.ResourceNotFoundException|any, data: Lambda.EventSourceMappingConfiguration|any) => void): Request<Lambda.EventSourceMappingConfiguration|any,Lambda.ServiceException|Lambda.InvalidParameterValueException|Lambda.ResourceConflictException|Lambda.TooManyRequestsException|Lambda.ResourceNotFoundException|any>;
    /**
     * Creates a new Lambda function. The function metadata is created from the request
parameters, and the code for the function is provided by a .zip file in the
request body. If the function name already exists, the operation will fail. Note
that the function name is case-sensitive.

If you are using versioning, you can also publish a version of the Lambda
function you are creating using the Publish parameter. For more information
about versioning, see AWS Lambda Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .

This operation requires permission for the lambda:CreateFunction action.
     *
     * @error ServiceException   
     * @error InvalidParameterValueException   
     * @error ResourceNotFoundException   
     * @error ResourceConflictException   
     * @error TooManyRequestsException   
     * @error CodeStorageExceededException   
     */
    createFunction(params: Lambda.CreateFunctionRequest, callback?: (err: Lambda.ServiceException|Lambda.InvalidParameterValueException|Lambda.ResourceNotFoundException|Lambda.ResourceConflictException|Lambda.TooManyRequestsException|Lambda.CodeStorageExceededException|any, data: Lambda.FunctionConfiguration|any) => void): Request<Lambda.FunctionConfiguration|any,Lambda.ServiceException|Lambda.InvalidParameterValueException|Lambda.ResourceNotFoundException|Lambda.ResourceConflictException|Lambda.TooManyRequestsException|Lambda.CodeStorageExceededException|any>;
    /**
     * Deletes the specified Lambda function alias. For more information, see 
Introduction to AWS Lambda Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html] .

This requires permission for the lambda:DeleteAlias action.
     *
     * @error ServiceException   
     * @error InvalidParameterValueException   
     * @error TooManyRequestsException   
     */
    deleteAlias(params: Lambda.DeleteAliasRequest, callback?: (err: Lambda.ServiceException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: any) => void): Request<any,Lambda.ServiceException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any>;
    /**
     * Removes an event source mapping. This means AWS Lambda will no longer invoke the
function for events in the associated source.

This operation requires permission for the lambda:DeleteEventSourceMapping 
action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterValueException   
     * @error TooManyRequestsException   
     */
    deleteEventSourceMapping(params: Lambda.DeleteEventSourceMappingRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.EventSourceMappingConfiguration|any) => void): Request<Lambda.EventSourceMappingConfiguration|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any>;
    /**
     * Deletes the specified Lambda function code and configuration.

If you are using the versioning feature and you don&#x27;t specify a function version
in your DeleteFunction request, AWS Lambda will delete the function, including
all its versions, and any aliases pointing to the function versions. To delete a
specific function version, you must provide the function version via the 
Qualifier parameter. For information about function versioning, see AWS Lambda
Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .

When you delete a function the associated resource policy is also deleted. You
will need to delete the event source mappings explicitly.

This operation requires permission for the lambda:DeleteFunction action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error TooManyRequestsException   
     * @error InvalidParameterValueException   
     * @error ResourceConflictException   
     */
    deleteFunction(params: Lambda.DeleteFunctionRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.TooManyRequestsException|Lambda.InvalidParameterValueException|Lambda.ResourceConflictException|any, data: any) => void): Request<any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.TooManyRequestsException|Lambda.InvalidParameterValueException|Lambda.ResourceConflictException|any>;
    /**
     * Returns the specified alias information such as the alias ARN, description, and
function version it is pointing to. For more information, see Introduction to
AWS Lambda Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html] .

This requires permission for the lambda:GetAlias action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterValueException   
     * @error TooManyRequestsException   
     */
    getAlias(params: Lambda.GetAliasRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.AliasConfiguration|any) => void): Request<Lambda.AliasConfiguration|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any>;
    /**
     * Returns configuration information for the specified event source mapping (see 
CreateEventSourceMapping ).

This operation requires permission for the lambda:GetEventSourceMapping action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterValueException   
     * @error TooManyRequestsException   
     */
    getEventSourceMapping(params: Lambda.GetEventSourceMappingRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.EventSourceMappingConfiguration|any) => void): Request<Lambda.EventSourceMappingConfiguration|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any>;
    /**
     * Returns the configuration information of the Lambda function and a presigned URL
link to the .zip file you uploaded with CreateFunction so you can download the
.zip file. Note that the URL is valid for up to 10 minutes. The configuration
information is the same information you provided as parameters when uploading
the function.

Using the optional Qualifier parameter, you can specify a specific function
version for which you want this information. If you don&#x27;t specify this
parameter, the API uses unqualified function ARN which return information about
the $LATEST version of the Lambda function. For more information, see AWS Lambda
Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .

This operation requires permission for the lambda:GetFunction action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error TooManyRequestsException   
     * @error InvalidParameterValueException   
     */
    getFunction(params: Lambda.GetFunctionRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.TooManyRequestsException|Lambda.InvalidParameterValueException|any, data: Lambda.GetFunctionResponse|any) => void): Request<Lambda.GetFunctionResponse|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.TooManyRequestsException|Lambda.InvalidParameterValueException|any>;
    /**
     * Returns the configuration information of the Lambda function. This the same
information you provided as parameters when uploading the function by using 
CreateFunction .

If you are using the versioning feature, you can retrieve this information for a
specific function version by using the optional Qualifier parameter and
specifying the function version or alias that points to it. If you don&#x27;t provide
it, the API returns information about the $LATEST version of the function. For
more information about versioning, see AWS Lambda Function Versioning and
Aliases [http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .

This operation requires permission for the lambda:GetFunctionConfiguration 
operation.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error TooManyRequestsException   
     * @error InvalidParameterValueException   
     */
    getFunctionConfiguration(params: Lambda.GetFunctionConfigurationRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.TooManyRequestsException|Lambda.InvalidParameterValueException|any, data: Lambda.FunctionConfiguration|any) => void): Request<Lambda.FunctionConfiguration|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.TooManyRequestsException|Lambda.InvalidParameterValueException|any>;
    /**
     * Returns the resource policy associated with the specified Lambda function.

If you are using the versioning feature, you can get the resource policy
associated with the specific Lambda function version or alias by specifying the
version or alias name using the Qualifier parameter. For more information about
versioning, see AWS Lambda Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .

For information about adding permissions, see AddPermission .

You need permission for the lambda:GetPolicy action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error TooManyRequestsException   
     * @error InvalidParameterValueException   
     */
    getPolicy(params: Lambda.GetPolicyRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.TooManyRequestsException|Lambda.InvalidParameterValueException|any, data: Lambda.GetPolicyResponse|any) => void): Request<Lambda.GetPolicyResponse|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.TooManyRequestsException|Lambda.InvalidParameterValueException|any>;
    /**
     * Invokes a specific Lambda function. For an example, see Create the Lambda
Function and Test It Manually
[http://docs.aws.amazon.com/lambda/latest/dg/with-dynamodb-create-function.html#with-dbb-invoke-manually] 
.

If you are using the versioning feature, you can invoke the specific function
version by providing function version or alias name that is pointing to the
function version using the Qualifier parameter in the request. If you don&#x27;t
provide the Qualifier parameter, the $LATEST version of the Lambda function is
invoked. Invocations occur at least once in response to an event and functions
must be idempotent to handle this. For information about the versioning feature,
see AWS Lambda Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .

This operation requires permission for the lambda:InvokeFunction action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error InvalidRequestContentException   
     * @error RequestTooLargeException   
     * @error UnsupportedMediaTypeException   
     * @error TooManyRequestsException   
     * @error InvalidParameterValueException   
     * @error EC2UnexpectedException   
     * @error SubnetIPAddressLimitReachedException   
     * @error ENILimitReachedException   
     * @error EC2ThrottledException   
     * @error EC2AccessDeniedException   
     * @error InvalidSubnetIDException   
     * @error InvalidSecurityGroupIDException   
     * @error InvalidZipFileException   
     * @error KMSDisabledException   
     * @error KMSInvalidStateException   
     * @error KMSAccessDeniedException   
     * @error KMSNotFoundException   
     */
    invoke(params: Lambda.InvocationRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidRequestContentException|Lambda.RequestTooLargeException|Lambda.UnsupportedMediaTypeException|Lambda.TooManyRequestsException|Lambda.InvalidParameterValueException|Lambda.EC2UnexpectedException|Lambda.SubnetIPAddressLimitReachedException|Lambda.ENILimitReachedException|Lambda.EC2ThrottledException|Lambda.EC2AccessDeniedException|Lambda.InvalidSubnetIDException|Lambda.InvalidSecurityGroupIDException|Lambda.InvalidZipFileException|Lambda.KMSDisabledException|Lambda.KMSInvalidStateException|Lambda.KMSAccessDeniedException|Lambda.KMSNotFoundException|any, data: Lambda.InvocationResponse|any) => void): Request<Lambda.InvocationResponse|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidRequestContentException|Lambda.RequestTooLargeException|Lambda.UnsupportedMediaTypeException|Lambda.TooManyRequestsException|Lambda.InvalidParameterValueException|Lambda.EC2UnexpectedException|Lambda.SubnetIPAddressLimitReachedException|Lambda.ENILimitReachedException|Lambda.EC2ThrottledException|Lambda.EC2AccessDeniedException|Lambda.InvalidSubnetIDException|Lambda.InvalidSecurityGroupIDException|Lambda.InvalidZipFileException|Lambda.KMSDisabledException|Lambda.KMSInvalidStateException|Lambda.KMSAccessDeniedException|Lambda.KMSNotFoundException|any>;
    /**
     * This API is deprecated. We recommend you use Invoke API (see Invoke ).

Submits an invocation request to AWS Lambda. Upon receiving the request, Lambda
executes the specified function asynchronously. To see the logs generated by the
Lambda function execution, see the CloudWatch Logs console.

This operation requires permission for the lambda:InvokeFunction action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error InvalidRequestContentException   
     */
    invokeAsync(params: Lambda.InvokeAsyncRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidRequestContentException|any, data: Lambda.InvokeAsyncResponse|any) => void): Request<Lambda.InvokeAsyncResponse|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidRequestContentException|any>;
    /**
     * Returns list of aliases created for a Lambda function. For each alias, the
response includes information such as the alias ARN, description, alias name,
and the function version to which it points. For more information, see 
Introduction to AWS Lambda Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html] .

This requires permission for the lambda:ListAliases action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterValueException   
     * @error TooManyRequestsException   
     */
    listAliases(params: Lambda.ListAliasesRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.ListAliasesResponse|any) => void): Request<Lambda.ListAliasesResponse|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any>;
    /**
     * Returns a list of event source mappings you created using the 
CreateEventSourceMapping (see CreateEventSourceMapping ).

For each mapping, the API returns configuration information. You can optionally
specify filters to retrieve specific event source mappings.

If you are using the versioning feature, you can get list of event source
mappings for a specific Lambda function version or an alias as described in the 
FunctionName parameter. For information about the versioning feature, see AWS
Lambda Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .

This operation requires permission for the lambda:ListEventSourceMappings 
action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterValueException   
     * @error TooManyRequestsException   
     */
    listEventSourceMappings(params: Lambda.ListEventSourceMappingsRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.ListEventSourceMappingsResponse|any) => void): Request<Lambda.ListEventSourceMappingsResponse|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any>;
    /**
     * Returns a list of your Lambda functions. For each function, the response
includes the function configuration information. You must use GetFunction to
retrieve the code for your function.

This operation requires permission for the lambda:ListFunctions action.

If you are using versioning feature, the response returns list of $LATEST
versions of your functions. For information about the versioning feature, see 
AWS Lambda Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .
     *
     * @error ServiceException   
     * @error TooManyRequestsException   
     */
    listFunctions(params: Lambda.ListFunctionsRequest, callback?: (err: Lambda.ServiceException|Lambda.TooManyRequestsException|any, data: Lambda.ListFunctionsResponse|any) => void): Request<Lambda.ListFunctionsResponse|any,Lambda.ServiceException|Lambda.TooManyRequestsException|any>;
    /**
     * List all versions of a function. For information about the versioning feature,
see AWS Lambda Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterValueException   
     * @error TooManyRequestsException   
     */
    listVersionsByFunction(params: Lambda.ListVersionsByFunctionRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.ListVersionsByFunctionResponse|any) => void): Request<Lambda.ListVersionsByFunctionResponse|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any>;
    /**
     * Publishes a version of your function from the current snapshot of $LATEST. That
is, AWS Lambda takes a snapshot of the function code and configuration
information from $LATEST and publishes a new version. The code and configuration
cannot be modified after publication. For information about the versioning
feature, see AWS Lambda Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterValueException   
     * @error TooManyRequestsException   
     * @error CodeStorageExceededException   
     */
    publishVersion(params: Lambda.PublishVersionRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|Lambda.CodeStorageExceededException|any, data: Lambda.FunctionConfiguration|any) => void): Request<Lambda.FunctionConfiguration|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|Lambda.CodeStorageExceededException|any>;
    /**
     * You can remove individual permissions from an resource policy associated with a
Lambda function by providing a statement ID that you provided when you added the
permission.

If you are using versioning, the permissions you remove are specific to the
Lambda function version or alias you specify in the AddPermission request via
the Qualifier parameter. For more information about versioning, see AWS Lambda
Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .

Note that removal of a permission will cause an active event source to lose
permission to the function.

You need permission for the lambda:RemovePermission action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterValueException   
     * @error TooManyRequestsException   
     */
    removePermission(params: Lambda.RemovePermissionRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: any) => void): Request<any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any>;
    /**
     * Using this API you can update the function version to which the alias points and
the alias description. For more information, see Introduction to AWS Lambda
Aliases [http://docs.aws.amazon.com/lambda/latest/dg/aliases-intro.html] .

This requires permission for the lambda:UpdateAlias action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterValueException   
     * @error TooManyRequestsException   
     */
    updateAlias(params: Lambda.UpdateAliasRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.AliasConfiguration|any) => void): Request<Lambda.AliasConfiguration|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any>;
    /**
     * You can update an event source mapping. This is useful if you want to change the
parameters of the existing mapping without losing your position in the stream.
You can change which function will receive the stream records, but to change the
stream itself, you must create a new mapping.

If you are using the versioning feature, you can update the event source mapping
to map to a specific Lambda function version or alias as described in the 
FunctionName parameter. For information about the versioning feature, see AWS
Lambda Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .

If you disable the event source mapping, AWS Lambda stops polling. If you enable
again, it will resume polling from the time it had stopped polling, so you don&#x27;t
lose processing of any records. However, if you delete event source mapping and
create it again, it will reset.

This operation requires permission for the lambda:UpdateEventSourceMapping 
action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterValueException   
     * @error TooManyRequestsException   
     * @error ResourceConflictException   
     */
    updateEventSourceMapping(params: Lambda.UpdateEventSourceMappingRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|Lambda.ResourceConflictException|any, data: Lambda.EventSourceMappingConfiguration|any) => void): Request<Lambda.EventSourceMappingConfiguration|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|Lambda.ResourceConflictException|any>;
    /**
     * Updates the code for the specified Lambda function. This operation must only be
used on an existing Lambda function and cannot be used to update the function
configuration.

If you are using the versioning feature, note this API will always update the
$LATEST version of your Lambda function. For information about the versioning
feature, see AWS Lambda Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .

This operation requires permission for the lambda:UpdateFunctionCode action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterValueException   
     * @error TooManyRequestsException   
     * @error CodeStorageExceededException   
     */
    updateFunctionCode(params: Lambda.UpdateFunctionCodeRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|Lambda.CodeStorageExceededException|any, data: Lambda.FunctionConfiguration|any) => void): Request<Lambda.FunctionConfiguration|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|Lambda.CodeStorageExceededException|any>;
    /**
     * Updates the configuration parameters for the specified Lambda function by using
the values provided in the request. You provide only the parameters you want to
change. This operation must only be used on an existing Lambda function and
cannot be used to update the function&#x27;s code.

If you are using the versioning feature, note this API will always update the
$LATEST version of your Lambda function. For information about the versioning
feature, see AWS Lambda Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html] .

This operation requires permission for the lambda:UpdateFunctionConfiguration 
action.
     *
     * @error ServiceException   
     * @error ResourceNotFoundException   
     * @error InvalidParameterValueException   
     * @error TooManyRequestsException   
     */
    updateFunctionConfiguration(params: Lambda.UpdateFunctionConfigurationRequest, callback?: (err: Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any, data: Lambda.FunctionConfiguration|any) => void): Request<Lambda.FunctionConfiguration|any,Lambda.ServiceException|Lambda.ResourceNotFoundException|Lambda.InvalidParameterValueException|Lambda.TooManyRequestsException|any>;

  }

  export module Lambda {
    
    export type Action = string;
    
    export type Alias = string;
    
    export type AliasList = AliasConfiguration[];
    
    export type Arn = string;
    
    export type BatchSize = number;
    
    export type Blob = any;
    
    export type BlobStream = any;
    
    export type Boolean = boolean;
    
    export type Date = number;
    
    export type Description = string;
    
    export type Enabled = boolean;
    
    export type EnvironmentVariableName = string;
    
    export type EnvironmentVariableValue = string;
    
    export type EnvironmentVariables = {[key:string]: EnvironmentVariableValue};
    
    export type EventSourceMappingsList = EventSourceMappingConfiguration[];
    
    export type EventSourcePosition = string;
    
    export type EventSourceToken = string;
    
    export type FunctionArn = string;
    
    export type FunctionList = FunctionConfiguration[];
    
    export type FunctionName = string;
    
    export type Handler = string;
    
    export type HttpStatus = number;
    
    export type Integer = number;
    
    export type InvocationType = string;
    
    export type KMSKeyArn = string;
    
    export type LogType = string;
    
    export type Long = number;
    
    export type MaxListItems = number;
    
    export type MemorySize = number;
    
    export type Principal = string;
    
    export type Qualifier = string;
    
    export type RoleArn = string;
    
    export type Runtime = string;
    
    export type S3Bucket = string;
    
    export type S3Key = string;
    
    export type S3ObjectVersion = string;
    
    export type SecurityGroupId = string;
    
    export type SecurityGroupIds = SecurityGroupId[];
    
    export type SourceOwner = string;
    
    export type StatementId = string;
    
    export type String = string;
    
    export type SubnetId = string;
    
    export type SubnetIds = SubnetId[];
    
    export type ThrottleReason = string;
    
    export type Timeout = number;
    
    export type Timestamp = string;
    
    export type Version = string;
    
    export type VpcId = string;

    export interface AddPermissionRequest {
        /** Name of the Lambda function whose resource policy you are updating by adding a
new permission.

You can specify a function name (for example, Thumbnail ) or you can specify
Amazon Resource Name (ARN) of the function (for example, 
arn:aws:lambda:us-west-2:account-id:function:ThumbNail ). AWS Lambda also allows
you to specify partial ARN (for example, account-id:Thumbnail ). Note that the
length constraint applies only to the ARN. If you specify only the function
name, it is limited to 64 character in length. **/
        FunctionName: FunctionName;
        /** A unique statement identifier. **/
        StatementId: StatementId;
        /** The AWS Lambda action you want to allow in this statement. Each Lambda action is
a string starting with lambda: followed by the API name . For example, 
lambda:CreateFunction . You can use wildcard ( lambda:&amp;#42; ) to grant permission
for all AWS Lambda actions. **/
        Action: Action;
        /** The principal who is getting this permission. It can be Amazon S3 service
Principal ( s3.amazonaws.com ) if you want Amazon S3 to invoke the function, an
AWS account ID if you are granting cross-account permission, or any valid AWS
service principal such as sns.amazonaws.com . For example, you might want to
allow a custom application in another AWS account to push events to AWS Lambda
by invoking your function. **/
        Principal: Principal;
        /** This is optional; however, when granting Amazon S3 permission to invoke your
function, you should specify this field with the Amazon Resource Name (ARN) as
its value. This ensures that only events generated from the specified source can
invoke the function.

If you add a permission for the Amazon S3 principal without providing the source
ARN, any AWS account that creates a mapping to your function ARN can send events
to invoke your Lambda function from Amazon S3. **/
        SourceArn?: Arn;
        /** This parameter is used for S3, SES, CloudWatch Logs and CloudWatch Rules only.
The AWS account ID (without a hyphen) of the source owner. For example, if the 
SourceArn identifies a bucket, then this is the bucket owner&#x27;s account ID. You
can use this additional condition to ensure the bucket you specify is owned by a
specific account (it is possible the bucket owner deleted the bucket and some
other AWS account created the bucket). You can also use this condition to
specify all sources (that is, you don&#x27;t specify the SourceArn ) owned by a
specific account. **/
        SourceAccount?: SourceOwner;
        /** A unique token that must be supplied by the principal invoking the function.
This is currently only used for Alexa Smart Home functions. **/
        EventSourceToken?: EventSourceToken;
        /** You can use this optional query parameter to describe a qualified ARN using a
function version or an alias name. The permission will then apply to the
specific qualified ARN. For example, if you specify function version 2 as the
qualifier, then permission applies only when request is made using qualified
function ARN:

arn:aws:lambda:aws-region:acct-id:function:function-name:2

If you specify an alias name, for example PROD , then the permission is valid
only for requests made using the alias ARN:

arn:aws:lambda:aws-region:acct-id:function:function-name:PROD

If the qualifier is not specified, the permission is valid only when requests is
made using unqualified function ARN.

arn:aws:lambda:aws-region:acct-id:function:function-name **/
        Qualifier?: Qualifier;
    }
    export interface AddPermissionResponse {
        /** The permission statement you specified in the request. The response returns the
same as a string using a backslash (&quot;\&quot;) as an escape character in the JSON. **/
        Statement?: String;
    }
    export interface AliasConfiguration {
        /** Lambda function ARN that is qualified using the alias name as the suffix. For
example, if you create an alias called BETA that points to a helloworld function
version, the ARN is arn:aws:lambda:aws-regions:acct-id:function:helloworld:BETA 
. **/
        AliasArn?: FunctionArn;
        /** Alias name. **/
        Name?: Alias;
        /** Function version to which the alias points. **/
        FunctionVersion?: Version;
        /** Alias description. **/
        Description?: Description;
    }
    export interface CodeStorageExceededException {
        /**  **/
        Type?: String;
        message?: String;
    }
    export interface CreateAliasRequest {
        /** Name of the Lambda function for which you want to create an alias. **/
        FunctionName: FunctionName;
        /** Name for the alias you are creating. **/
        Name: Alias;
        /** Lambda function version for which you are creating the alias. **/
        FunctionVersion: Version;
        /** Description of the alias. **/
        Description?: Description;
    }
    export interface CreateEventSourceMappingRequest {
        /** The Amazon Resource Name (ARN) of the Amazon Kinesis or the Amazon DynamoDB
stream that is the event source. Any record added to this stream could cause AWS
Lambda to invoke your Lambda function, it depends on the BatchSize . AWS Lambda
POSTs the Amazon Kinesis event, containing records, to your Lambda function as
JSON. **/
        EventSourceArn: Arn;
        /** The Lambda function to invoke when AWS Lambda detects an event on the stream.

You can specify the function name (for example, Thumbnail ) or you can specify
Amazon Resource Name (ARN) of the function (for example, 
arn:aws:lambda:us-west-2:account-id:function:ThumbNail ).

If you are using versioning, you can also provide a qualified function ARN (ARN
that is qualified with function version or alias name as suffix). For more
information about versioning, see AWS Lambda Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html]

AWS Lambda also allows you to specify only the function name with the account ID
qualifier (for example, account-id:Thumbnail ).

Note that the length constraint applies only to the ARN. If you specify only the
function name, it is limited to 64 character in length. **/
        FunctionName: FunctionName;
        /** Indicates whether AWS Lambda should begin polling the event source. By default, 
Enabled is true. **/
        Enabled?: Enabled;
        /** The largest number of records that AWS Lambda will retrieve from your event
source at the time of invoking your function. Your function receives an event
with all the retrieved records. The default is 100 records. **/
        BatchSize?: BatchSize;
        /** The position in the stream where AWS Lambda should start reading. For more
information, go to ShardIteratorType
[http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html#Kinesis-GetShardIterator-request-ShardIteratorType] 
in the Amazon Kinesis API Reference . **/
        StartingPosition: EventSourcePosition;
    }
    export interface CreateFunctionRequest {
        /** The name you want to assign to the function you are uploading. The function
names appear in the console and are returned in the ListFunctions API. Function
names are used to specify functions to other AWS Lambda APIs, such as Invoke . **/
        FunctionName: FunctionName;
        /** The runtime environment for the Lambda function you are uploading.

To use the Node.js runtime v4.3, set the value to &quot;nodejs4.3&quot;. To use earlier
runtime (v0.10.42), set the value to &quot;nodejs&quot;. **/
        Runtime: Runtime;
        /** The Amazon Resource Name (ARN) of the IAM role that Lambda assumes when it
executes your function to access any other Amazon Web Services (AWS) resources.
For more information, see AWS Lambda: How it Works
[http://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction.html] . **/
        Role: RoleArn;
        /** The function within your code that Lambda calls to begin execution. For Node.js,
it is the module-name . export value in your function. For Java, it can be 
package.class-name::handler or package.class-name . For more information, see 
Lambda Function Handler (Java)
[http://docs.aws.amazon.com/lambda/latest/dg/java-programming-model-handler-types.html] 
. **/
        Handler: Handler;
        /** The code for the Lambda function. **/
        Code: FunctionCode;
        /** A short, user-defined function description. Lambda does not use this value.
Assign a meaningful description as you see fit. **/
        Description?: Description;
        /** The function execution time at which Lambda should terminate the function.
Because the execution time has cost implications, we recommend you set this
value based on your expected execution time. The default is 3 seconds. **/
        Timeout?: Timeout;
        /** The amount of memory, in MB, your Lambda function is given. Lambda uses this
memory size to infer the amount of CPU and memory allocated to your function.
Your function use-case determines your CPU and memory requirements. For example,
a database operation might need less memory compared to an image processing
function. The default value is 128 MB. The value must be a multiple of 64 MB. **/
        MemorySize?: MemorySize;
        /** This boolean parameter can be used to request AWS Lambda to create the Lambda
function and publish a version as an atomic operation. **/
        Publish?: Boolean;
        /** If your Lambda function accesses resources in a VPC, you provide this parameter
identifying the list of security group IDs and subnet IDs. These must belong to
the same VPC. You must provide at least one security group and one subnet ID. **/
        VpcConfig?: VpcConfig;
        Environment?: Environment;
        /** The Amazon Resource Name (ARN) of the KMS key used to encrypt your function&#x27;s
environment variables. If not provided, AWS Lambda will use a default service
key. **/
        KMSKeyArn?: KMSKeyArn;
    }
    export interface DeleteAliasRequest {
        /** The Lambda function name for which the alias is created. Deleting an alias does
not delete the function version to which it is pointing. **/
        FunctionName: FunctionName;
        /** Name of the alias to delete. **/
        Name: Alias;
    }
    export interface DeleteEventSourceMappingRequest {
        /** The event source mapping ID. **/
        UUID: String;
    }
    export interface DeleteFunctionRequest {
        /** The Lambda function to delete.

You can specify the function name (for example, Thumbnail ) or you can specify
Amazon Resource Name (ARN) of the function (for example, 
arn:aws:lambda:us-west-2:account-id:function:ThumbNail ). If you are using
versioning, you can also provide a qualified function ARN (ARN that is qualified
with function version or alias name as suffix). AWS Lambda also allows you to
specify only the function name with the account ID qualifier (for example, 
account-id:Thumbnail ). Note that the length constraint applies only to the ARN.
If you specify only the function name, it is limited to 64 character in length. **/
        FunctionName: FunctionName;
        /** Using this optional parameter you can specify a function version (but not the 
$LATEST version) to direct AWS Lambda to delete a specific function version. If
the function version has one or more aliases pointing to it, you will get an
error because you cannot have aliases pointing to it. You can delete any
function version but not the $LATEST , that is, you cannot specify $LATEST as
the value of this parameter. The $LATEST version can be deleted only when you
want to delete all the function versions and aliases.

You can only specify a function version, not an alias name, using this
parameter. You cannot delete a function version using its alias.

If you don&#x27;t specify this parameter, AWS Lambda will delete the function,
including all of its versions and aliases. **/
        Qualifier?: Qualifier;
    }
    export interface EC2AccessDeniedException {
        Type?: String;
        Message?: String;
    }
    export interface EC2ThrottledException {
        Type?: String;
        Message?: String;
    }
    export interface EC2UnexpectedException {
        Type?: String;
        Message?: String;
        EC2ErrorCode?: String;
    }
    export interface ENILimitReachedException {
        Type?: String;
        Message?: String;
    }
    export interface Environment {
        /** The key-value pairs that represent your environment&#x27;s configuration settings.
The value you specify cannot contain a &quot;,&quot;. **/
        Variables?: EnvironmentVariables;
    }
    export interface EnvironmentError {
        /** The error code returned by the environment error object. **/
        ErrorCode?: String;
        /** The message returned by the environment error object. **/
        Message?: String;
    }
    export interface EnvironmentResponse {
        /** The key-value pairs returned that represent your environment&#x27;s configuration
settings or error information. **/
        Variables?: EnvironmentVariables;
        Error?: EnvironmentError;
    }
    export interface EventSourceMappingConfiguration {
        /** The AWS Lambda assigned opaque identifier for the mapping. **/
        UUID?: String;
        /** The largest number of records that AWS Lambda will retrieve from your event
source at the time of invoking your function. Your function receives an event
with all the retrieved records. **/
        BatchSize?: BatchSize;
        /** The Amazon Resource Name (ARN) of the Amazon Kinesis stream that is the source
of events. **/
        EventSourceArn?: Arn;
        /** The Lambda function to invoke when AWS Lambda detects an event on the stream. **/
        FunctionArn?: FunctionArn;
        /** The UTC time string indicating the last time the event mapping was updated. **/
        LastModified?: Date;
        /** The result of the last AWS Lambda invocation of your Lambda function. **/
        LastProcessingResult?: String;
        /** The state of the event source mapping. It can be Creating , Enabled , Disabled , 
Enabling , Disabling , Updating , or Deleting . **/
        State?: String;
        /** The reason the event source mapping is in its current state. It is either
user-requested or an AWS Lambda-initiated state transition. **/
        StateTransitionReason?: String;
    }
    export interface FunctionCode {
        /** The contents of your zip file containing your deployment package. If you are
using the web API directly, the contents of the zip file must be base64-encoded.
If you are using the AWS SDKs or the AWS CLI, the SDKs or CLI will do the
encoding for you. For more information about creating a .zip file, go to 
Execution Permissions
[http://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role.html] 
in the AWS Lambda Developer Guide . **/
        ZipFile?: Blob;
        /** Amazon S3 bucket name where the .zip file containing your deployment package is
stored. This bucket must reside in the same AWS region where you are creating
the Lambda function. **/
        S3Bucket?: S3Bucket;
        /** The Amazon S3 object (the deployment package) key name you want to upload. **/
        S3Key?: S3Key;
        /** The Amazon S3 object (the deployment package) version you want to upload. **/
        S3ObjectVersion?: S3ObjectVersion;
    }
    export interface FunctionCodeLocation {
        /** The repository from which you can download the function. **/
        RepositoryType?: String;
        /** The presigned URL you can use to download the function&#x27;s .zip file that you
previously uploaded. The URL is valid for up to 10 minutes. **/
        Location?: String;
    }
    export interface FunctionConfiguration {
        /** The name of the function. **/
        FunctionName?: FunctionName;
        /** The Amazon Resource Name (ARN) assigned to the function. **/
        FunctionArn?: FunctionArn;
        /** The runtime environment for the Lambda function.

To use the Node.js runtime v4.3, set the value to &quot;nodejs4.3&quot;. To use earlier
runtime (v0.10.42), set the value to &quot;nodejs&quot;. **/
        Runtime?: Runtime;
        /** The Amazon Resource Name (ARN) of the IAM role that Lambda assumes when it
executes your function to access any other Amazon Web Services (AWS) resources. **/
        Role?: RoleArn;
        /** The function Lambda calls to begin executing your function. **/
        Handler?: Handler;
        /** The size, in bytes, of the function .zip file you uploaded. **/
        CodeSize?: Long;
        /** The user-provided description. **/
        Description?: Description;
        /** The function execution time at which Lambda should terminate the function.
Because the execution time has cost implications, we recommend you set this
value based on your expected execution time. The default is 3 seconds. **/
        Timeout?: Timeout;
        /** The memory size, in MB, you configured for the function. Must be a multiple of
64 MB. **/
        MemorySize?: MemorySize;
        /** The time stamp of the last time you updated the function. **/
        LastModified?: Timestamp;
        /** It is the SHA256 hash of your function deployment package. **/
        CodeSha256?: String;
        /** The version of the Lambda function. **/
        Version?: Version;
        /** VPC configuration associated with your Lambda function. **/
        VpcConfig?: VpcConfigResponse;
        /** The parent object that contains your environment&#x27;s configuration settings. **/
        Environment?: EnvironmentResponse;
        /** The Amazon Resource Name (ARN) of the KMS key used to encrypt your function&#x27;s
environment variables. If empty, it means you are using the AWS Lambda default
service key. **/
        KMSKeyArn?: KMSKeyArn;
    }
    export interface GetAliasRequest {
        /** Function name for which the alias is created. An alias is a subresource that
exists only in the context of an existing Lambda function so you must specify
the function name. **/
        FunctionName: FunctionName;
        /** Name of the alias for which you want to retrieve information. **/
        Name: Alias;
    }
    export interface GetEventSourceMappingRequest {
        /** The AWS Lambda assigned ID of the event source mapping. **/
        UUID: String;
    }
    export interface GetFunctionConfigurationRequest {
        /** The name of the Lambda function for which you want to retrieve the configuration
information.

You can specify a function name (for example, Thumbnail ) or you can specify
Amazon Resource Name (ARN) of the function (for example, 
arn:aws:lambda:us-west-2:account-id:function:ThumbNail ). AWS Lambda also allows
you to specify a partial ARN (for example, account-id:Thumbnail ). Note that the
length constraint applies only to the ARN. If you specify only the function
name, it is limited to 64 character in length. **/
        FunctionName: FunctionName;
        /** Using this optional parameter you can specify a function version or an alias
name. If you specify function version, the API uses qualified function ARN and
returns information about the specific function version. If you specify an alias
name, the API uses the alias ARN and returns information about the function
version to which the alias points.

If you don&#x27;t specify this parameter, the API uses unqualified function ARN, and
returns information about the $LATEST function version. **/
        Qualifier?: Qualifier;
    }
    export interface GetFunctionRequest {
        /** The Lambda function name.

You can specify a function name (for example, Thumbnail ) or you can specify
Amazon Resource Name (ARN) of the function (for example, 
arn:aws:lambda:us-west-2:account-id:function:ThumbNail ). AWS Lambda also allows
you to specify a partial ARN (for example, account-id:Thumbnail ). Note that the
length constraint applies only to the ARN. If you specify only the function
name, it is limited to 64 character in length. **/
        FunctionName: FunctionName;
        /** Using this optional parameter to specify a function version or an alias name. If
you specify function version, the API uses qualified function ARN for the
request and returns information about the specific Lambda function version. If
you specify an alias name, the API uses the alias ARN and returns information
about the function version to which the alias points. If you don&#x27;t provide this
parameter, the API uses unqualified function ARN and returns information about
the $LATEST version of the Lambda function. **/
        Qualifier?: Qualifier;
    }
    export interface GetFunctionResponse {
        Configuration?: FunctionConfiguration;
        Code?: FunctionCodeLocation;
    }
    export interface GetPolicyRequest {
        /** Function name whose resource policy you want to retrieve.

You can specify the function name (for example, Thumbnail ) or you can specify
Amazon Resource Name (ARN) of the function (for example, 
arn:aws:lambda:us-west-2:account-id:function:ThumbNail ). If you are using
versioning, you can also provide a qualified function ARN (ARN that is qualified
with function version or alias name as suffix). AWS Lambda also allows you to
specify only the function name with the account ID qualifier (for example, 
account-id:Thumbnail ). Note that the length constraint applies only to the ARN.
If you specify only the function name, it is limited to 64 character in length. **/
        FunctionName: FunctionName;
        /** You can specify this optional query parameter to specify a function version or
an alias name in which case this API will return all permissions associated with
the specific qualified ARN. If you don&#x27;t provide this parameter, the API will
return permissions that apply to the unqualified function ARN. **/
        Qualifier?: Qualifier;
    }
    export interface GetPolicyResponse {
        /** The resource policy associated with the specified function. The response returns
the same as a string using a backslash (&quot;\&quot;) as an escape character in the JSON. **/
        Policy?: String;
    }
    export interface InvalidParameterValueException {
        /**  **/
        Type?: String;
        /**  **/
        message?: String;
    }
    export interface InvalidRequestContentException {
        /**  **/
        Type?: String;
        /**  **/
        message?: String;
    }
    export interface InvalidSecurityGroupIDException {
        Type?: String;
        Message?: String;
    }
    export interface InvalidSubnetIDException {
        Type?: String;
        Message?: String;
    }
    export interface InvalidZipFileException {
        Type?: String;
        Message?: String;
    }
    export interface InvocationRequest {
        /** The Lambda function name.

You can specify a function name (for example, Thumbnail ) or you can specify
Amazon Resource Name (ARN) of the function (for example, 
arn:aws:lambda:us-west-2:account-id:function:ThumbNail ). AWS Lambda also allows
you to specify a partial ARN (for example, account-id:Thumbnail ). Note that the
length constraint applies only to the ARN. If you specify only the function
name, it is limited to 64 character in length. **/
        FunctionName: FunctionName;
        /** By default, the Invoke API assumes RequestResponse invocation type. You can
optionally request asynchronous execution by specifying Event as the 
InvocationType . You can also use this parameter to request AWS Lambda to not
execute the function but do some verification, such as if the caller is
authorized to invoke the function and if the inputs are valid. You request this
by specifying DryRun as the InvocationType . This is useful in a cross-account
scenario when you want to verify access to a function without running it. **/
        InvocationType?: InvocationType;
        /** You can set this optional parameter to Tail in the request only if you specify
the InvocationType parameter with value RequestResponse . In this case, AWS
Lambda returns the base64-encoded last 4 KB of log data produced by your Lambda
function in the x-amz-log-result header. **/
        LogType?: LogType;
        /** Using the ClientContext you can pass client-specific information to the Lambda
function you are invoking. You can then process the client information in your
Lambda function as you choose through the context variable. For an example of a 
ClientContext JSON, see PutEvents
[http://docs.aws.amazon.com/mobileanalytics/latest/ug/PutEvents.html] in the 
Amazon Mobile Analytics API Reference and User Guide .

The ClientContext JSON must be base64-encoded. **/
        ClientContext?: String;
        /** JSON that you want to provide to your Lambda function as input. **/
        Payload?: Blob;
        /** You can use this optional parameter to specify a Lambda function version or
alias name. If you specify a function version, the API uses the qualified
function ARN to invoke a specific Lambda function. If you specify an alias name,
the API uses the alias ARN to invoke the Lambda function version to which the
alias points.

If you don&#x27;t provide this parameter, then the API uses unqualified function ARN
which results in invocation of the $LATEST version. **/
        Qualifier?: Qualifier;
    }
    export interface InvocationResponse {
        /** The HTTP status code will be in the 200 range for successful request. For the 
RequestResonse invocation type this status code will be 200. For the Event 
invocation type this status code will be 202. For the DryRun invocation type the
status code will be 204. **/
        StatusCode?: Integer;
        /** Indicates whether an error occurred while executing the Lambda function. If an
error occurred this field will have one of two values; Handled or Unhandled . 
Handled errors are errors that are reported by the function while the Unhandled 
errors are those detected and reported by AWS Lambda. Unhandled errors include
out of memory errors and function timeouts. For information about how to report
an Handled error, see Programming Model
[http://docs.aws.amazon.com/lambda/latest/dg/programming-model.html] . **/
        FunctionError?: String;
        /** It is the base64-encoded logs for the Lambda function invocation. This is
present only if the invocation type is RequestResponse and the logs were
requested. **/
        LogResult?: String;
        /** It is the JSON representation of the object returned by the Lambda function.
This is present only if the invocation type is RequestResponse .

In the event of a function error this field contains a message describing the
error. For the Handled errors the Lambda function will report this message. For 
Unhandled errors AWS Lambda reports the message. **/
        Payload?: Blob;
    }
    export interface InvokeAsyncRequest {
        /** The Lambda function name. **/
        FunctionName: FunctionName;
        /** JSON that you want to provide to your Lambda function as input. **/
        InvokeArgs: BlobStream;
    }
    export interface InvokeAsyncResponse {
        /** It will be 202 upon success. **/
        Status?: HttpStatus;
    }
    export interface KMSAccessDeniedException {
        Type?: String;
        Message?: String;
    }
    export interface KMSDisabledException {
        Type?: String;
        Message?: String;
    }
    export interface KMSInvalidStateException {
        Type?: String;
        Message?: String;
    }
    export interface KMSNotFoundException {
        Type?: String;
        Message?: String;
    }
    export interface ListAliasesRequest {
        /** Lambda function name for which the alias is created. **/
        FunctionName: FunctionName;
        /** If you specify this optional parameter, the API returns only the aliases that
are pointing to the specific Lambda function version, otherwise the API returns
all of the aliases created for the Lambda function. **/
        FunctionVersion?: Version;
        /** Optional string. An opaque pagination token returned from a previous ListAliases 
operation. If present, indicates where to continue the listing. **/
        Marker?: String;
        /** Optional integer. Specifies the maximum number of aliases to return in response.
This parameter value must be greater than 0. **/
        MaxItems?: MaxListItems;
    }
    export interface ListAliasesResponse {
        /** A string, present if there are more aliases. **/
        NextMarker?: String;
        /** A list of aliases. **/
        Aliases?: AliasList;
    }
    export interface ListEventSourceMappingsRequest {
        /** The Amazon Resource Name (ARN) of the Amazon Kinesis stream. (This parameter is
optional.) **/
        EventSourceArn?: Arn;
        /** The name of the Lambda function.

You can specify the function name (for example, Thumbnail ) or you can specify
Amazon Resource Name (ARN) of the function (for example, 
arn:aws:lambda:us-west-2:account-id:function:ThumbNail ). If you are using
versioning, you can also provide a qualified function ARN (ARN that is qualified
with function version or alias name as suffix). AWS Lambda also allows you to
specify only the function name with the account ID qualifier (for example, 
account-id:Thumbnail ). Note that the length constraint applies only to the ARN.
If you specify only the function name, it is limited to 64 character in length. **/
        FunctionName?: FunctionName;
        /** Optional string. An opaque pagination token returned from a previous 
ListEventSourceMappings operation. If present, specifies to continue the list
from where the returning call left off. **/
        Marker?: String;
        /** Optional integer. Specifies the maximum number of event sources to return in
response. This value must be greater than 0. **/
        MaxItems?: MaxListItems;
    }
    export interface ListEventSourceMappingsResponse {
        /** A string, present if there are more event source mappings. **/
        NextMarker?: String;
        /** An array of EventSourceMappingConfiguration objects. **/
        EventSourceMappings?: EventSourceMappingsList;
    }
    export interface ListFunctionsRequest {
        /** Optional string. An opaque pagination token returned from a previous 
ListFunctions operation. If present, indicates where to continue the listing. **/
        Marker?: String;
        /** Optional integer. Specifies the maximum number of AWS Lambda functions to return
in response. This parameter value must be greater than 0. **/
        MaxItems?: MaxListItems;
    }
    export interface ListFunctionsResponse {
        /** A string, present if there are more functions. **/
        NextMarker?: String;
        /** A list of Lambda functions. **/
        Functions?: FunctionList;
    }
    export interface ListVersionsByFunctionRequest {
        /** Function name whose versions to list. You can specify a function name (for
example, Thumbnail ) or you can specify Amazon Resource Name (ARN) of the
function (for example, arn:aws:lambda:us-west-2:account-id:function:ThumbNail ).
AWS Lambda also allows you to specify a partial ARN (for example, 
account-id:Thumbnail ). Note that the length constraint applies only to the ARN.
If you specify only the function name, it is limited to 64 character in length. **/
        FunctionName: FunctionName;
        /** Optional string. An opaque pagination token returned from a previous 
ListVersionsByFunction operation. If present, indicates where to continue the
listing. **/
        Marker?: String;
        /** Optional integer. Specifies the maximum number of AWS Lambda function versions
to return in response. This parameter value must be greater than 0. **/
        MaxItems?: MaxListItems;
    }
    export interface ListVersionsByFunctionResponse {
        /** A string, present if there are more function versions. **/
        NextMarker?: String;
        /** A list of Lambda function versions. **/
        Versions?: FunctionList;
    }
    export interface PolicyLengthExceededException {
        Type?: String;
        message?: String;
    }
    export interface PublishVersionRequest {
        /** The Lambda function name. You can specify a function name (for example, 
Thumbnail ) or you can specify Amazon Resource Name (ARN) of the function (for
example, arn:aws:lambda:us-west-2:account-id:function:ThumbNail ). AWS Lambda
also allows you to specify a partial ARN (for example, account-id:Thumbnail ).
Note that the length constraint applies only to the ARN. If you specify only the
function name, it is limited to 64 character in length. **/
        FunctionName: FunctionName;
        /** The SHA256 hash of the deployment package you want to publish. This provides
validation on the code you are publishing. If you provide this parameter value
must match the SHA256 of the $LATEST version for the publication to succeed. **/
        CodeSha256?: String;
        /** The description for the version you are publishing. If not provided, AWS Lambda
copies the description from the $LATEST version. **/
        Description?: Description;
    }
    export interface RemovePermissionRequest {
        /** Lambda function whose resource policy you want to remove a permission from.

You can specify a function name (for example, Thumbnail ) or you can specify
Amazon Resource Name (ARN) of the function (for example, 
arn:aws:lambda:us-west-2:account-id:function:ThumbNail ). AWS Lambda also allows
you to specify a partial ARN (for example, account-id:Thumbnail ). Note that the
length constraint applies only to the ARN. If you specify only the function
name, it is limited to 64 character in length. **/
        FunctionName: FunctionName;
        /** Statement ID of the permission to remove. **/
        StatementId: StatementId;
        /** You can specify this optional parameter to remove permission associated with a
specific function version or function alias. If you don&#x27;t specify this
parameter, the API removes permission associated with the unqualified function
ARN. **/
        Qualifier?: Qualifier;
    }
    export interface RequestTooLargeException {
        Type?: String;
        message?: String;
    }
    export interface ResourceConflictException {
        /**  **/
        Type?: String;
        /**  **/
        message?: String;
    }
    export interface ResourceNotFoundException {
        Type?: String;
        Message?: String;
    }
    export interface ServiceException {
        Type?: String;
        Message?: String;
    }
    export interface SubnetIPAddressLimitReachedException {
        Type?: String;
        Message?: String;
    }
    export interface TooManyRequestsException {
        /** The number of seconds the caller should wait before retrying. **/
        retryAfterSeconds?: String;
        Type?: String;
        message?: String;
        Reason?: ThrottleReason;
    }
    export interface UnsupportedMediaTypeException {
        Type?: String;
        message?: String;
    }
    export interface UpdateAliasRequest {
        /** The function name for which the alias is created. **/
        FunctionName: FunctionName;
        /** The alias name. **/
        Name: Alias;
        /** Using this parameter you can change the Lambda function version to which the
alias points. **/
        FunctionVersion?: Version;
        /** You can change the description of the alias using this parameter. **/
        Description?: Description;
    }
    export interface UpdateEventSourceMappingRequest {
        /** The event source mapping identifier. **/
        UUID: String;
        /** The Lambda function to which you want the stream records sent.

You can specify a function name (for example, Thumbnail ) or you can specify
Amazon Resource Name (ARN) of the function (for example, 
arn:aws:lambda:us-west-2:account-id:function:ThumbNail ). AWS Lambda also allows
you to specify a partial ARN (for example, account-id:Thumbnail ).

If you are using versioning, you can also provide a qualified function ARN (ARN
that is qualified with function version or alias name as suffix). For more
information about versioning, see AWS Lambda Function Versioning and Aliases
[http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html]

Note that the length constraint applies only to the ARN. If you specify only the
function name, it is limited to 64 character in length. **/
        FunctionName?: FunctionName;
        /** Specifies whether AWS Lambda should actively poll the stream or not. If
disabled, AWS Lambda will not poll the stream. **/
        Enabled?: Enabled;
        /** The maximum number of stream records that can be sent to your Lambda function
for a single invocation. **/
        BatchSize?: BatchSize;
    }
    export interface UpdateFunctionCodeRequest {
        /** The existing Lambda function name whose code you want to replace.

You can specify a function name (for example, Thumbnail ) or you can specify
Amazon Resource Name (ARN) of the function (for example, 
arn:aws:lambda:us-west-2:account-id:function:ThumbNail ). AWS Lambda also allows
you to specify a partial ARN (for example, account-id:Thumbnail ). Note that the
length constraint applies only to the ARN. If you specify only the function
name, it is limited to 64 character in length. **/
        FunctionName: FunctionName;
        /** The contents of your zip file containing your deployment package. If you are
using the web API directly, the contents of the zip file must be base64-encoded.
If you are using the AWS SDKs or the AWS CLI, the SDKs or CLI will do the
encoding for you. For more information about creating a .zip file, go to 
Execution Permissions
[http://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role.html] 
in the AWS Lambda Developer Guide . **/
        ZipFile?: Blob;
        /** Amazon S3 bucket name where the .zip file containing your deployment package is
stored. This bucket must reside in the same AWS region where you are creating
the Lambda function. **/
        S3Bucket?: S3Bucket;
        /** The Amazon S3 object (the deployment package) key name you want to upload. **/
        S3Key?: S3Key;
        /** The Amazon S3 object (the deployment package) version you want to upload. **/
        S3ObjectVersion?: S3ObjectVersion;
        /** This boolean parameter can be used to request AWS Lambda to update the Lambda
function and publish a version as an atomic operation. **/
        Publish?: Boolean;
    }
    export interface UpdateFunctionConfigurationRequest {
        /** The name of the Lambda function.

You can specify a function name (for example, Thumbnail ) or you can specify
Amazon Resource Name (ARN) of the function (for example, 
arn:aws:lambda:us-west-2:account-id:function:ThumbNail ). AWS Lambda also allows
you to specify a partial ARN (for example, account-id:Thumbnail ). Note that the
length constraint applies only to the ARN. If you specify only the function
name, it is limited to 64 character in length. **/
        FunctionName: FunctionName;
        /** The Amazon Resource Name (ARN) of the IAM role that Lambda will assume when it
executes your function. **/
        Role?: RoleArn;
        /** The function that Lambda calls to begin executing your function. For Node.js, it
is the module-name.export value in your function. **/
        Handler?: Handler;
        /** A short user-defined function description. AWS Lambda does not use this value.
Assign a meaningful description as you see fit. **/
        Description?: Description;
        /** The function execution time at which AWS Lambda should terminate the function.
Because the execution time has cost implications, we recommend you set this
value based on your expected execution time. The default is 3 seconds. **/
        Timeout?: Timeout;
        /** The amount of memory, in MB, your Lambda function is given. AWS Lambda uses this
memory size to infer the amount of CPU allocated to your function. Your function
use-case determines your CPU and memory requirements. For example, a database
operation might need less memory compared to an image processing function. The
default value is 128 MB. The value must be a multiple of 64 MB. **/
        MemorySize?: MemorySize;
        VpcConfig?: VpcConfig;
        /** The parent object that contains your environment&#x27;s configuration settings. **/
        Environment?: Environment;
        /** The Amazon Resource Name (ARN) of the KMS key used to encrypt your function&#x27;s
environment variables. If you elect to use the AWS Lambda default service key,
pass in an empty string (&quot;&quot;) for this parameter. **/
        KMSKeyArn?: KMSKeyArn;
        /** The runtime environment for the Lambda function.

To use the Node.js runtime v4.3, set the value to &quot;nodejs4.3&quot;. To use earlier
runtime (v0.10.42), set the value to &quot;nodejs&quot;. **/
        Runtime?: Runtime;
    }
    export interface VpcConfig {
        /** A list of one or more subnet IDs in your VPC. **/
        SubnetIds?: SubnetIds;
        /** A list of one or more security groups IDs in your VPC. **/
        SecurityGroupIds?: SecurityGroupIds;
    }
    export interface VpcConfigResponse {
        /** A list of subnet IDs associated with the Lambda function. **/
        SubnetIds?: SubnetIds;
        /** A list of security group IDs associated with the Lambda function. **/
        SecurityGroupIds?: SecurityGroupIds;
        /** The VPC ID associated with you Lambda function. **/
        VpcId?: VpcId;
    }
  }
}
