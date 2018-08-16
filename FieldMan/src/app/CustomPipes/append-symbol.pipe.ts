import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'appendSymbol'
})

export class AppendSymbolPipe implements PipeTransform {
    transform(value: number, symbol: string): string {
        if(value!=null){
            return value+"%"
        }
       return "" ;
    }
}