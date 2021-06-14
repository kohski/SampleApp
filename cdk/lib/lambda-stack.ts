import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
import * as apigw from '@aws-cdk/aws-apigateway'

export class LambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const getFunction = new lambda.Function(
      this,
      'GetFunction',
      {
        code: lambda.Code.fromAsset('../functions/build/get'),
        environment: {},
        functionName: `get-todo-function`,
        handler: 'index.handler',
        runtime: lambda.Runtime.NODEJS_14_X,
        timeout: cdk.Duration.seconds(3),
      },
    )

    const restApi = new apigw.RestApi(this, 'RestApi', {
      restApiName: `todo-api`,
      deployOptions: {
        stageName: 'v1',
      },
    });

    const todoResource = restApi.root.addResource('todo');
    const todoIdResource = todoResource.addResource(
      '{todoId}',
    );

    todoIdResource.addMethod(
      'GET',
      new apigw.LambdaIntegration(getFunction)
    );
  }
}
