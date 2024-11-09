export default class Hotkey{
    name:string;
    keys: string[];
    sequential = true; //TRUE: each key must be pressed in order FALSE: keys can be pressed in any order
    combinatory = true; //TRUE: need to hold every key FALSE: each key must be pressed once

    constructor( newKeys:string[], name:string,  ordered: boolean, combinatory:boolean){
      this.keys = newKeys;
      this.sequential = ordered;
      this.name = name
      this.combinatory = combinatory 
    }


  
    displayKeys():string {
     let returnString= ""
     const seperator = !this.combinatory? "->" : "+";
  
     for(let i = 0;i<this.keys.length;i++){
      returnString = 
      returnString + this.keys[i] + ( i==this.keys.length-1? " " : " " + seperator + " ")
     }
  
      return returnString;
    }
  
  }

  export class Key{
    name: string; 
    key: string;
    keyCode: number;

    constructor(key:string, keycode:number, name:string){
      this.name = name; 
      this.key = key; 
      this.keyCode = keycode
    }
  }

  export class HotkeySet{
    name:string;
    hotkeys: Hotkey[];

    constructor(name:string,hotkeys:Hotkey[]){
      this.name = name; 
      this.hotkeys = hotkeys; 
    }
  }