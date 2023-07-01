import ExamClass, {Select} from "@/ts/examClass/ExamClass";

const select1 = new Select("这是第一asdhasghdaskijugdasiugdasiugdaisugdasyuidgfgua题第一个选项");
select1.originalTitleNumber=1;
select1.ifClick=true
const select2 = new Select("这是第1题第2个选项");
select2.originalTitleNumber=2
const select3 = new Select("这是第1题第3个选项");
select3.originalTitleNumber=3
const select4 = new Select("这是第1题第4个选项");
select4.originalTitleNumber=4
const examClass = new ExamClass("党的十九大会议主题是：不忘初心，（），高举中国特色社会主义伟大旗帜，决胜全面建成小康社会，夺取新时代中国特色社会主义伟大胜利，为实现中华民族伟大复兴的中国梦不懈奋斗。(来源：学习强国)", [select1,select2, select3, select4],1);
const examMapArray = new Map<number, ExamClass>();
examMapArray.set(1, examClass)
const select21 = new Select("新时期中国特色社会主义思想");
const select22 = new Select("这是第2题第2个选项");
const select23 = new Select("这是第2题第3个选项");
const select24 = new Select("这是第2题第4个选项");
const select25 = new Select("这是第2题第5个选项");
const select26 = new Select("这是第2题第6个选项");
const examClass2 = new ExamClass("这是第二题文字描述，问马辰旭今年多大", [select21, select22, select23, select24,select25,select26],2);
examMapArray.set(2, examClass2)
const select31 = new Select("这是第3题第一个选项");
const select32 = new Select("这是第3题第2个选项");
const select33 = new Select("这是第3题第3个选项");
const select34 = new Select("这是第3题第4个选项");
const examClass3 = new ExamClass("这是第三题文字描述，问马辰旭今年多大", [select31, select32, select33, select34],3);
examMapArray.set(3, examClass3)
export {
    examMapArray
}