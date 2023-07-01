// 题目类
export default class ExamClass {
    titleNumber:number;
    //题目文字描述
    topic: string;
    //选项数组 预防有多选题目
    selectArray: Array<Select>;

    constructor(topic: string, selectArray: Array<Select>,title:number) {
        this.topic = topic
        this.selectArray = selectArray
        this.titleNumber=title
    }
}

export class Select {
    text: string;
    ifClick: boolean;
    private _originalTitleNumber:Number=0;
    get originalTitleNumber(): Number {
        return this._originalTitleNumber;
    }

    set originalTitleNumber(value: Number) {
        this._originalTitleNumber = value;
    }

    get afterTitleNumber(): Number {
        return this._afterTitleNumber;
    }

    set afterTitleNumber(value: Number) {
        this._afterTitleNumber = value;
    }

    private _afterTitleNumber:Number=0;
    constructor(text: string) {
        this.text = text
        this.ifClick = false
    }
}

export function Change(select:Select){

}