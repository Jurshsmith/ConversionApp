import { Injectable, HttpStatus } from '@nestjs/common';
import { IConvert, IUnit } from '../../../../interfaces/convert.interface';
import { ALL_UNITS_MAP as mapper } from '../../../../../v1/constants';
import { MsgResponse } from '../../../../handlers/responses.handler';
import { normalizeNumber, oneDecimalApproximate, normalizeString } from '../../../../utils/index';
const converter = require('convert-units');

@Injectable()
export class ConversionService {

    mapFilterer(unit): IUnit {
        return mapper.filter(eachUnit => eachUnit.unit === unit)[0];
    }

    async convert({ input, from, to } : IConvert){
        return converter(input)
            .from(
                this.mapFilterer(normalizeString(from.toLowerCase())).symbol
            ).to(
                this.mapFilterer(normalizeString(to.toLowerCase())).symbol
            );
    }

    async determineIfCorrect(payload : IConvert){

        try {
            let answer = await this.convert(payload);
            let { response } = payload;

            answer = oneDecimalApproximate(normalizeNumber(answer));
            
            response = oneDecimalApproximate(normalizeNumber(response));
            
            console.log("answer", answer, "response", response, "booleanValue", "ALL_unit", mapper.length)
            if (answer === response){
                return MsgResponse(
                    HttpStatus.OK,
                    "correct",
                    true,  
                )
            } else {
                return  MsgResponse(
                    HttpStatus.OK,
                    "incorrect",
                    true,  
                )
            }
        } catch(e){
            return  MsgResponse(
                HttpStatus.NOT_ACCEPTABLE,
                "invalid",
                false,  
            )
        }
        
    }
    
}
