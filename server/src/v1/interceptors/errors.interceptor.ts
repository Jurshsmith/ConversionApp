import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    BadGatewayException,
    CallHandler,
    RequestTimeoutException,
    NotAcceptableException,
  } from '@nestjs/common';
  import { Observable, throwError, of } from 'rxjs';
  import { catchError } from 'rxjs/operators';
import { ValidationError } from 'class-validator';
import { MsgResponse } from '../handlers/responses.handler';
  
  @Injectable()
  export class ErrorsInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler
      ): Observable<any> {
        return next.handle().pipe(
                    catchError(err => {
                        if (err.message){
                            if (err.message.message instanceof Array){
                                const theError = err.message.message[0];
                                if (theError instanceof ValidationError) {
                                    let { constraints: { customText } } = theError;

                                    if (customText)
                                        return throwError(
                                                new NotAcceptableException(theError.constraints.customText)
                                            );

                                    else if (theError.constraints){
                                        const messages = [];
                                        Object.keys(theError.constraints)
                                        .forEach(error => messages.push(theError.constraints[error]))

                                        return throwError(
                                            new NotAcceptableException(messages)
                                        );
                                    } else {
                                        return throwError(err);
                                    }
                                }
                            }
                        }
                        
                        return throwError(err);
                      }),
                );
      }
  }