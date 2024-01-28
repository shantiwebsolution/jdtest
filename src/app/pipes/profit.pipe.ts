import { PercentPipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'profit', standalone: true})

export class ProfitPipe implements PipeTransform
{
    transform(value: number, profitPercentge = 10) {
        return value*profitPercentge/100;
    }
}
