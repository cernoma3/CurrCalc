export class HistoryRecord
{
    baseSymbol: string;
    targetSymbol: string;
    amount: number;
    result: number;

    constructor(
        baseSymbol: string,
        targetSymbol: string,
        amount: number,
        result: number
    )
    {
        this.baseSymbol = baseSymbol;
        this.targetSymbol = targetSymbol;
        this.amount = amount;
        this.result = result;
    }
}