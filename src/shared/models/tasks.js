import DefineObjectsValidator from "../../tasks/define-objects/define-objects-business";
const Tasks={
    1:{
    Number:1,
    Tasks:1,
    RightAnswer:0,
    Description:"Бұл жерде - үш түсті қосып және сөндіруге болады.  Iске қосу түймесін басып, тексеріп көріңіз!",
    NextTaskUrl:"/app/second"
  },  
  2:{
    Number:2,
    Tasks:10,
    RightAnswer:0,
    Description:"1-тақырып: «Компьютермен жұмыс кезіндегі қауіпсіздік техникасы. Дұрыс және бұрыс әрекеттерді топтастырыңыз!",
    NextTaskUrl:"/app/third"
  },
  3:{
    Number:3,
    Tasks:4,
    RightAnswer:0,
    Description:"Компьютердің негізгі құрылғылары аттарын жазыңыз!",
    NextTaskUrl:"/app/fourth"
  },
  4:{
    Number:4,
    Tasks:9,
    RightAnswer:0,
    Description:"Жануарлардың суретін, неше аяғы бар екенін, және де сипаттамасын беріңіздер",
    NextTaskUrl:null
  },
  currentNum:1
};
export default Tasks;