export class Data {

}

export class Transactions {
    transactionsId: number;
    trans_date: string;
    ticker: string;
    flag: string;
    numberOfShare: number;
    monetryValue: number;
    // StockId: number;
    closing_price: number;

}
export class Answers {
    options: string;
    value: number;
}
export class Questions{
    Questions: string;
    Answer: Answers[];
}

export class Risk {
    Q: Questions[];
}

export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;

    constructor (options: {
        value? : T,
        key?: string,
        label?: string,
        required?: number,
        order?: number,
        controlType?: string
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
}
export class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';
    options: {key: string, value: string}[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}

